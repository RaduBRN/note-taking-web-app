import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage(() =>
  typeof window === "undefined" ? undefined : localStorage
);

export const themeState = atomWithStorage("themeState", "system", storage);
