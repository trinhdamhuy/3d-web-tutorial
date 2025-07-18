"use client";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Instances, Instance, OrbitControls } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap } from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
import { FeatureListCard } from "@/app/_components/feature-list-card";

const perfOptCode = `import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Instances, Instance, OrbitControls } from "@react-three/drei";

function Boxes() {
  return (
    <Instances limit={100}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color="#3b82f6" />
      {[...Array(100)].map((_, i) => (
        <Instance key={i} position={[i % 10 - 5, 0, Math.floor(i / 10) - 5]} />
      ))}
    </Instances>
  );
}

export default function PerformanceOptimizationScene() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"} Boxes
      </button>
      <Suspense fallback={<span>Loading...</span>}>
        {show && <Boxes />}
      </Suspense>
      <OrbitControls />
    </>
  );
}`;

function Boxes() {
  return (
    <Instances limit={100}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color="#3b82f6" />
      {[...Array(100)].map((_, i) => (
        <Instance
          key={i}
          position={[(i % 10) - 5, 0, Math.floor(i / 10) - 5]}
        />
      ))}
    </Instances>
  );
}

function PerformanceOptimizationScene() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button
        className="mb-2 px-3 py-1 rounded bg-primary text-white"
        onClick={() => setShow((s) => !s)}
      >
        {show ? "Hide" : "Show"} Boxes
      </button>
      <div className="h-96 w-full rounded-lg overflow-hidden">
        <Canvas camera={{ position: [0, 5, 10] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          <Suspense fallback={<span>Loading...</span>}>
            {show && <Boxes />}
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default function PerformanceOptimizationLesson() {
  const perfConcepts = [
    { badge: "Instances", description: "Efficiently render many objects" },
    { badge: "Suspense", description: "Async loading for performance" },
    { badge: "Bounds", description: "Fit camera to content" },
    { badge: "Lazy", description: "Lazy load heavy models" },
  ];
  const techniques = [
    { badge: "Optimization", description: "Improve web 3D performance" },
    { badge: "Memory", description: "Reduce memory usage" },
    { badge: "FPS", description: "Increase frame rate" },
  ];
  const controls = [
    {
      icon: (
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
          <path d="M8 14v7m4-7v7" />
        </svg>
      ),
      description: "Click + Drag: Rotate camera",
    },
    {
      icon: (
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 5v14m7-7H5" />
        </svg>
      ),
      description: "Scroll: Zoom in/out",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Zap className="w-8 h-8" />
          Lesson 15: Performance Optimization
        </h1>
        <p className="text-muted-foreground">
          Use instances, suspense, bounds, and lazy loading for optimal
          performance
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Performance Optimization Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Optimize your 3D web app for speed and efficiency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceOptimizationScene />
            </CardContent>
          </Card>
          {/* Code Display */}
          <CodeDisplay
            code={perfOptCode}
            title="Performance Optimization Code"
            description="Web 3D optimization techniques"
          />
        </div>
        {/* Sidebar Cards */}
        <div className="space-y-4">
          <FeatureListCard title="Performance Concepts" items={perfConcepts} />
          <FeatureListCard title="Techniques" items={techniques} />
          <FeatureListCard title="Controls" items={controls} />
        </div>
      </div>
    </div>
  );
}
