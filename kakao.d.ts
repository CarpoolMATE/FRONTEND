declare namespace kakao {
  namespace maps {
    export function load(callback: () => void): void;
    export const Marker: any;
    export const Map: any;
    export const CustomOverlay: any;
    export const LatLng: any;
    namespace services {
      export const Geocoder: any;
      export const Places: any;
      export const Status: any;
    }
  }
}
