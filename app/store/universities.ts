/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface University {
  name: string;
  campusName: string;
  type: string;
  category: string;
  region: string;
  address: string;
  websiteUrl: string;
}

interface UniversitiesState {
  filteredUniversities: University[];
  searchTerm: string;
  selectedUniversity: University | null;
  showDropdown: boolean;
}

interface UniversitiesActions {
  setFilteredUniversities: (universities: University[]) => void;
  setSearchTerm: (term: string) => void;
  setSelectedUniversity: (university: University | null) => void;
  setShowDropdown: (show: boolean) => void;
  handleUniversitySelect: (university: University) => void;
  fetchUniversities: (searchTerm: string) => Promise<void>;
  reset: () => void;
}

type UniversitiesStore = UniversitiesState & UniversitiesActions;

const initialState: UniversitiesState = {
  filteredUniversities: [],
  searchTerm: "",
  selectedUniversity: null,
  showDropdown: false,
};

export const useUniversitiesStore = create<UniversitiesStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        setFilteredUniversities: (universities) =>
          set(
            { filteredUniversities: universities },
            false,
            "setFilteredUniversities"
          ),

        setSearchTerm: (term) =>
          set(
            { searchTerm: term, selectedUniversity: null },
            false,
            "setSearchTerm"
          ),

        setSelectedUniversity: (university) =>
          set(
            { selectedUniversity: university },
            false,
            "setSelectedUniversity"
          ),

        setShowDropdown: (show) =>
          set({ showDropdown: show }, false, "setShowDropdown"),

        handleUniversitySelect: (university) => {
          const displayName = university.campusName
            ? `${university.name} ${university.campusName}`
            : university.name;

          set(
            {
              selectedUniversity: university,
              searchTerm: displayName,
              showDropdown: false,
            },
            false,
            "handleUniversitySelect"
          );
        },

        fetchUniversities: async (searchTerm) => {
          try {
            const response = await fetch(
              `/api/universities${
                searchTerm
                  ? `?searchSchulNm=${encodeURIComponent(searchTerm)}`
                  : ""
              }`
            );

            if (!response.ok) {
              throw new Error("API 호출에 실패했습니다");
            }

            const data = await response.json();
            if (data.success) {
              set(
                {
                  filteredUniversities: data.universities,
                  showDropdown: true,
                },
                false,
                "fetchUniversities"
              );
            }
          } catch (error) {
            console.error("Error fetching universities:", error);
            set(
              {
                filteredUniversities: [],
                showDropdown: false,
              },
              false,
              "fetchUniversities_error"
            );
          }
        },

        reset: () => set(initialState, false, "reset"),
      }),
      {
        name: "universities-storage",
        partialize: (state) => ({
          selectedUniversity: state.selectedUniversity,
        }),
      }
    )
  )
);

// Optional: Subscribe to store changes for debugging
if (process.env.NODE_ENV === "development") {
  useUniversitiesStore.subscribe((state) => console.log("New state:", state));
}
