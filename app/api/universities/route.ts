/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

function decodeServiceKey(key: string): string {
  try {
    return decodeURIComponent(key);
  } catch {
    return key;
  }
}

export async function GET(request: Request) {
  try {
    const serviceKey = process.env.NEXT_PUBLIC_UNIVERSITY_API_KEY;
    if (!serviceKey) {
      return NextResponse.json(
        { error: "API key is not configured" },
        { status: 500 }
      );
    }

    const decodedKey = decodeServiceKey(serviceKey);
    const { searchParams } = new URL(request.url);

    // 기본 파라미터 설정
    // 기본 파라미터 설정
    const defaultParams = {
      apiKey: decodedKey,
      svcType: "api",
      svcCode: "SCHOOL",
      contentType: "xml",
      gubun: "univ_list", // 대학교 -> univ_list로 변경
    };

    // URL에서 추가 파라미터 가져오기
    const searchSchulNm = searchParams.get("searchSchulNm") || "";

    // API URL 구성
    const baseUrl = "http://www.career.go.kr/cnet/openapi/getOpenApi";
    const params = new URLSearchParams({
      ...defaultParams,
    });

    // 선택적 파라미터 추가
    if (searchSchulNm) params.append("searchSchulNm", searchSchulNm);

    const fullUrl = `${baseUrl}?${params.toString()}`;
    console.log("Making request to:", fullUrl);

    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        Accept: "application/xml",
      },
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const xmlText = await response.text();
    console.log("Raw XML response:", xmlText);

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
      parseAttributeValue: true,
      trimValues: true,
      parseTagValue: true,
      isArray: (name) => {
        return name === "content";
      },
    });

    const result = parser.parse(xmlText);
    console.log("Parsed result:", JSON.stringify(result, null, 2));

    // API 에러 응답 체크
    if (result?.result?.content?.[0]?.code < 0) {
      return NextResponse.json(
        {
          error: "API Error",
          message: result.result.content[0].message,
          code: result.result.content[0].code,
          debug: {
            xmlResponse: xmlText,
            parsedResult: result,
            requestUrl: fullUrl,
            headers: Object.fromEntries(response.headers),
          },
        },
        { status: 400 }
      );
    }

    const dataSearch = result?.dataSearch;
    if (!dataSearch) {
      return NextResponse.json(
        {
          error: "Invalid API response format",
          debug: {
            xmlResponse: xmlText,
            parsedResult: result,
            requestUrl: fullUrl,
            headers: Object.fromEntries(response.headers),
          },
        },
        { status: 400 }
      );
    }

    // 결과가 없는 경우 빈 배열 반환
    if (!dataSearch.content) {
      return NextResponse.json({
        success: true,
        universities: [],
        totalCount: 0,
      });
    }

    // content가 배열이 아닌 경우 배열로 변환
    const contents = Array.isArray(dataSearch.content)
      ? dataSearch.content
      : [dataSearch.content];

    const totalCount = contents[0]?.totalCount || contents.length;

    return NextResponse.json({
      success: true,
      universities: contents.map((content: any) => ({
        name: content.schoolName,
        type: content.schoolType,
        category: content.schoolGubun,
        establishmentType: content.estType,
        region: content.region,
        address: content.adres,
        websiteUrl: content.link,
        campusName: content.campusName,
        collegeInfoUrl: content.collegeinfourl,
      })),
      totalCount: parseInt(totalCount),
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
