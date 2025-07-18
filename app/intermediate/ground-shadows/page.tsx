"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Plane } from "@react-three/drei";
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

const groundShadowsCode = `function Scene() {
  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.5} />

      {/* Directional Light with shadows */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Ground Plane */}
      <Plane
        args={[10, 10]}
        position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#e5e7eb" />
      </Plane>

      {/* Box casting shadow */}
      <Box args={[1, 1, 1]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial color="#3b82f6" />
      </Box>

      {/* OrbitControls */}
      <OrbitControls />
    </>
  );
}`;

function Scene() {
  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.5} />
      {/* Directional Light with shadows */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* Ground Plane */}
      <Plane
        args={[10, 10]}
        position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#e5e7eb" />
      </Plane>
      {/* Box casting shadow */}
      <Box args={[1, 1, 1]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial color="#3b82f6" />
      </Box>
      {/* OrbitControls */}
      <OrbitControls />
    </>
  );
}

const shadowConcepts = [
  { badge: "castShadow", description: "Enable object to cast shadow" },
  { badge: "receiveShadow", description: "Enable ground to receive shadow" },
  { badge: "shadow-mapSize", description: "Shadow quality settings" },
  { badge: "directionalLight", description: "Light source for shadows" },
];

const lightingEnv = [
  { badge: "ambientLight", description: "Softens overall lighting" },
  {
    badge: "directionalLight",
    description: "Directional shadow-casting light",
  },
  { badge: "Plane", description: "Ground receives shadow" },
  { badge: "Box", description: "Object casting shadow" },
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

export default function GroundShadows() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Layers className="w-8 h-8" />
          Lesson 6: Ground & Shadows
        </h1>
        <p className="text-muted-foreground">
          Add a ground plane and enable object shadows in your 3D scene
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Ground & Shadows Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Observe how the box casts a shadow onto the ground
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 w-full rounded-lg overflow-hidden">
                <Canvas camera={{ position: [4, 4, 4] }} shadows>
                  <Scene />
                </Canvas>
              </div>
            </CardContent>
          </Card>
          {/* Code Display */}
          <CodeDisplay
            code={groundShadowsCode}
            title="Ground & Shadows Scene Code"
            description="Scene with ground plane and object casting/receiving shadows"
          />
        </div>
        {/* Sidebar Cards */}
        <div className="space-y-4">
          <FeatureListCard title="Shadow Concepts" items={shadowConcepts} />
          <FeatureListCard title="Lighting & Environment" items={lightingEnv} />
          <FeatureListCard title="Controls" items={controls} />
        </div>
      </div>
    </div>
  );
}
