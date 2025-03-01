'use client';

import { useEffect, useRef, useState } from 'react';

import {
  KakaoPlace,
  MapModalProps,
} from '@/app/(client)/carpool-registration/apis/postCarpoolRegistration/types';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Input from '@/components/Input';

const MapModal = ({
  onClose,
  onConfirm,
  departureCoordinate,
}: MapModalProps) => {
  // 부모에서 전달된 기본 주소는 초기값으로만 사용 (검색 전 표시용)
  const [address, setAddress] = useState<string>(departureCoordinate);
  const [houseName, setHouseName] = useState<string>(departureCoordinate);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<KakaoPlace[]>([]);
  const [selectedCoords, setSelectedCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // 원래 위치(검색 전 기본값)를 저장 (검색 후 업데이트하지 않음)
  const [originalCoords, setOriginalCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // 아래 useRef에는 가능한 경우 Kakao Maps SDK 타입을 사용합니다.
  const mapRef = useRef<typeof kakao.maps.Map | null>(null);
  const geocoderRef = useRef<typeof kakao.maps.services.Geocoder | null>(null);
  const placesRef = useRef<typeof kakao.maps.services.Places | null>(null);
  const markerRef = useRef<typeof kakao.maps.Marker | null>(null);
  const overlayRef = useRef<typeof kakao.maps.CustomOverlay | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // 검색 결과 클릭 시, 검색 결과에 있는 주소와 좌표를 그대로 사용하여 업데이트
  const handleSelectLocation = (place: KakaoPlace) => {
    const selectedAddress = place.road_address_name || place.address_name;
    setAddress(String(selectedAddress));
    setHouseName(place.place_name);
    setSearchResults([]);
    const coords = {
      lat: parseFloat(place.y),
      lng: parseFloat(place.x),
    };
    setSelectedCoords(coords);
    updateMarkerAndOverlay(coords, place.place_name);
  };

  // geocoder를 사용해서 주소를 검색하고, 최신 주소와 좌표로 업데이트 (초기 로드시 사용)
  const searchLocation = (location: string) => {
    if (!geocoderRef.current) return;
    geocoderRef.current.addressSearch(
      location,
      (result: KakaoPlace[], status: string) => {
        if (
          status === window.kakao.maps.services.Status.OK &&
          result.length > 0
        ) {
          const newAddress =
            result[0].road_address_name || result[0].address_name;
          setAddress(String(newAddress));
          const coords = {
            lat: parseFloat(result[0].y),
            lng: parseFloat(result[0].x),
          };
          setSelectedCoords(coords);
          if (!originalCoords) {
            setOriginalCoords(coords);
          }
          // 초기 호출 시에는 기본값(houseName)이 departureCoordinate이므로 그대로 사용
          updateMarkerAndOverlay(coords, houseName);
        }
      },
    );
  };

  // 마커와 오버레이 업데이트 함수, 최신 houseName을 파라미터로 받음
  const updateMarkerAndOverlay = (
    coords: { lat: number; lng: number },
    currentHouseName: string,
  ) => {
    // 기존 마커 삭제
    if (markerRef.current) markerRef.current.setMap(null);
    const marker = new window.kakao.maps.Marker({
      map: mapRef.current!,
      position: new window.kakao.maps.LatLng(coords.lat, coords.lng),
    });
    markerRef.current = marker;

    // 기존 오버레이 삭제
    if (overlayRef.current) overlayRef.current.setMap(null);
    const overlay = new window.kakao.maps.CustomOverlay({
      position: new window.kakao.maps.LatLng(coords.lat, coords.lng),
      content: `
        <div style="
          position: relative;
          width: 200px;
          background: white;
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
          font-family: Arial, sans-serif;
          text-align: center;
          border: none;
        ">
          <div style="font-size: 14px; font-weight: bold; margin-bottom: 4px;">이 위치 전송</div>
          <div style="font-size: 12px; color: #555;">${currentHouseName}</div>
          <div style="
            position: absolute;
            bottom: -10px;
            left: 50%;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid white;
            transform: translateX(-50%);
          "></div>
        </div>
      `,
      yAnchor: 1.5,
    });
    overlay.setMap(mapRef.current!);
    overlayRef.current = overlay;

    mapRef.current!.setCenter(
      new window.kakao.maps.LatLng(coords.lat, coords.lng),
    );
  };

  // "현재 마커 위치로 이동" 기능
  const handleMoveToMarkerLocation = () => {
    if (!selectedCoords || !mapRef.current) {
      console.error('현재 마커 위치 정보가 없습니다.');
      return;
    }
    mapRef.current!.setCenter(
      new window.kakao.maps.LatLng(selectedCoords.lat, selectedCoords.lng),
    );
    if (markerRef.current) {
      markerRef.current.setPosition(
        new window.kakao.maps.LatLng(selectedCoords.lat, selectedCoords.lng),
      );
    }
  };

  useEffect(() => {
    if (!placesRef.current || searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    placesRef.current.keywordSearch(
      searchQuery,
      (data: KakaoPlace[], status: string) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setSearchResults(data);
        } else {
          setSearchResults([]);
        }
      },
    );
  }, [searchQuery]);

  useEffect(() => {
    const loadKakaoMapScript = () => {
      if (window.kakao && window.kakao.maps) {
        initMap();
        return;
      }
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&libraries=services&autoload=false`;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(initMap);
      };
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error('Kakao Map is not loaded.');
        return;
      }
      const mapContainer = document.getElementById('map') as HTMLElement;
      if (!mapContainer) return;
      const mapOptions = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      };
      mapRef.current = new window.kakao.maps.Map(mapContainer, mapOptions);
      placesRef.current = new window.kakao.maps.services.Places();
      geocoderRef.current = new window.kakao.maps.services.Geocoder();
      // 기본값으로 전달받은 주소(departureCoordinate)를 geocoding해서 초기 마커 표시
      searchLocation(departureCoordinate);
    };

    loadKakaoMapScript();
  }, [departureCoordinate]);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col z-50">
      <div className="relative bg-white px-4 py-2 border-b border-placeholder gap-4 text-center flex flex-col">
        <span className="font-bold text-2xl">지도</span>
        <div className="absolute top-4 left-4 cursor-pointer" onClick={onClose}>
          <Icon icon="X" />
        </div>
        <Input
          placeholder="장소명으로 검색"
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchResults.length > 0 && (
          <div className="absolute left-0 top-full w-full bg-white shadow-lg rounded-lg mt-1 max-h-60 overflow-auto border z-[70]">
            {searchResults.map((place, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer border-b hover:bg-gray-100"
                onClick={() => handleSelectLocation(place)}
              >
                {place.place_name} (
                {place.road_address_name || place.address_name})
              </div>
            ))}
          </div>
        )}
      </div>
      <div id="map" className="w-full h-full relative">
        <button
          className="absolute top-4 left-4 z-50 bg-white p-2 rounded-full shadow-lg cursor-pointer"
          onClick={handleMoveToMarkerLocation}
        >
          <Icon icon="MY_LOCATION" className="w-10 h-10" />
        </button>
      </div>
      <div className="mt-auto p-5">
        <Button
          onClick={() =>
            selectedCoords &&
            onConfirm(address, selectedCoords.lat, selectedCoords.lng)
          }
        >
          선택
        </Button>
      </div>
    </div>
  );
};

export default MapModal;
