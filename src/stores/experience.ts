import { create } from "zustand";

type ExperienceState = {
  chapter: number;
  progress: number;
  chapterProgress: number;
  selected: string | null;
  hovered: string | null;
  exploded: boolean;
  cycle: number;
  fleet: number;
  setChapter: (chapter: number) => void;
  setProgress: (progress: number) => void;
  setChapterProgress: (progress: number) => void;
  select: (selected: string | null) => void;
  setHovered: (hovered: string | null) => void;
  toggleExploded: () => void;
  resetMachine: () => void;
  setCycle: (cycle: number) => void;
  setFleet: (fleet: number) => void;
};

export const useExperience = create<ExperienceState>((set) => ({
  chapter: 0,
  progress: 0,
  chapterProgress: 0,
  selected: null,
  hovered: null,
  exploded: false,
  cycle: -1,
  fleet: 1,
  setChapter: (chapter) => set({ chapter }),
  setProgress: (progress) => set({ progress }),
  setChapterProgress: (chapterProgress) => set({ chapterProgress }),
  select: (selected) => set({ selected }),
  setHovered: (hovered) => set({ hovered }),
  toggleExploded: () => set((state) => ({ exploded: !state.exploded })),
  resetMachine: () => set({ selected: null, exploded: false, hovered: null }),
  setCycle: (cycle) => set({ cycle }),
  setFleet: (fleet) => set({ fleet }),
}));
