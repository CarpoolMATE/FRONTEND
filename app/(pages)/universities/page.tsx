"use client";
import React, { useEffect, useState } from "react";

interface University {
  schlKrnNm: string;
  campusNm: string;
  [key: string]: any;
}

const UniversitiesPage: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="ml-2">로딩 중...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">에러 발생</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">대학교 목록</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {universities.map((university) => (
          <div
            key={university.schlKrnNm}
            className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow bg-white"
          >
            <h2 className="text-lg font-semibold">{university.schlKrnNm}</h2>
            {university.campusNm && (
              <p className="text-gray-600 mt-1">{university.campusNm}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversitiesPage;
