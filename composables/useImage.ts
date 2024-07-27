import { filename } from "pathe/utils";

export function useImage() {
  const glob = import.meta.glob("@/public/*.jpeg", { eager: true });

  function getImages() {
    return Object.fromEntries(
      Object.entries(glob).map(([key, value]) => [filename(key), value.default])
    );
  }

  const images = ref(getImages())

  return {
    images
  }
}
