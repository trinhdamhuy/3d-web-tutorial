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
import { MousePointer } from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
import { FeatureListCard } from "@/app/_components/feature-list-card";
import { useRef, useState } from "react";
import { Mesh } from "three";

const mouseInteractionCode = `function InteractiveBox() {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      position={clicked ? [2, 0, 0] : [0, 0, 0]}
      scale={hovered ? 1.3 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked((c) => !c)}
      castShadow
    >
      <meshStandardMaterial color={clicked ? "orange" : hovered ? "#10b981" : "#3b82f6"} />
    </Box>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <InteractiveBox />
      <OrbitControls />
    </>
  );
}`;

function InteractiveBox() {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      position={clicked ? [2, 0, 0] : [0, 0, 0]}
      scale={hovered ? 1.3 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked((c) => !c)}
      castShadow
    >
      <meshStandardMaterial
        color={clicked ? "orange" : hovered ? "#10b981" : "#3b82f6"}
      />
    </Box>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <InteractiveBox />
      <OrbitControls />
    </>
  );
}

export default function MouseInteraction() {
  const interactionConcepts = [
    { badge: "scale", description: "Scale object on hover" },
    { badge: "color", description: "Change color on click/hover" },
    { badge: "position", description: "Move object on click" },
  ];

  const eventHandlers = [
    { badge: "onPointerOver", description: "Mouse hover event" },
    { badge: "onPointerOut", description: "Mouse leave event" },
    { badge: "onClick", description: "Mouse click event" },
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
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
        </svg>
      ),
      description: "Hover: Scale up",
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
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
        </svg>
      ),
      description: "Click: Change color/move",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <MousePointer className="w-8 h-8" />
          Lesson 7: Advanced Mouse Interaction
        </h1>
        <p className="text-muted-foreground">
          Hover to scale up, click to change color or move the object
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Interactive Box Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Try hovering and clicking the box
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LessonCanvas camera={{ position: [4, 4, 4] }} shadows>
                <Scene />
              </LessonCanvas>
            </CardContent>
          </Card>
          {/* Code Display */}
          <CodeDisplay
            code={mouseInteractionCode}
            title="Interactive Box Code"
            description="Box scales on hover, changes color/moves on click"
          />
        </div>
        {/* Sidebar Cards */}
        <div className="space-y-4">
          <FeatureListCard
            title="Interaction Concepts"
            items={interactionConcepts}
          />
          <FeatureListCard title="Event Handlers" items={eventHandlers} />
          <FeatureListCard title="Controls" items={controls} />
        </div>
      </div>
    </div>
  );
}
