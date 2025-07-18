"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

function findCurrentAndNextLesson(pathname: string) {
  let found = false;
  let nextLesson = null;
  for (let i = 0; i < lessonOrders.length; i++) {
    const order = lessonOrders[i];
    const idx = order.findIndex((lesson) => pathname.startsWith(lesson.path));
    if (idx !== -1) {
      found = true;
      // If not last in this order
      if (idx < order.length - 1) {
        nextLesson = order[idx + 1];
      } else {
        // If last in this order, go to first of next order (if exists)
        if (lessonOrders[i + 1] && lessonOrders[i + 1].length > 0) {
          nextLesson = lessonOrders[i + 1][0];
        }
      }
      break;
    }
  }
  // If not found in any order, try to find the next lesson by path order
  if (!found) {
    for (let i = 0; i < lessonOrders.length; i++) {
      for (let j = 0; j < lessonOrders[i].length; j++) {
        if (pathname.startsWith(lessonOrders[i][j].path)) {
          // fallback, should not happen, but just in case
          if (j < lessonOrders[i].length - 1) {
            return lessonOrders[i][j + 1];
          } else if (lessonOrders[i + 1] && lessonOrders[i + 1].length > 0) {
            return lessonOrders[i + 1][0];
          }
        }
      }
    }
  }
  return nextLesson;
}

export default function NextLesson({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const nextLesson = findCurrentAndNextLesson(pathname);
  if (!nextLesson) return null;
  return (
    <div className={`flex justify-center ${className}`}>
      <Button asChild size="lg" className="gap-2">
        <Link href={nextLesson.path}>
          Next Lesson: {nextLesson.title}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
}
