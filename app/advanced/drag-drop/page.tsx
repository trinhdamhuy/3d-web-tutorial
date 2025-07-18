"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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
import * as THREE from "three";
import { LessonCanvas } from "@/app/_components/lesson-canvas";

const dragDropCode = `import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function DraggableBox() {
  const meshRef = useRef();
  const { camera, gl, scene } = useThree();
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState([0, 0.5, 0]);

  useFrame(() => {
    if (dragging && meshRef.current) {
      // Raycast to mouse position
      // ... (see full code for details)
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerDown={() => setDragging(true)}
      onPointerUp={() => setDragging(false)}
      castShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}

export default function DragDropScene() {
  return (
    <Canvas camera={{ position: [4, 4, 4] }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <DraggableBox />
      <OrbitControls />
    </Canvas>
  );
}`;

function DraggableBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera, gl } = useThree();
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState<[number, number, number]>([
    0, 0.5, 0,
  ]);

  // Helper to convert screen to world XZ
  function getXZFromPointer(event: MouseEvent) {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / gl.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / gl.domElement.clientHeight) * 2 + 1;
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.5);
    const intersection = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersection);
    return [intersection.x, 0.5, intersection.z];
  }

  useFrame(() => {
    if (dragging && meshRef.current) {
      // Use last pointer event
      if ((window as any)._lastPointerEvent) {
        setPosition(getXZFromPointer((window as any)._lastPointerEvent));
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerDown={(e) => {
        setDragging(true);
        (window as any)._lastPointerEvent = e;
      }}
      onPointerUp={() => setDragging(false)}
      onPointerMove={(e) => {
        if (dragging) (window as any)._lastPointerEvent = e;
      }}
      castShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}

function DragDropScene() {
  return (
    <LessonCanvas camera={{ position: [4, 4, 4] }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <DraggableBox />
      <OrbitControls />
    </LessonCanvas>
  );
}

export default function DragDropLesson() {
  const dragConcepts = [
    { badge: "Raycast", description: "Detect mouse over model" },
    { badge: "Drag", description: "Move model with mouse" },
    { badge: "Position", description: "Update model position" },
  ];
  const customLogic = [
    { badge: "Custom Raycast", description: "Custom picking logic" },
    { badge: "State Update", description: "Update position on drag" },
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
      description: "Click + Drag: Move model",
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
          <MousePointer className="w-8 h-8" />
          Lesson 13: Drag & Drop Features
        </h1>
        <p className="text-muted-foreground">
          Drag models in the scene using the mouse
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Drag & Drop Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Drag models with the mouse
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DragDropScene />
            </CardContent>
          </Card>
          {/* Code Display */}
          <CodeDisplay
            code={dragDropCode}
            title="Drag & Drop Code"
            description="Custom raycast and position update"
          />
        </div>
        {/* Sidebar Cards */}
        <div className="space-y-4">
          <FeatureListCard title="Drag Concepts" items={dragConcepts} />
          <FeatureListCard title="Custom Logic" items={customLogic} />
          <FeatureListCard title="Controls" items={controls} />
        </div>
      </div>
    </div>
  );
}
