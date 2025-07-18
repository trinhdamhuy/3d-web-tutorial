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
import { Plane } from "@react-three/drei";

const dragDropCode = `import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MousePointer } from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
import { FeatureListCard } from "@/app/_components/feature-list-card";
import * as THREE from "three";
import { Plane } from "@react-three/drei";

function DraggableBox({
  dragging,
  setDragging,
}: {
  dragging: boolean;
  setDragging: (v: boolean) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera, gl } = useThree();
  const boxHeight = 1;
  const groundY = -1;
  const restY = groundY + boxHeight / 2; // y = -0.5
  const dragY = 2;
  const [position, setPosition] = useState<[number, number, number]>([
    0,
    restY,
    0,
  ]);

  // Animate Y to restY when mouse is released
  useFrame((_, delta) => {
    if (!dragging && position[1] > restY) {
      setPosition(([x, y, z]) => {
        const newY = Math.max(restY, y - delta * 6); // falling speed
        return [x, newY, z];
      });
    }
  });

  function getXZFromPointer(
    event: MouseEvent | PointerEvent
  ): [number, number, number] {
    const mouse = new THREE.Vector2();
    const rect = gl.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -restY);
    const intersection = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersection);
    return [intersection.x, dragY, intersection.z]; // When dragging, Y = dragY (raise box up)
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerDown={(e) => {
        setDragging(true);
        // @ts-expect-error setPointerCapture is not always on target in TS types
        e.target.setPointerCapture(e.pointerId);
        // When starting drag, lift the box up
        setPosition(([x, , z]) => [x, dragY, z]);
      }}
      onPointerMove={(e) => {
        if (dragging) {
          const [x, , z] = getXZFromPointer(e.nativeEvent);
          setPosition([x, dragY, z]);
        }
      }}
      onPointerUp={(e) => {
        setDragging(false);
        // @ts-expect-error releasePointerCapture is not always on target in TS types
        e.target.releasePointerCapture(e.pointerId);
      }}
      onPointerLeave={(e) => {
        setDragging(false);
        // @ts-expect-error releasePointerCapture is not always on target in TS types
        e.target.releasePointerCapture(e.pointerId);
      }}
      castShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}

function DragDropScene() {
  const [dragging, setDragging] = useState(false);
  return (
    <LessonCanvas camera={{ position: [4, 4, 4] }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} castShadow />
      <DraggableBox dragging={dragging} setDragging={setDragging} />
      <OrbitControls enabled={!dragging} />
      <Plane
        args={[10, 10]}
        position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#e5e7eb" />
      </Plane>
    </LessonCanvas>
  );
}`;

// Add global type for window._lastPointerEvent
declare global {
  interface Window {
    _lastPointerEvent?: MouseEvent;
  }
}

function DraggableBox({
  dragging,
  setDragging,
}: {
  dragging: boolean;
  setDragging: (v: boolean) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera, gl } = useThree();
  const boxHeight = 1;
  const groundY = -1;
  const restY = groundY + boxHeight / 2; // y = -0.5
  const dragY = 2;
  const [position, setPosition] = useState<[number, number, number]>([
    0,
    restY,
    0,
  ]);

  // Animate Y to restY when mouse is released
  useFrame((_, delta) => {
    if (!dragging && position[1] > restY) {
      setPosition(([x, y, z]) => {
        const newY = Math.max(restY, y - delta * 6); // falling speed
        return [x, newY, z];
      });
    }
  });

  function getXZFromPointer(
    event: MouseEvent | PointerEvent
  ): [number, number, number] {
    const mouse = new THREE.Vector2();
    const rect = gl.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -restY);
    const intersection = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersection);
    return [intersection.x, dragY, intersection.z]; // When dragging, Y = dragY (raise box up)
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerDown={(e) => {
        setDragging(true);
        // @ts-expect-error setPointerCapture is not always on target in TS types
        e.target.setPointerCapture(e.pointerId);
        // When starting drag, lift the box up
        setPosition(([x, , z]) => [x, dragY, z]);
      }}
      onPointerMove={(e) => {
        if (dragging) {
          const [x, , z] = getXZFromPointer(e.nativeEvent);
          setPosition([x, dragY, z]);
        }
      }}
      onPointerUp={(e) => {
        setDragging(false);
        // @ts-expect-error releasePointerCapture is not always on target in TS types
        e.target.releasePointerCapture(e.pointerId);
      }}
      onPointerLeave={(e) => {
        setDragging(false);
        // @ts-expect-error releasePointerCapture is not always on target in TS types
        e.target.releasePointerCapture(e.pointerId);
      }}
      castShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}

function DragDropScene() {
  const [dragging, setDragging] = useState(false);
  return (
    <LessonCanvas camera={{ position: [4, 4, 4] }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} castShadow />
      <DraggableBox dragging={dragging} setDragging={setDragging} />
      <OrbitControls enabled={!dragging} />
      <Plane
        args={[10, 10]}
        position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#e5e7eb" />
      </Plane>
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
