"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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

const interiorDesignCode = `import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Furniture({ position, color, selected, onClick }) {
  return (
    <mesh position={position} onClick={onClick}>
      <boxGeometry args={[0.7, 0.7, 0.7]} />
      <meshStandardMaterial color={selected ? "#f59e0b" : color} />
    </mesh>
  );
}

export default function InteriorDesignScene() {
  const [selected, setSelected] = useState(0);
  const furniture = [
    { position: [-1.5, 0.35, 0], color: "#3b82f6" },
    { position: [0, 0.35, 0], color: "#10b981" },
    { position: [1.5, 0.35, 0], color: "#ef4444" },
  ];
  return (
    <Canvas camera={{ position: [0, 4, 6] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      {/* Floor */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[6, 0.1, 4]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>
      {/* Walls */}
      <mesh position={[0, 1, -2]}>
        <boxGeometry args={[6, 2, 0.1]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>
      <mesh position={[-3, 1, 0]}>
        <boxGeometry args={[0.1, 2, 4]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>
      <mesh position={[3, 1, 0]}>
        <boxGeometry args={[0.1, 2, 4]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>
      {/* Furniture */}
      {furniture.map((item, i) => (
        <Furniture
          key={i}
          position={item.position}
          color={item.color}
          selected={selected === i}
          onClick={() => setSelected(i)}
        />
      ))}
      <OrbitControls />
    </Canvas>
  );
}`;

function Furniture({
  position,
  color,
  selected,
  onClick,
}: {
  position: [number, number, number];
  color: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <mesh position={position} onClick={onClick}>
      <boxGeometry args={[0.7, 0.7, 0.7]} />
      <meshStandardMaterial color={selected ? "#f59e0b" : color} />
    </mesh>
  );
}

function InteriorDesignScene() {
  const [selected, setSelected] = useState(0);
  const furniture = [
    { position: [-1.5, 0.35, 0], color: "#3b82f6" },
    { position: [0, 0.35, 0], color: "#10b981" },
    { position: [1.5, 0.35, 0], color: "#ef4444" },
  ];
  return (
    <Canvas camera={{ position: [0, 4, 6] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      {/* Floor */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[6, 0.1, 4]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>
      {/* Walls */}
      <mesh position={[0, 1, -2]}>
        <boxGeometry args={[6, 2, 0.1]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>
      <mesh position={[-3, 1, 0]}>
        <boxGeometry args={[0.1, 2, 4]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>
      <mesh position={[3, 1, 0]}>
        <boxGeometry args={[0.1, 2, 4]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>
      {/* Furniture */}
      {furniture.map((item, i) => (
        <Furniture
          key={i}
          position={item.position as [number, number, number]}
          color={item.color}
          selected={selected === i}
          onClick={() => setSelected(i)}
        />
      ))}
      <OrbitControls />
    </Canvas>
  );
}

export default function InteriorDesignLesson() {
  const layoutConcepts = [
    { badge: "Wall", description: "Add walls to the scene" },
    { badge: "Floor", description: "Add floor to the scene" },
    { badge: "Furniture", description: "Add chairs, tables, etc." },
  ];
  const interaction = [
    { badge: "Rotate", description: "Rotate objects" },
    { badge: "Move", description: "Move objects in the scene" },
    { badge: "Select", description: "Select and manipulate objects" },
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
      description: "Click + Drag: Move/rotate objects",
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
          <Layers className="w-8 h-8" />
          Lesson 14: Basic Interior Design
        </h1>
        <p className="text-muted-foreground">
          Add walls, floor, and furniture models. Allow rotation and movement
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Interior Design Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Add and arrange objects in the scene
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InteriorDesignScene />
            </CardContent>
          </Card>
          {/* Code Display */}
          <CodeDisplay
            code={interiorDesignCode}
            title="Interior Design Code"
            description="Scene layout and manipulation logic"
          />
        </div>
        {/* Sidebar Cards */}
        <div className="space-y-4">
          <FeatureListCard title="Layout Concepts" items={layoutConcepts} />
          <FeatureListCard title="Interaction" items={interaction} />
          <FeatureListCard title="Controls" items={controls} />
        </div>
      </div>
    </div>
  );
}
