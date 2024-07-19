"use client";

import { useEffect, useState, useCallback } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  const getScreenSize = useCallback(() => {
    return window.innerWidth;
  }, []);

  const handleResize = useCallback(() => {
    setScreenSize(getScreenSize());
  }, [getScreenSize]);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return screenSize;
};

export default useScreenSize;
