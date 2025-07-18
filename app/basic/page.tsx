"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  RotateCcw,
  Grid3X3,
  Download,
  Play,
  BookOpen,
  Code,
  Lightbulb,
  ArrowRight,
  TabletSmartphone,
  Box,
} from "lucide-react";

const lessons = [
  {
    id: "hello-cube",
    title: "Hello Cube",
    description:
      "Create a basic 3D scene with a box, lighting, and camera controls",
    icon: Box,
    color: "bg-blue-500/20 text-blue-300",
    concepts: ["Canvas", "Mesh", "Geometry", "Material", "Light", "Controls"],
    path: "/basic/hello-cube",
    duration: "10 min",
  },
  {
    id: "cube-animation",
    title: "Cube Animation",
    description: "Animate a cube with rotation and hover effects",
    icon: RotateCcw,
    color: "bg-green-500/20 text-green-300",
    concepts: ["useRef", "useFrame", "useState", "Events", "Animation"],
    path: "/basic/cube-animation",
    duration: "15 min",
  },
  {
    id: "multi-object",
    title: "Multi Object Scene",
    description: "Create a scene with multiple 3D objects arranged in space",
    icon: Grid3X3,
    color: "bg-purple-500/20 text-purple-300",
    concepts: ["Position", "Rotation", "Geometry Types", "Scene Layout"],
    path: "/basic/multi-object",
    duration: "20 min",
  },
  {
    id: "load-model",
    title: "Load Model GLB",
    description: "Load 3D models, add shadows and realistic lighting",
    icon: Download,
    color: "bg-orange-500/20 text-orange-300",
    concepts: ["useGLTF", "Environment", "Shadows", "Suspense"],
    path: "/basic/load-model",
    duration: "25 min",
  },
  {
    id: "responsive-viewport",
    title: "Responsive Viewport",
    description: "Automatically adjust camera based on screen size",
    icon: TabletSmartphone,
    color: "bg-pink-500/20 text-pink-300",
    concepts: ["useThree", "Responsive", "Camera", "Viewport"],
    path: "/basic/responsive-viewport",
    duration: "20 min",
  },
];

export default function BasicPage() {
  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <ArrowRight className="w-4 h-4 text-slate-400" />
            <span className="text-white font-medium">Basic Level</span>
          </div>

          <h1 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-400" />
            Basic Level Tutorials
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Master fundamental 3D web development concepts with React Three
            Fiber
          </p>

          <div className="flex items-center gap-6 text-slate-400">
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
            <Card
              key={lesson.id}
              className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${lesson.color}`}>
                      <lesson.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-white">
                        Lesson {index + 1}
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        {lesson.title}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {lesson.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 text-sm">{lesson.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-white">
                    Concepts covered:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {lesson.concepts.map((concept) => (
                      <Badge
                        key={concept}
                        variant="secondary"
                        className="text-xs"
                      >
                        {concept}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link href={lesson.path}>
                  <Button className="w-full" variant="default">
                    <Play className="w-4 h-4 mr-2" />
                    Start Lesson
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Section */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Your Learning Progress</CardTitle>
            <CardDescription className="text-slate-300">
              Track your progress through the basic level tutorials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Basic Level Completion</span>
                <span className="text-white font-medium">0 / 5 lessons</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <p className="text-sm text-slate-400">
                Complete all basic lessons to unlock medium level tutorials
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
