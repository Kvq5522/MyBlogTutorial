import * as React from "react";
import { useState } from "react";

const useMediaQuery = (query: string) => {
  const [value, setValue] = useState(false);

  React.useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches);
    };

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => {
      result.removeEventListener("change", onChange);
    };
  }, [query]);

  return value;
};

export default useMediaQuery;