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
  TabletSmartphone as Responsive,
  Box as Cube,
  Code,
  Lightbulb,
} from "lucide-react";

const lessons = [
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
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Basic Level Tutorials
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Master fundamental 3D web development concepts with React Three
            Fiber
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
            <Card
              key={lesson.id}
              className="hover:border-primary transition-colors"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <lesson.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground">
                        Lesson {index + 1}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
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
                <p className="text-muted-foreground text-sm">
                  {lesson.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">
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

                <Button className="w-full" asChild>
                  <Link href={lesson.path}>
                    <Play className="w-4 h-4 mr-2" />
                    Start Lesson
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Section */}
        <Card>
          <CardHeader>
            <CardTitle>Your Learning Progress</CardTitle>
            <CardDescription className="text-muted-foreground">
              Track your progress through the basic level tutorials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Basic Level Completion
                </span>
                <span className="text-foreground font-medium">
                  0 / 5 lessons
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground">
                Complete all basic lessons to unlock medium level tutorials
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
