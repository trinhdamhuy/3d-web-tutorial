"use client";

import { Button } from "@/components/ui/button";
import {
  Box as Cube,
  BookOpen,
  Code,
  Lightbulb,
  GraduationCap,
  Zap,
  Star,
  Play,
} from "lucide-react";
import Link from "next/link";
import { LearningLevelCard } from "@/app/_components/learning-level-card";
import { FeatureCard } from "@/app/_components/feature-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LearningLevel } from "@/types";

const levels: LearningLevel[] = [
  {
    id: "basic",
    title: "Basic Level",
    description: "Master fundamental 3D web development concepts",
    icon: GraduationCap,
    status: "available",
    lessons: 5,
    concepts: ["Canvas", "Mesh", "Animation", "Lighting", "Controls"],
    path: "/basic",
  },
  {
    id: "intermediate",
    title: "Intermediate Level",
    description:
      "Take your 3D web skills to the next level with interactive and advanced concepts",
    icon: Zap,
    status: "available",
    lessons: 5,
    concepts: [
      "Shadows",
      "Mouse Interaction",
      "2D UI in 3D",
      "Camera Animation",
      "Dynamic Models",
    ],
    path: "/intermediate",
  },
  {
    id: "advanced",
    title: "Advanced Level",
    description: "Expert-level projects and optimization",
    icon: Star,
    status: "coming-soon",
    lessons: 0,
    concepts: ["Shaders", "Custom Geometry", "VR/AR", "Optimization"],
    path: "#",
  },
];

const features = [
  {
    title: "Interactive 3D",
    description: "Real-time 3D scenes",
    icon: Cube,
  },
  {
    title: "Modern Stack",
    description: "React Three Fiber + Drei",
    icon: Code,
  },
  {
    title: "Hands-on",
    description: "Learn by doing",
    icon: Play,
  },
  {
    title: "Progressive",
    description: "Step-by-step learning",
    icon: BookOpen,
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Cube className="w-10 h-10 text-primary" />
            3D Web Tutorial
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Master 3D web development with React Three Fiber and Drei
          </p>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>3 Learning Levels</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              <span>React Three Fiber + Drei</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              <span>Hands-on Projects</span>
            </div>
          </div>
        </div>

        {/* Learning Levels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {levels.map((level) => (
            <LearningLevelCard key={level.id} learningLevel={level} />
          ))}
        </div>

        {/* Quick Start */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Ready to Start?</CardTitle>
            <CardDescription className="text-muted-foreground">
              Begin your 3D web development journey with our comprehensive
              tutorials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1" size="lg" asChild>
                <Link href="/basic">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Start Basic Level
                </Link>
              </Button>
              <Button className="flex-1" size="lg" asChild variant="outline">
                <Link href="/intermediate">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Intermediate Level
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
