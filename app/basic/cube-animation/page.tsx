"use client";

import { OrbitControls, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { LessonCanvas } from "@/app/_components/lesson-canvas";
import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RotateCcw, MousePointer, Palette } from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
import { Mesh } from "three";
import { FeatureListCard } from "@/app/_components/feature-list-card";

function AnimatedCube() {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Animation loop - runs every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate cube around Y axis
      meshRef.current.rotation.y += delta * 2;
      // Rotate cube around X axis at slower speed
      meshRef.current.rotation.x += delta * 0.5;
    }
  });

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={hovered ? "red" : "cyan"}
        roughness={0.3}
        metalness={0.7}
      />
    </Box>
  );
}

const animatedCubeCode = `import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { Mesh } from "three";

function AnimatedCube() {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Animation loop - runs every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate cube around Y axis
      meshRef.current.rotation.y += delta * 2;
      // Rotate cube around X axis at slower speed
      meshRef.current.rotation.x += delta * 0.5;
    }
  });

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={hovered ? "red" : "cyan"}
        roughness={0.3}
        metalness={0.7}
      />
    </Box>
  );
}

function Scene() {
  return (
    <>
      {/* Ambient Light - environmental lighting */}
      <ambientLight intensity={0.4} />
      {/* Point Light - point source lighting */}
      <pointLight position={[10, 10, 10]} />
      {/* Animated Cube */}
      <AnimatedCube />
      {/* OrbitControls for camera rotation */}
      <OrbitControls />
    </>
  );
}

export default function CubeAnimation() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <Scene />
    </Canvas>
  );
}`;

function Scene() {
  return (
    <>
      {/* Ambient Light - environmental lighting */}
      <ambientLight intensity={0.4} />

      {/* Point Light - point source lighting */}
      <pointLight position={[10, 10, 10]} />

      {/* Animated Cube */}
      <AnimatedCube />

      {/* OrbitControls for camera rotation */}
      <OrbitControls />
    </>
  );
}

export default function CubeAnimation() {
  const concepts = [
    {
      badge: "useRef",
      description: "Reference to mesh object",
    },
    {
      badge: "useFrame",
      description: "Animation loop hook",
    },
    {
      badge: "useState",
      description: "Manage hover state",
    },
    {
      badge: "onPointerOver",
      description: "Mouse enter event",
    },
    {
      badge: "onPointerOut",
      description: "Mouse leave event",
    },
    {
      badge: "rotation",
      description: "Object rotation",
    },
  ];

  const animationDetails = [
    {
      label: "Rotation Y",
      description: "2 rad/s (fast)",
    },
    {
      label: "Rotation X",
      description: "0.5 rad/s (slow)",
    },
    {
      label: "Material",
      description: "Metal with roughness 0.3",
    },
    {
      label: "Colors",
      description: "Cyan → Red on hover",
    },
  ];

  const interactions = [
    {
      icon: <MousePointer className="w-4 h-4" />,
      description: "Hover: Change cube color",
    },
    {
      icon: <RotateCcw className="w-4 h-4" />,
      description: "Auto rotation: Continuous",
    },
    {
      icon: <Palette className="w-4 h-4" />,
      description: "Material: Reflective metal",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <RotateCcw className="w-8 h-8" />
          Lesson 2: Cube Animation
        </h1>
        <p className="text-muted-foreground">
          Animate a cube with rotation and hover effects
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Animated 3D Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Hover over the cube to see the color change effect
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LessonCanvas camera={{ position: [3, 3, 3] }}>
                <Scene />
              </LessonCanvas>
            </CardContent>
          </Card>

          {/* Code Display */}
          <CodeDisplay
            code={animatedCubeCode}
            title="Animated Cube Component"
            description="Interactive cube with rotation animation and hover effects"
          />
        </div>

        {/* Concepts */}
        <div className="space-y-4">
          <FeatureListCard title="Concepts Learned" items={concepts} />
          <FeatureListCard title="Animation Details" items={animationDetails} />
          <FeatureListCard title="Interaction" items={interactions} />
        </div>
      </div>
    </div>
  );
}
