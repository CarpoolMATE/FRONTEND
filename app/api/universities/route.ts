import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

function decodeServiceKey(key: string): string {
  try {
    return decodeURIComponent(key);
  } catch {
    return key;
  }
}

export async function GET() {
  try {
    const serviceKey = process.env.NEXT_PUBLIC_UNIVERSITY_API_KEY;
    if (!serviceKey) {
      return NextResponse.json(
        { error: "API key is not configured" },
        { status: 500 }
      );
    }

    const decodedKey = decodeServiceKey(serviceKey);

    // 1. 베이스 URL 설정
    const baseUrl =
      "http://openapi.academyinfo.go.kr/openapi/service/rest/BasicInformationService/getUniversityCode";

    // 2. 파라미터 구성
    const params = new URLSearchParams();
    params.append("serviceKey", decodedKey);
    params.append("svyYr", "2023");
    params.append("numOfRows", "100");
    params.append("pageNo", "1");

    const fullUrl = `${baseUrl}?${params.toString()}`;

    // 3. URL 로깅
    console.log("Full URL:", fullUrl);

    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        Accept: "application/xml",
        "Content-Type": "application/xml",
      },
    });

    // 4. 응답 상태 및 헤더 로깅
    console.log("Response Status:", response.status);
    console.log("Response Headers:", Object.fromEntries(response.headers));

    const xmlText = await response.text();

    // 5. XML 응답 로깅
    console.log("XML Response:", xmlText);

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
      parseAttributeValue: true,
      trimValues: true,
    });

    const result = parser.parse(xmlText);

    // 6. 파싱된 결과 로깅
    console.log("Parsed Result:", result?.response?.header);

    if (
      !result?.response?.header?.resultCode ||
      result.response.header.resultCode !== "00"
    ) {
      return NextResponse.json(
        {
          error: result?.response?.header?.resultMsg || "API Error",
          debug: {
            resultCode: result?.response?.header?.resultCode,
            xmlResponse: xmlText,
            fullUrl: fullUrl,
          },
        },
        { status: 400 }
      );
    }

    const items = result?.response?.body?.items?.item || [];
    const universities = Array.isArray(items) ? items : [items];

    return NextResponse.json({
      success: true,
      universities,
      totalCount: universities.length,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch universities",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
