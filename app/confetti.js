"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function ConfettiExplosion() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [recycle, setRecycle] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const updateSize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    updateSize();
    window.addEventListener("resize", updateSize);

    const stopTimer = setTimeout(() => setRecycle(false), 4000);
    const hideTimer = setTimeout(() => setVisible(false), 9000);

    return () => {
      window.removeEventListener("resize", updateSize);
      clearTimeout(stopTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible || size.width === 0) return null;

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={220}
      recycle={recycle}
    />
  );
}
