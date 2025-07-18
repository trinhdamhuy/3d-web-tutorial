"use client";

import {
  RotateCcw,
  Grid3X3,
  Download,
  Play,
  BookOpen,
  TabletSmartphone as Responsive,
  Box as Cube,
  Code,
  Lightbulb,
} from "lucide-react";
import { Lesson } from "@/types";
import { LessonCard } from "@/app/_components/lesson-card";

const lessons: Lesson[] = [
  {
    id: "hello-cube",
    title: "Hello Cube",
    description:
      "Create a basic 3D scene with a box, lighting, and camera controls",
    icon: Cube,
    concepts: ["Canvas", "Mesh", "Geometry", "Material", "Light", "Controls"],
    path: "/basic/hello-cube",
    duration: "10 min",
  },
  {
    id: "cube-animation",
    title: "Cube Animation",
    description: "Animate a cube with rotation and hover effects",
    icon: RotateCcw,
    concepts: ["useRef", "useFrame", "useState", "Events", "Animation"],
    path: "/basic/cube-animation",
    duration: "15 min",
  },
  {
    id: "multi-object",
    title: "Multi Object Scene",
    description: "Create a scene with multiple 3D objects arranged in space",
    icon: Grid3X3,
    concepts: ["Position", "Rotation", "Geometry Types", "Scene Layout"],
    path: "/basic/multi-object",
    duration: "20 min",
  },
  {
    id: "load-model",
    title: "Load Model GLB",
    description: "Load 3D models, add shadows and realistic lighting",
    icon: Download,
    concepts: ["useGLTF", "Environment", "Shadows", "Suspense"],
    path: "/basic/load-model",
    duration: "25 min",
  },
  {
    id: "responsive-viewport",
    title: "Responsive Viewport",
    description: "Automatically adjust camera based on screen size",
    icon: Responsive,
    concepts: ["useThree", "Responsive", "Camera", "Viewport"],
    path: "/basic/responsive-viewport",
    duration: "20 min",
  },
];

export default function BasicPage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          Basic Level Tutorials
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Master fundamental 3D web development concepts with React Three Fiber
        </p>

        <div className="flex items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            <span>5 Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            <span>Hands-on Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <Play className="w-5 h-5" />
            <span>Interactive 3D Scenes</span>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {lessons.map((lesson, index) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            lessonNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
}
