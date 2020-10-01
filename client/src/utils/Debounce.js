import { useState, useEffect } from 'react';

// Our hook
export default function useDebounce(value) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, 500);

      return () => {
        clearTimeout(handler);
      };
    },
    [value] 
  );

  return debouncedValue;
}