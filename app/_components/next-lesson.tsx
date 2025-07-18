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

const AdvancedLessonOrder = [
  { id: "hello-cube", path: "/advanced/hello-cube", title: "Hello Cube" },
];

interface NextLessonProps {
  currentLessonId: string;
  scope: string;
}

export function NextLesson({ currentLessonId, scope }: NextLessonProps) {
  // Find the current lesson index

  const lessonOrder =
    scope === "basic" ? BasicLessonOrder : AdvancedLessonOrder;

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
