// app/hooks/useKakaoLoader.ts
import { useState, useEffect } from "react";
import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useKakaoLoaderOrigin({
    appkey: process.env.NEXT_PUBLIC_KAKAOJSKEY || "",
    libraries: ["services"],
  });

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      setIsLoaded(true);
    }
  }, []);

  return isLoaded;
}
