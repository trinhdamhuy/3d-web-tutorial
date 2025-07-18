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

const levels = [
  {
    id: "basic",
    title: "Basic Level",
    description: "Master fundamental 3D web development concepts",
    icon: GraduationCap,
    color: "bg-blue-500/20 text-blue-300",
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
    color: "bg-green-500/20 text-green-300",
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
    color: "bg-purple-500/20 text-purple-300",
    status: "coming-soon",
    lessons: 0,
    concepts: ["Shaders", "Custom Geometry", "VR/AR", "Optimization"],
    path: "#",
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Cube className="w-10 h-10 text-blue-400" />
            3D Web Tutorial
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Master 3D web development with React Three Fiber and Drei
          </p>
          <div className="flex items-center justify-center gap-4 text-slate-400">
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
              className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors ${
                level.status === "coming-soon" ? "opacity-50" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${level.color}`}>
                    <level.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-white">{level.title}</CardTitle>
                    <CardDescription className="text-slate-400">
                      {level.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Lessons</span>
                  <Badge variant="secondary">{level.lessons}</Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-white">
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

                {level.status === "available" ? (
                  <Link href={level.path}>
                    <Button className="w-full" variant="default">
                      <Play className="w-4 h-4 mr-2" />
                      Start Learning
                    </Button>
                  </Link>
                ) : (
                  <Button className="w-full" variant="outline" disabled>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Start */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Ready to Start?</CardTitle>
            <CardDescription className="text-slate-300">
              Begin your 3D web development journey with our comprehensive
              tutorials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/basic" className="flex-1">
                <Button className="w-full" size="lg">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Start Basic Level
                </Button>
              </Link>
              <div className="flex-1">
                <Button className="w-full" size="lg" variant="outline" disabled>
                  <Zap className="w-5 h-5 mr-2" />
                  Medium Level (Coming Soon)
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Cube className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Interactive 3D</h3>
                  <p className="text-sm text-slate-400">Real-time 3D scenes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <Code className="w-5 h-5 text-green-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Modern Stack</h3>
                  <p className="text-sm text-slate-400">
                    React Three Fiber + Drei
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Lightbulb className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Hands-on</h3>
                  <p className="text-sm text-slate-400">Learn by doing</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-500/20">
                  <Play className="w-5 h-5 text-orange-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Progressive</h3>
                  <p className="text-sm text-slate-400">
                    Step-by-step learning
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
