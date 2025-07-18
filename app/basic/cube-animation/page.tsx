"use client";

import { LessonCanvas } from "@/app/_components/lesson-canvas";
import { OrbitControls, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, MousePointer, Palette } from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
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
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Concepts Learned
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">useRef</Badge>
                <span className="text-muted-foreground text-sm">
                  Reference to mesh object
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">useFrame</Badge>
                <span className="text-muted-foreground text-sm">
                  Animation loop hook
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">useState</Badge>
                <span className="text-muted-foreground text-sm">
                  Manage hover state
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">onPointerOver</Badge>
                <span className="text-muted-foreground text-sm">
                  Mouse enter event
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">onPointerOut</Badge>
                <span className="text-muted-foreground text-sm">
                  Mouse leave event
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">rotation</Badge>
                <span className="text-muted-foreground text-sm">
                  Object rotation
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Animation Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-muted-foreground text-sm">
                <strong>Rotation Y:</strong> 2 rad/s (fast)
              </div>
              <div className="text-muted-foreground text-sm">
                <strong>Rotation X:</strong> 0.5 rad/s (slow)
              </div>
              <div className="text-muted-foreground text-sm">
                <strong>Material:</strong> Metal with roughness 0.3
              </div>
              <div className="text-muted-foreground text-sm">
                <strong>Colors:</strong> Cyan → Red on hover
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Interaction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MousePointer className="w-4 h-4" />
                <span>Hover: Change cube color</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <RotateCcw className="w-4 h-4" />
                <span>Auto rotation: Continuous</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Palette className="w-4 h-4" />
                <span>Material: Reflective metal</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
