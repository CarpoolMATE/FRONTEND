"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useCallback, useEffect, useState } from "react";

interface University {
  name: string;
  campusName: string;
  type: string;
  category: string;
  region: string;
  address: string;
  websiteUrl: string;
}
// UniversityItem.tsx
interface UniversityItemProps {
  university: University;
  onSelect: (university: University) => void;
  index: number;
}

const UniversityItem: React.FC<UniversityItemProps> = ({
  university,
  index,
}) => {
  return (
    <div
      data-university-index={index}
      className="block hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
    >
      <div className="p-3">
        <div className="font-medium text-gray-900">{university.name}</div>
        {university.campusName && (
          <div className="text-sm text-gray-500">{university.campusName}</div>
        )}
      </div>
    </div>
  );
};

// UniversityDropdown.tsx
interface UniversityDropdownProps {
  universities: University[];
  onSelect: (university: University) => void;
}

const UniversityDropdown: React.FC<UniversityDropdownProps> = ({
  universities,
  onSelect,
}) => {
  const handleClick = (event: React.MouseEvent) => {
    // 클릭된 요소와 그 부모들을 확인
    let target = event.target as HTMLElement;
    while (target) {
      const index = target.getAttribute("data-university-index");
      if (index !== null) {
        const university = universities[parseInt(index)];
        if (university) {
          onSelect(university);
          return;
        }
      }
      target = target.parentElement as HTMLElement;
    }
  };

  return (
    <div
      onClick={handleClick}
      className="max-h-[200px] overflow-y-auto bg-white rounded-lg shadow-lg"
    >
      {universities.map((university, index) => (
        <UniversityItem
          key={`${university.name}-${university.campusName}-${index}`}
          university={university}
          onSelect={onSelect}
          index={index}
        />
      ))}
    </div>
  );
};

// UniversitiesPage.tsx
const Universities: React.FC = () => {
  const router = useRouter();
  const [filteredUniversities, setFilteredUniversities] = useState<
    University[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUniversity, setSelectedUniversity] =
    useState<University | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const params = useSearchParams();
  const which = params.get("which");

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch(
          `/api/universities${
            searchTerm ? `?searchSchulNm=${encodeURIComponent(searchTerm)}` : ""
          }`
        );

        if (!response.ok) {
          throw new Error("API 호출에 실패했습니다");
        }

        const data = await response.json();
        if (data.success) {
          setFilteredUniversities(data.universities);
          setShowDropdown(true);
        }
      } catch (err) {
        console.error("Error:", err);
      }
    };

    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        fetchUniversities();
      } else {
        setShowDropdown(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleUniversitySelect = useCallback((university: University) => {
    setSelectedUniversity(university);
    const displayName = university.campusName
      ? `${university.name} ${university.campusName}`
      : university.name;
    setSearchTerm(displayName);
    setShowDropdown(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".university-search-container")) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isStartButtonEnabled = selectedUniversity !== null;

  return (
    <div className="relative w-full px-5 pt-[150px]">
      <div className="flex top-[57.5px]">
        <svg
          onClick={() => router.back()}
          className="absolute left-5 top-[57.5px] cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
        >
          <path
            d="M10 1.10938L1.82023 7.92585C1.39337 8.28157 1.39337 8.93718 1.82023 9.2929L10 16.1094"
            stroke="#505050"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute left-[141.5px] top-[52.5px] text-center text-black/90 text-xl font-semibold font-['Pretendard'] leading-[30px]">
          학교 정보 입력
        </div>
      </div>

      <div className="text-[#3c3c3c] text-2xl font-bold font-['Pretendard'] leading-9 mb-[50px]">
        학교 정보를 입력하고
        <br />
        메이트 카풀 서비스를 시작해요
      </div>

      <div className="relative university-search-container">
        <div className="w-full max-w-[335px] h-[51px] p-[15px] bg-white rounded-[10px] border border-[#e9e9e9] justify-between items-center inline-flex">
          <input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedUniversity(null);
            }}
            onFocus={() => {
              if (filteredUniversities.length > 0) {
                setShowDropdown(true);
              }
            }}
            placeholder="학교명 검색"
            className="w-full text-[#b2b2b2] text-lg font-medium font-['Pretendard'] outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            className="flex-shrink-0"
          >
            <path
              d="M16 16L12.3809 12.3809M12.3809 12.3809C12.9999 11.7618 13.491 11.0269 13.826 10.218C14.1611 9.40917 14.3335 8.54225 14.3335 7.66676C14.3335 6.79127 14.1611 5.92435 13.826 5.1155C13.491 4.30665 12.9999 3.57172 12.3809 2.95265C11.7618 2.33358 11.0269 1.84251 10.218 1.50748C9.40917 1.17244 8.54225 1 7.66676 1C6.79127 1 5.92435 1.17244 5.1155 1.50748C4.30665 1.84251 3.57172 2.33358 2.95265 2.95265C1.70239 4.20291 1 5.89863 1 7.66676C1 9.4349 1.70239 11.1306 2.95265 12.3809C4.20291 13.6311 5.89863 14.3335 7.66676 14.3335C9.4349 14.3335 11.1306 13.6311 12.3809 12.3809Z"
              stroke="#666666"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 드롭다운 */}
        {showDropdown && filteredUniversities.length > 0 && (
          <div className="absolute top-full left-0 right-0 w-full max-w-[335px] mt-2 z-50">
            <UniversityDropdown
              universities={filteredUniversities}
              onSelect={handleUniversitySelect}
            />
          </div>
        )}
      </div>

      <button
        className={`w-[335px] h-[51px] px-[30px] py-[15px] rounded-xl justify-center items-center gap-2.5 inline-flex mt-[405px] ${
          isStartButtonEnabled
            ? "bg-blue-500 cursor-pointer"
            : "bg-[#dadde1] cursor-not-allowed"
        }`}
        disabled={!isStartButtonEnabled}
        onClick={() => {
          if (selectedUniversity) {
            console.log("Selected university:", selectedUniversity);
            router.push(
              which === "edit" ? "/profile/edit?which=패신저" : "/home"
            );
          }
        }}
      >
        <div
          className={`text-lg font-semibold font-['Pretendard'] ${
            isStartButtonEnabled ? "text-white" : "text-[#a2abb4]"
          }`}
        >
          {which === "edit" ? "수정하기" : "시작하기"}
        </div>
      </button>
    </div>
  );
};

const UniversitiesPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Universities />
    </Suspense>
  );
};

export default UniversitiesPage;
