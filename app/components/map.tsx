/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    kakao: any;
  }
}

interface BasicMapProps {
  onClose: () => void;
}

export default function BasicMap({ onClose }: BasicMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("Kakao maps not loaded");
        return;
      }

      try {
        const container = mapContainerRef.current;
        if (!container) {
          console.error("Map container not found");
          return;
        }

        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        new window.kakao.maps.Map(container, options);
        console.log("Map initialized successfully");
      } catch (err) {
        console.error("Error initializing map:", err);
        setError("Failed to initialize the map");
      }
    };

    if (isLoaded) {
      window.kakao.maps.load(initializeMap);
    }
  }, [isLoaded]);

  const handleScriptLoad = () => {
    console.log("Kakao script loaded");
    setIsLoaded(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOJSKEY}&autoload=false`}
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={(e) => {
          console.error("Script load error:", e);
          setError("Failed to load Kakao Maps");
        }}
      />

      {error ? (
        <div className="w-full h-full flex items-center justify-center text-red-500">
          <p>{error}</p>
        </div>
      ) : (
        <div ref={mapContainerRef} id="map" className="w-full h-full" />
      )}

      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-[51] bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
