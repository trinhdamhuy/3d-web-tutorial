"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Box as Cube,
  BookOpen,
  Code,
  Lightbulb,
  Play,
  ArrowRight,
  GraduationCap,
  Zap,
  Star,
} from "lucide-react";
import Link from "next/link";

const levels = [
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
    id: "medium",
    title: "Medium Level",
    description: "Advanced techniques and complex interactions",
    icon: Zap,
    status: "coming-soon",
    lessons: 0,
    concepts: ["Physics", "Particles", "Post-processing", "Performance"],
    path: "#",
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
            <Card
              key={level.id}
              className={`hover:border-primary transition-colors ${
                level.status === "coming-soon" ? "opacity-50" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <level.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">
                      {level.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {level.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 grow">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Lessons</span>
                  <Badge variant="secondary">{level.lessons}</Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">
                    Key concepts:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {level.concepts.map((concept) => (
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
              </CardContent>
              <CardFooter>
                {level.status === "available" ? (
                  <Button className="w-full" asChild>
                    <Link href={level.path}>
                      <Play className="w-4 h-4 mr-2" />
                      Start Learning
                    </Link>
                  </Button>
                ) : (
                  <Button className="w-full" variant="outline" disabled>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                )}
              </CardFooter>
            </Card>
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
              <Button className="flex-1" size="lg" variant="outline" disabled>
                <Zap className="w-5 h-5 mr-2" />
                Medium Level (Coming Soon)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
