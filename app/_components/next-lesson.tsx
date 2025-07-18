"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the lesson order and their paths
const BasicLessonOrder = [
  { id: "hello-cube", path: "/basic/hello-cube", title: "Hello Cube" },
  {
    id: "cube-animation",
    path: "/basic/cube-animation",
    title: "Cube Animation",
  },
  {
    id: "multi-object",
    path: "/basic/multi-object",
    title: "Multi Object Scene",
  },
  { id: "load-model", path: "/basic/load-model", title: "Load Model GLB" },
  {
    id: "responsive-viewport",
    path: "/basic/responsive-viewport",
    title: "Responsive Viewport",
  },
];

const IntermediateLessonOrder = [
  { id: "ground-shadows", path: "/intermediate/ground-shadows", title: "Ground & Shadows" },
  { id: "mouse-interaction", path: "/intermediate/mouse-interaction", title: "Advanced Mouse Interaction" },
  { id: "floating-ui", path: "/intermediate/floating-ui", title: "Floating 2D UI in 3D" },
  { id: "camera-animation", path: "/intermediate/camera-animation", title: "Smooth Camera Animation" },
  { id: "multi-models", path: "/intermediate/multi-models", title: "Load Multiple Models" },
];

interface NextLessonProps {
  currentLessonId: string;
  scope: string;
}

export function NextLesson({ currentLessonId, scope }: NextLessonProps) {
  // Find the current lesson index

  const lessonOrder =
    scope === "basic" ? BasicLessonOrder : IntermediateLessonOrder;

  const currentIndex = lessonOrder.findIndex(
    (lesson) => lesson.id === currentLessonId
  );

  // Get the next lesson (if it exists)
  const nextLesson =
    currentIndex >= 0 && currentIndex < lessonOrder.length - 1
      ? lessonOrder[currentIndex + 1]
      : null;

  // Don't render if there's no next lesson
  if (!nextLesson) {
    return null;
  }

  return (
    <div className="flex justify-center mt-8">
      <Button asChild size="lg" className="gap-2">
        <Link href={nextLesson.path}>
          Next Lesson: {nextLesson.title}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
}
