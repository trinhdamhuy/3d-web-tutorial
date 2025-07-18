"use client";

import { LessonCanvas } from "@/app/_components/lesson-canvas";
import { OrbitControls, Box } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download } from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
import { FeatureListCard } from "@/app/_components/feature-list-card";

const models = [
  { id: 1, position: [0, 0, 0], color: "#3b82f6" },
  { id: 2, position: [2, 0, 0], color: "#10b981" },
  { id: 3, position: [-2, 0, 0], color: "#f59e0b" },
  { id: 4, position: [0, 0, 2], color: "#ef4444" },
];

const multiModelsCode = `const models = [
  { id: 1, position: [0, 0, 0], color: "#3b82f6" },
  { id: 2, position: [2, 0, 0], color: "#10b981" },
  { id: 3, position: [-2, 0, 0], color: "#f59e0b" },
  { id: 4, position: [0, 0, 2], color: "#ef4444" },
];

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      {models.map((model) => (
        <Box
          key={model.id}
          args={[1, 1, 1]}
          position={model.position}
        >
          <meshStandardMaterial color={model.color} />
        </Box>
      ))}
      <OrbitControls />
    </>
  );
}`;

const dynamicContent = [
  { badge: "map()", description: "Loop through models array" },
  { badge: "position", description: "Place objects at predefined positions" },
  { badge: "color", description: "Set color for each model" },
];

const modelProperties = [
  { badge: "Box", description: "Render multiple 3D boxes" },
  { badge: "id", description: "Unique key for each model" },
  { badge: "args", description: "Box geometry size" },
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

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      {models.map((model) => (
        <Box
          key={model.id}
          args={[1, 1, 1]}
          position={model.position as [number, number, number]}
        >
          <meshStandardMaterial color={model.color} />
        </Box>
      ))}
      <OrbitControls />
    </>
  );
}

export default function MultiModels() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Download className="w-8 h-8" />
          Lesson 10: Load Multiple Models
        </h1>
        <p className="text-muted-foreground">
          Load and display multiple 3D models from a JSON list at predefined
          positions
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Multiple Models Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Boxes are loaded dynamically from a JSON array
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LessonCanvas camera={{ position: [6, 6, 6] }}>
                <Scene />
              </LessonCanvas>
            </CardContent>
          </Card>
          {/* Code Display */}
          <CodeDisplay
            code={multiModelsCode}
            title="Multiple Models Scene Code"
            description="Render multiple boxes from a JSON array dynamically"
          />
        </div>
        {/* Sidebar Cards */}
        <div className="space-y-4">
          <FeatureListCard title="Dynamic Content" items={dynamicContent} />
          <FeatureListCard title="Model Properties" items={modelProperties} />
          <FeatureListCard title="Controls" items={controls} />
        </div>
      </div>
    </div>
  );
}
