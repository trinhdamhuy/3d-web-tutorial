"use client";

import {
  Play,
  Code,
  Lightbulb,
  Zap,
  RotateCcw,
  MousePointer,
  Monitor,
  Download,
  Layers,
} from "lucide-react";
import { LessonCard } from "@/app/_components/lesson-card";
import { Lesson } from "@/types";

const lessons: Lesson[] = [
  {
    id: "ground-shadows",
    title: "Ground & Shadows",
    description: "Add a ground plane and enable object shadows.",
    icon: Layers,
    concepts: ["Plane", "Shadow", "castShadow", "receiveShadow", "Environment"],
    path: "/intermediate/ground-shadows",
    duration: "15 min",
  },
  {
    id: "mouse-interaction",
    title: "Advanced Mouse Interaction",
    description: "Hover to scale, click to change color or move.",
    icon: MousePointer,
    concepts: ["Raycaster", "onPointerOver", "onClick", "State"],
    path: "/intermediate/mouse-interaction",
    duration: "15 min",
  },
  {
    id: "floating-ui",
    title: "Floating 2D UI in 3D",
    description: "Attach 2D HTML UI to 3D objects.",
    icon: Monitor,
    concepts: ["Html", "React DOM", "3D Overlay", "Popup"],
    path: "/intermediate/floating-ui",
    duration: "15 min",
  },
  {
    id: "camera-animation",
    title: "Smooth Camera Animation",
    description: "Tween camera movement when selecting objects.",
    icon: RotateCcw,
    concepts: ["useSpring", "lerp", "Camera", "Animation"],
    path: "/intermediate/camera-animation",
    duration: "15 min",
  },
  {
    id: "multi-models",
    title: "Load Multiple Models",
    description: "Load and display multiple models from JSON.",
    icon: Download,
    concepts: ["Dynamic Content", "Loop", "GLTF", "Position"],
    path: "/intermediate/multi-models",
    duration: "20 min",
  },
];

export default function IntermediatePage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
          <Zap className="w-8 h-8 text-primary" />
          Intermediate Level Tutorials
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Take your 3D web skills to the next level with interactive and
          advanced concepts
        </p>
        <div className="flex items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            <span>5 Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            <span>Advanced Techniques</span>
          </div>
          <div className="flex items-center gap-2">
            <Play className="w-5 h-5" />
            <span>Interactive 3D Projects</span>
          </div>
        </div>
      </div>
      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {lessons.map((lesson, index) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            lessonNumber={index + 6}
          />
        ))}
      </div>
    </div>
  );
}
