"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Sphere, Cylinder, Plane } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Box as Cube,
  Circle,
  Cylinder as CylinderIcon,
  Square,
  Grid3X3,
} from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";

function Scene() {
  return (
    <>
      {/* Ambient Light - environmental lighting */}
      <ambientLight intensity={0.4} />

      {/* Point Light - point source lighting */}
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Ground Plane */}
      <Plane
        args={[10, 10]}
        position={[0, -2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="#374151" />
      </Plane>

      {/* Box - center position */}
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ef4444" />
      </Box>

      {/* Sphere - front */}
      <Sphere args={[0.5, 32, 32]} position={[0, 0, 2]}>
        <meshStandardMaterial color="#3b82f6" />
      </Sphere>

      {/* Cylinder - right */}
      <Cylinder args={[0.5, 0.5, 1, 32]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Cylinder>

      {/* Small Box - left */}
      <Box args={[0.5, 0.5, 0.5]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>

      {/* Small Sphere - back */}
      <Sphere args={[0.3, 16, 16]} position={[0, 0, -2]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Sphere>

      {/* Small Cylinder - top */}
      <Cylinder args={[0.2, 0.2, 0.8, 16]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#ec4899" />
      </Cylinder>

      {/* OrbitControls for camera rotation */}
      <OrbitControls />
    </>
  );
}

const multiObjectCode = `function Scene() {
  return (
    <>
      {/* Ambient Light - environmental lighting */}
      <ambientLight intensity={0.4} />

      {/* Point Light - point source lighting */}
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Ground Plane */}
      <Plane
        args={[10, 10]}
        position={[0, -2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="#374151" />
      </Plane>

      {/* Box - center position */}
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ef4444" />
      </Box>

      {/* Sphere - front */}
      <Sphere args={[0.5, 32, 32]} position={[0, 0, 2]}>
        <meshStandardMaterial color="#3b82f6" />
      </Sphere>

      {/* Cylinder - right */}
      <Cylinder args={[0.5, 0.5, 1, 32]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Cylinder>

      {/* Small Box - left */}
      <Box args={[0.5, 0.5, 0.5]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>

      {/* Small Sphere - back */}
      <Sphere args={[0.3, 16, 16]} position={[0, 0, -2]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Sphere>

      {/* Small Cylinder - top */}
      <Cylinder args={[0.2, 0.2, 0.8, 16]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#ec4899" />
      </Cylinder>

      {/* OrbitControls for camera rotation */}
      <OrbitControls />
    </>
  );
}`;

export default function MultiObject() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Grid3X3 className="w-8 h-8" />
          Lesson 3: Multi Object Scene
        </h1>
        <p className="text-muted-foreground">
          Create a scene with multiple 3D objects arranged in space
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Multi Object 3D Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Explore different 3D objects and how to arrange them in space
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 w-full rounded-lg overflow-hidden">
                <Canvas camera={{ position: [5, 5, 5] }}>
                  <Scene />
                </Canvas>
              </div>
            </CardContent>
          </Card>

          {/* Code Display */}
          <CodeDisplay
            code={multiObjectCode}
            title="Multi Object Scene"
            description="Scene with multiple 3D objects positioned in 3D space"
          />
        </div>

        {/* Concepts */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">3D Objects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Box</Badge>
                <span className="text-muted-foreground text-sm">
                  Cube (0, 0, 0)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Sphere</Badge>
                <span className="text-muted-foreground text-sm">
                  Ball (0, 0, 2)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Cylinder</Badge>
                <span className="text-muted-foreground text-sm">
                  Tube (2, 0, 0)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Small Box</Badge>
                <span className="text-muted-foreground text-sm">
                  Small cube (-2, 0, 0)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Small Sphere</Badge>
                <span className="text-muted-foreground text-sm">
                  Small ball (0, 0, -2)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Small Cylinder</Badge>
                <span className="text-muted-foreground text-sm">
                  Small tube (0, 2, 0)
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                3D Coordinate System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-muted-foreground text-sm">
                <strong>X-axis:</strong> Left (-) → Right (+)
              </div>
              <div className="text-muted-foreground text-sm">
                <strong>Y-axis:</strong> Down (-) → Up (+)
              </div>
              <div className="text-muted-foreground text-sm">
                <strong>Z-axis:</strong> Back (-) → Front (+)
              </div>
              <div className="text-muted-foreground text-sm">
                <strong>Position:</strong> [x, y, z]
              </div>
              <div className="text-muted-foreground text-sm">
                <strong>Rotation:</strong> [x, y, z] (radians)
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Geometry Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Cube className="w-4 h-4" />
                <span>Box: args=[width, height, depth]</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Circle className="w-4 h-4" />
                <span>
                  Sphere: args=[radius, widthSegments, heightSegments]
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <CylinderIcon className="w-4 h-4" />
                <span>
                  Cylinder: args=[topRadius, bottomRadius, height, segments]
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Square className="w-4 h-4" />
                <span>Plane: args=[width, height]</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
