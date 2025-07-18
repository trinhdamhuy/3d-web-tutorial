import { ReactNode } from "react";
import { Canvas, CanvasProps } from "@react-three/fiber";

interface LessonCanvasProps extends CanvasProps {
  children: ReactNode;
  className?: string;
}

export function LessonCanvas({
  children,
  className = "",
  ...canvasProps
}: LessonCanvasProps) {
  return (
    <div
      className={`w-full rounded-lg overflow-hidden relative h-[500px] md:h-[600px] ${className}`}
    >
      <Canvas {...canvasProps}>{children}</Canvas>
    </div>
  );
}
