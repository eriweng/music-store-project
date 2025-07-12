import { CirclePlay } from "lucide-react";
import { useEffect, useRef } from "react";

export default function CirclePlayEffect({ isPlaying }) {
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current) {
      if (isPlaying) {
        circleRef.current.classList.add("animate-spin-slow");
      } else {
        circleRef.current.classList.remove("animate-spin-slow");
      }
    }
  }, [isPlaying]);

  return (
    <CirclePlay
      className="size-[30px] stroke-1 transition-transform"
      ref={circleRef}
    />
  );
}
