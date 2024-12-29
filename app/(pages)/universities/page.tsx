"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface University {
  schlKrnNm: string;
  campusNm: string;
  [key: string]: any;
}

const UniversitiesPage: React.FC = () => {
  const router = useRouter();

  const [universities, setUniversities] = useState<University[]>([]);
  const [filteredUniversities, setFilteredUniversities] = useState<
    University[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUniversities = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/universities");

        if (!response.ok) {
          throw new Error("API 호출에 실패했습니다");
        }

        const data = await response.json();
        const items = data?.response?.body?.items?.item || [];
        const universityList = Array.isArray(items) ? items : [items];

        setUniversities(universityList);
        setFilteredUniversities(universityList);
      } catch (err) {
        console.error("Error:", err);
        setError(
          err instanceof Error
            ? err.message
            : "데이터를 불러오는데 실패했습니다"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  // 검색어에 따라 대학교 목록 필터링
  useEffect(() => {
    const filtered = universities.filter((university) =>
      university.schlKrnNm.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUniversities(filtered);
  }, [searchTerm, universities]);

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

      <div className="relative">
        <div className="w-full max-w-[335px] h-[51px] p-[15px] bg-white rounded-[10px] border border-[#e9e9e9] justify-between items-center inline-flex">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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

        {/* 자동완성 드롭다운 */}
        {searchTerm && (
          <div className="absolute top-[43px] w-full max-w-[335px] mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-[300px] overflow-y-auto z-10">
            {filteredUniversities.length > 0 ? (
              filteredUniversities.map((university) => (
                <div
                  key={university.schlKrnNm}
                  className="p-3 hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    setSearchTerm(university.schlKrnNm);
                    // TODO: 선택된 대학교 처리 로직 추가
                  }}
                >
                  <div className="font-medium text-gray-900">
                    {university.schlKrnNm}
                  </div>
                  {university.campusNm && (
                    <div className="text-sm text-gray-500">
                      {university.campusNm}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-3 text-gray-500 text-center">
                검색 결과가 없습니다
              </div>
            )}
          </div>
        )}
      </div>

      <div className="w-[335px] h-[51px] px-[30px] py-[15px] bg-[#dadde1] rounded-xl justify-center items-center gap-2.5 inline-flex mt-[383px]">
        <div className="text-[#a2abb4] text-lg font-semibold font-['Pretendard']">
          시작하기
        </div>
      </div>
    </div>
  );
};

export default UniversitiesPage;
