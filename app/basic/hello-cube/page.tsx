"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Box as Cube, MousePointer, ArrowLeft } from "lucide-react";
import Link from "next/link";

function Scene() {
  return (
    <>
      {/* Ambient Light - environmental lighting */}
      <ambientLight intensity={0.4} />

      {/* Point Light - point source lighting */}
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Box geometry */}
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="orange" />
      </Box>

      {/* OrbitControls for camera rotation */}
      <OrbitControls />
    </>
  );
}

export default function HelloCube() {
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
          <span className="text-white font-medium">Hello Cube</span>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <Cube className="w-8 h-8" />
            Lesson 1: Hello Cube
          </h1>
          <p className="text-slate-300">
            Create a basic 3D scene with a box, lighting, and camera controls
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 3D Scene */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">3D Scene</CardTitle>
                <CardDescription className="text-slate-300">
                  Use your mouse to rotate, zoom, and pan the camera
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
                  <Badge variant="secondary">Canvas</Badge>
                  <span className="text-slate-300 text-sm">
                    Main container for 3D scene
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Mesh</Badge>
                  <span className="text-slate-300 text-sm">
                    3D object (Box)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Geometry</Badge>
                  <span className="text-slate-300 text-sm">
                    Shape of the object
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Material</Badge>
                  <span className="text-slate-300 text-sm">
                    Surface and color properties
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Light</Badge>
                  <span className="text-slate-300 text-sm">
                    Ambient & Point Light
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Controls</Badge>
                  <span className="text-slate-300 text-sm">OrbitControls</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <MousePointer className="w-4 h-4" />
                  <span>Click + Drag: Rotate camera</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <MousePointer className="w-4 h-4" />
                  <span>Scroll: Zoom in/out</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <MousePointer className="w-4 h-4" />
                  <span>Right click + Drag: Pan</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Code Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-slate-300 text-sm">
                  <strong>Canvas:</strong> Wraps the 3D scene
                </div>
                <div className="text-slate-300 text-sm">
                  <strong>Scene:</strong> Contains all 3D objects
                </div>
                <div className="text-slate-300 text-sm">
                  <strong>Box:</strong> Basic geometry with material
                </div>
                <div className="text-slate-300 text-sm">
                  <strong>Lights:</strong> Illuminate the scene
                </div>
                <div className="text-slate-300 text-sm">
                  <strong>Controls:</strong> User interaction
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
