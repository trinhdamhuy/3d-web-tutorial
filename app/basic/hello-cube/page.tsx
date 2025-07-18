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
import { Box as Cube, MousePointer } from "lucide-react";
import { NextLesson } from "@/app/_components/next-lesson";
import { CodeDisplay } from "@/app/_components/code-display";

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

const sceneCode = `function Scene() {
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
}`;

export default function HelloCube() {
  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Cube className="w-8 h-8" />
            Lesson 1: Hello Cube
          </h1>
          <p className="text-muted-foreground">
            Create a basic 3D scene with a box, lighting, and camera controls
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 3D Scene */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">3D Scene</CardTitle>
                <CardDescription className="text-muted-foreground">
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

            {/* Code Display */}
            <CodeDisplay
              code={sceneCode}
              title="Scene Component Code"
              description="The main 3D scene component with lighting, geometry, and controls"
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
                  <Badge variant="secondary">Canvas</Badge>
                  <span className="text-muted-foreground text-sm">
                    Main container for 3D scene
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Mesh</Badge>
                  <span className="text-muted-foreground text-sm">
                    3D object (Box)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Geometry</Badge>
                  <span className="text-muted-foreground text-sm">
                    Shape of the object
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Material</Badge>
                  <span className="text-muted-foreground text-sm">
                    Surface and color properties
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Light</Badge>
                  <span className="text-muted-foreground text-sm">
                    Ambient & Point Light
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Controls</Badge>
                  <span className="text-muted-foreground text-sm">
                    OrbitControls
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MousePointer className="w-4 h-4" />
                  <span>Click + Drag: Rotate camera</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MousePointer className="w-4 h-4" />
                  <span>Scroll: Zoom in/out</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MousePointer className="w-4 h-4" />
                  <span>Right click + Drag: Pan</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  Code Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-muted-foreground text-sm">
                  <strong>Canvas:</strong> Wraps the 3D scene
                </div>
                <div className="text-muted-foreground text-sm">
                  <strong>Scene:</strong> Contains all 3D objects
                </div>
                <div className="text-muted-foreground text-sm">
                  <strong>Box:</strong> Basic geometry with material
                </div>
                <div className="text-muted-foreground text-sm">
                  <strong>Lights:</strong> Illuminate the scene
                </div>
                <div className="text-muted-foreground text-sm">
                  <strong>Controls:</strong> User interaction
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Next Lesson Button */}
        <NextLesson currentLessonId="hello-cube" scope="basic" />
      </div>
    </div>
  );
}
