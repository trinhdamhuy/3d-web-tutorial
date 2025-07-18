"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const lessonOrders = [
  [
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
  ],
  [
    {
      id: "ground-shadows",
      path: "/intermediate/ground-shadows",
      title: "Ground & Shadows",
    },
    {
      id: "mouse-interaction",
      path: "/intermediate/mouse-interaction",
      title: "Advanced Mouse Interaction",
    },
    {
      id: "floating-ui",
      path: "/intermediate/floating-ui",
      title: "Floating 2D UI in 3D",
    },
    {
      id: "camera-animation",
      path: "/intermediate/camera-animation",
      title: "Smooth Camera Animation",
    },
    {
      id: "multi-models",
      path: "/intermediate/multi-models",
      title: "Load Multiple Models",
    },
  ],
  [
    {
      id: "model-selector",
      path: "/advanced/model-selector",
      title: "Model Selector + UI",
    },
    {
      id: "model-viewer",
      path: "/advanced/model-viewer",
      title: "Model Viewer",
    },
    {
      id: "drag-drop",
      path: "/advanced/drag-drop",
      title: "Drag & Drop Features",
    },
    {
      id: "interior-design",
      path: "/advanced/interior-design",
      title: "Basic Interior Design",
    },
    {
      id: "performance-optimization",
      path: "/advanced/performance-optimization",
      title: "Performance Optimization",
    },
  ],
];

function findLessonIndices(pathname: string) {
  for (let i = 0; i < lessonOrders.length; i++) {
    const order = lessonOrders[i];
    const idx = order.findIndex((lesson) => pathname.startsWith(lesson.path));
    if (idx !== -1) {
      return { orderIndex: i, lessonIndex: idx };
    }
  }
  return null;
}

export default function LessonNavigation({
  className = "",
}: {
  className?: string;
}) {
  const pathname = usePathname();
  const indices = findLessonIndices(pathname);
  if (!indices) return null;
  const { orderIndex, lessonIndex } = indices;
  const order = lessonOrders[orderIndex];
  const prevLesson =
    lessonIndex > 0
      ? order[lessonIndex - 1]
      : lessonOrders[orderIndex - 1]?.[lessonOrders[orderIndex - 1].length - 1];
  const nextLesson =
    lessonIndex < order.length - 1
      ? order[lessonIndex + 1]
      : lessonOrders[orderIndex + 1]?.[0];
  return (
    <div className={`flex justify-between ${className}`}>
      {/* Previous Lesson */}
      {prevLesson ? (
        <Button asChild size="lg" variant="outline" className="gap-2">
          <Link href={prevLesson.path}>
            <ArrowLeft className="w-4 h-4" />
            Previous Lesson: {prevLesson.title}
          </Link>
        </Button>
      ) : (
        <div />
      )}
      {/* Next Lesson */}
      {nextLesson ? (
        <Button asChild size="lg" className="gap-2">
          <Link href={nextLesson.path}>
            Next Lesson: {nextLesson.title}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
}
