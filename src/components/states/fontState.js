import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage(() =>
  typeof window === "undefined" ? undefined : localStorage
);

export const fontState = atomWithStorage("fontState", "inter", storage);
