"use client";

import {
  Play,
  Code,
  Lightbulb,
  Star,
  Layers,
  MousePointer,
  Monitor,
  Zap,
} from "lucide-react";
import { LessonCard } from "@/app/_components/lesson-card";
import { Lesson } from "@/types";

const lessons: Lesson[] = [
  {
    id: "model-selector",
    title: "Model Selector + UI",
    description: "UI to select and load different 3D models dynamically.",
    icon: Layers,
    concepts: ["State", "Button", "Dynamic Load", "Suspense"],
    path: "/advanced/model-selector",
    duration: "20 min",
  },
  {
    id: "model-viewer",
    title: "Model Viewer",
    description:
      "Interactive viewer with rotation, zoom, background, and lighting controls.",
    icon: Monitor,
    concepts: ["Rotate", "Zoom", "Lighting", "Background"],
    path: "/advanced/model-viewer",
    duration: "25 min",
  },
  {
    id: "drag-drop",
    title: "Drag & Drop Features",
    description: "Drag models in the scene using the mouse.",
    icon: MousePointer,
    concepts: ["Raycast", "Drag", "Position", "Custom Logic"],
    path: "/advanced/drag-drop",
    duration: "20 min",
  },
  {
    id: "interior-design",
    title: "Basic Interior Design",
    description:
      "Add walls, floor, and furniture models. Allow rotation and movement.",
    icon: Layers,
    concepts: ["Wall", "Floor", "Furniture", "Move", "Rotate"],
    path: "/advanced/interior-design",
    duration: "30 min",
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description:
      "Use instances, suspense, bounds, and lazy loading for optimal performance.",
    icon: Zap,
    concepts: ["Instances", "Suspense", "Bounds", "Lazy", "Optimization"],
    path: "/advanced/performance-optimization",
    duration: "25 min",
  },
];

export default function AdvancedPage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
          <Star className="w-8 h-8 text-primary" />
          Advanced Level Tutorials
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Master advanced 3D web development features and optimization
          techniques
        </p>
        <div className="flex items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            <span>5 Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            <span>Advanced Features</span>
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
            lessonNumber={index + 11}
          />
        ))}
      </div>
    </div>
  );
}
