"use client";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Torus, Sphere, Box } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Layers } from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
import { FeatureListCard } from "@/app/_components/feature-list-card";
import { Button } from "@/components/ui/button";

const modelSelectorCode = `import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Torus, Sphere, Box } from "@react-three/drei";

function ModelDisplay({ model }) {
  switch (model) {
    case "cube":
      return <Box args={[1, 1, 1]}><meshStandardMaterial color="#3b82f6" /></Box>;
    case "sphere":
      return <Sphere args={[0.7, 32, 32]}><meshStandardMaterial color="#10b981" /></Sphere>;
    case "torus":
      return <Torus args={[0.7, 0.25, 16, 100]}><meshStandardMaterial color="#f59e0b" /></Torus>;
    default:
      return null;
  }
}

export default function ModelSelectorScene() {
  const [selected, setSelected] = useState("cube");
  return (
    <>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={() => setSelected("cube")}>Cube</button>
        <button onClick={() => setSelected("sphere")}>Sphere</button>
        <button onClick={() => setSelected("torus")}>Torus</button>
      </div>
      <Canvas camera={{ position: [3, 3, 3] }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <Suspense fallback={null}>
          <ModelDisplay model={selected} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}`;

function ModelDisplay({ model }: { model: string }) {
  switch (model) {
    case "cube":
      return (
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial color="#3b82f6" />
        </Box>
      );
    case "sphere":
      return (
        <Sphere args={[0.7, 32, 32]}>
          <meshStandardMaterial color="#10b981" />
        </Sphere>
      );
    case "torus":
      return (
        <Torus args={[0.7, 0.25, 16, 100]}>
          <meshStandardMaterial color="#f59e0b" />
        </Torus>
      );
    default:
      return null;
  }
}

export default function ModelSelectorLesson() {
  const [selected, setSelected] = useState<string>("cube");
  const uiConcepts = [
    { badge: "State", description: "Manage selected model" },
    { badge: "Button", description: "UI to select model" },
    { badge: "Dynamic Load", description: "Load model on demand" },
  ];
  const reactR3F = [
    { badge: "useState", description: "Track selected model" },
    { badge: "Suspense", description: "Async model loading" },
    { badge: "Drei", description: "Reusable geometry components" },
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
          <path d="M3 12h18" />
        </svg>
      ),
      description: "Right click + Drag: Pan",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Layers className="w-8 h-8" />
          Lesson 11: Model Selector + UI
        </h1>
        <p className="text-muted-foreground">
          UI to select and load different 3D models dynamically
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Model Selector Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Select a model to load it into the scene
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex gap-2">
                <Button
                  variant={selected === "cube" ? "default" : "ghost"}
                  onClick={() => setSelected("cube")}
                >
                  Cube
                </Button>
                <Button
                  variant={selected === "sphere" ? "default" : "ghost"}
                  onClick={() => setSelected("sphere")}
                >
                  Sphere
                </Button>
                <Button
                  variant={selected === "torus" ? "default" : "ghost"}
                  onClick={() => setSelected("torus")}
                >
                  Torus
                </Button>
              </div>
              <div className="h-96 w-full rounded-lg overflow-hidden">
                <Canvas camera={{ position: [3, 3, 3] }} shadows>
                  <ambientLight intensity={0.5} />
                  <directionalLight
                    position={[5, 10, 5]}
                    intensity={1}
                    castShadow
                  />
                  <Suspense fallback={null}>
                    <ModelDisplay model={selected} />
                  </Suspense>
                  <OrbitControls />
                </Canvas>
              </div>
            </CardContent>
          </Card>
          {/* Code Display */}
          <CodeDisplay
            code={modelSelectorCode}
            title="Model Selector Code"
            description="React state and dynamic model loading"
          />
        </div>
        {/* Sidebar Cards */}
        <div className="space-y-4">
          <FeatureListCard title="UI Concepts" items={uiConcepts} />
          <FeatureListCard title="React + R3F" items={reactR3F} />
          <FeatureListCard title="Controls" items={controls} />
        </div>
      </div>
    </div>
  );
}
