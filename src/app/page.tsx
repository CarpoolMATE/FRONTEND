"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/signin");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const router = useRouter();
  return (
    <div className="w-[375px] h-[812px] bg-[#007AFF] flex jutsify-center items-center">
      <h1 className="w-full font-sans text-[90px] text-white flex-1 text-center">
        mate
      </h1>
    </div>
  );
}
