import { useRef } from "react";

export const useDebounce = () => {
  const debounceRefs = useRef<{ [key: string]: NodeJS.Timeout | null }>({});

  const debounce = (
    key: string,
    callback: () => void,
    milliseconds: number
  ) => {
    if (debounceRefs.current[key]) {
      clearTimeout(debounceRefs.current[key]!);
    }
    debounceRefs.current[key] = setTimeout(() => {
      callback();
    }, milliseconds);
  };

  return {
    debounce,
  };
};
