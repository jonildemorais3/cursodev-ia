"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

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

  if (!visible) return null;

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={220}
      recycle={recycle}
    />
  );
}
