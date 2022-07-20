import { useLayoutEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateWidth);
    updateWidth();

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}

// function ShowWindowDimensions(props) {
//   const [width, height] = useWindowSize();
//   return (
//     <span>
//       Window size: {width} x {height}
//     </span>
//   );
// }
