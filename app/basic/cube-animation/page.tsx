"use client";

import { Canvas } from "@react-three/fiber";
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
import { RotateCcw, MousePointer, Palette, ArrowLeft } from "lucide-react";
import Link from "next/link";
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
        color={hovered ? "#ff6b6b" : "#4ecdc4"}
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
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Animated Cube */}
      <AnimatedCube />

      {/* OrbitControls for camera rotation */}
      <OrbitControls />
    </>
  );
}

export default function CubeAnimation() {
  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link
            href="/"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <ArrowLeft className="w-4 h-4 text-slate-400 rotate-180" />
          <Link
            href="/basic"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Basic Level
          </Link>
          <ArrowLeft className="w-4 h-4 text-slate-400 rotate-180" />
          <span className="text-white font-medium">Cube Animation</span>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <RotateCcw className="w-8 h-8" />
            Lesson 2: Cube Animation
          </h1>
          <p className="text-slate-300">
            Animate a cube with rotation and hover effects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 3D Scene */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Animated 3D Scene</CardTitle>
                <CardDescription className="text-slate-300">
                  Hover over the cube to see the color change effect
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 w-full rounded-lg overflow-hidden">
                  <Canvas camera={{ position: [3, 3, 3] }}>
                    <Scene />
                  </Canvas>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Concepts */}
          <div className="space-y-4">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Concepts Learned</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">useRef</Badge>
                  <span className="text-slate-300 text-sm">
                    Reference to mesh object
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">useFrame</Badge>
                  <span className="text-slate-300 text-sm">
                    Animation loop hook
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">useState</Badge>
                  <span className="text-slate-300 text-sm">
                    Manage hover state
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">onPointerOver</Badge>
                  <span className="text-slate-300 text-sm">
                    Mouse enter event
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">onPointerOut</Badge>
                  <span className="text-slate-300 text-sm">
                    Mouse leave event
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">rotation</Badge>
                  <span className="text-slate-300 text-sm">
                    Object rotation
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Animation Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-slate-300 text-sm">
                  <strong>Rotation Y:</strong> 2 rad/s (fast)
                </div>
                <div className="text-slate-300 text-sm">
                  <strong>Rotation X:</strong> 0.5 rad/s (slow)
                </div>
                <div className="text-slate-300 text-sm">
                  <strong>Material:</strong> Metal with roughness 0.3
                </div>
                <div className="text-slate-300 text-sm">
                  <strong>Colors:</strong> Cyan → Red on hover
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Interaction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <MousePointer className="w-4 h-4" />
                  <span>Hover: Change cube color</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <RotateCcw className="w-4 h-4" />
                  <span>Auto rotation: Continuous</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <Palette className="w-4 h-4" />
                  <span>Material: Reflective metal</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
