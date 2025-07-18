"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RotateCcw } from "lucide-react";
import { NextLesson } from "@/app/_components/next-lesson";
import { CodeDisplay } from "@/app/_components/code-display";
import { FeatureListCard } from "@/app/_components/feature-list-card";
import { useRef, useState } from "react";
import { Mesh, Vector3 } from "three";

const cameraAnimationCode = `function CameraAnimationBox() {
  const meshRef = useRef<Mesh>(null);
  const { camera } = useThree();
  const [focused, setFocused] = useState(false);

  // Animate camera position on focus
  useFrame(() => {
    const target = focused ? [2, 2, 2] : [5, 5, 5];
    camera.position.lerp(new Vector3(...target), 0.1);
    camera.lookAt(0, 0, 0);
  });

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      position={[0, 0, 0]}
      onClick={() => setFocused((f) => !f)}
      castShadow
    >
      <meshStandardMaterial color={focused ? "#10b981" : "#3b82f6"} />
    </Box>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <CameraAnimationBox />
      <OrbitControls />
    </>
  );
}`;

import { useFrame } from "@react-three/fiber";
function CameraAnimationBox() {
  const meshRef = useRef<Mesh>(null);
  const { camera } = useThree();
  const [focused, setFocused] = useState(false);

  // Animate camera position on focus
  useFrame(() => {
    const target = focused ? [2, 2, 2] : [5, 5, 5];
    camera.position.lerp(new Vector3(...target), 0.1);
    camera.lookAt(0, 0, 0);
  });

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      position={[0, 0, 0]}
      onClick={() => setFocused((f) => !f)}
      castShadow
    >
      <meshStandardMaterial color={focused ? "#10b981" : "#3b82f6"} />
    </Box>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <CameraAnimationBox />
      <OrbitControls />
    </>
  );
}

export default function CameraAnimation() {
  const cameraAnimation = [
    { badge: "useFrame", description: "Animation loop for camera" },
    { badge: "lerp", description: "Smoothly interpolate camera position" },
    { badge: "lookAt", description: "Keep camera focused on object" },
  ];

  const animationTechniques = [
    { badge: "onClick", description: "Trigger camera animation" },
    { badge: "Vector3", description: "Target camera position" },
    { badge: "setState", description: "Toggle focus state" },
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
          <path d="M12 8v8" />
        </svg>
      ),
      description: "Click: Animate camera",
    },
  ];

  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <RotateCcw className="w-8 h-8" />
            Lesson 9: Smooth Camera Animation
          </h1>
          <p className="text-muted-foreground">
            Tween camera movement smoothly when selecting objects
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 3D Scene */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  Camera Animation Scene
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Click the box to animate the camera
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 w-full rounded-lg overflow-hidden">
                  <Canvas camera={{ position: [5, 5, 5] }} shadows>
                    <Scene />
                  </Canvas>
                </div>
              </CardContent>
            </Card>
            {/* Code Display */}
            <CodeDisplay
              code={cameraAnimationCode}
              title="Camera Animation Scene Code"
              description="Box triggers camera tween using lerp on click"
            />
          </div>
          {/* Sidebar Cards */}
          <div className="space-y-4">
            <FeatureListCard title="Camera Animation" items={cameraAnimation} />
            <FeatureListCard
              title="Animation Techniques"
              items={animationTechniques}
            />
            <FeatureListCard title="Controls" items={controls} />
          </div>
        </div>
        {/* Next Lesson Button */}
        <NextLesson currentLessonId="camera-animation" scope="intermediate" />
      </div>
    </div>
  );
}
