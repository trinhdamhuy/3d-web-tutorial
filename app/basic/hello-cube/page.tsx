"use client";

import { LessonCanvas } from "@/app/_components/lesson-canvas";
import { OrbitControls, Box } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Box as Cube, MousePointer } from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
import { FeatureListCard } from "@/app/_components/feature-list-card";

function Scene() {
  return (
    <>
      {/* Ambient Light - environmental lighting */}
      <ambientLight intensity={0.6} />

      {/* Point Light - point source lighting */}
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Box geometry */}
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="orange" roughness={0.3} metalness={0.7} />
      </Box>

      {/* OrbitControls for camera rotation */}
      <OrbitControls />
    </>
  );
}

const sceneCode = `import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

function Scene() {
  return (
    <>
      {/* Ambient Light - environmental lighting */}
      <ambientLight intensity={0.6} />

      {/* Point Light - point source lighting */}
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Box geometry */}
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="orange" roughness={0.3} metalness={0.7} />
      </Box>

      {/* OrbitControls for camera rotation */}
      <OrbitControls />
    </>
  );
}

export default function HelloCube() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <Scene />
    </Canvas>
  );
}`;

export default function HelloCube() {
  const concepts = [
    { badge: "Canvas", description: "Main container for 3D scene" },
    { badge: "Mesh", description: "3D object (Box)" },
    { badge: "Geometry", description: "Shape of the object" },
    { badge: "Material", description: "Surface and color properties" },
    { badge: "Light", description: "Ambient & Point Light" },
    { badge: "Controls", description: "OrbitControls" },
  ];
  const controls = [
    {
      icon: <MousePointer className="w-4 h-4" />,
      description: "Click + Drag: Rotate camera",
    },
    {
      icon: <MousePointer className="w-4 h-4" />,
      description: "Scroll: Zoom in/out",
    },
    {
      icon: <MousePointer className="w-4 h-4" />,
      description: "Right click + Drag: Pan",
    },
  ];
  const codeStructure = [
    { label: "Canvas", description: "Wraps the 3D scene" },
    { label: "Scene", description: "Contains all 3D objects" },
    { label: "Box", description: "Basic geometry with material" },
    { label: "Lights", description: "Illuminate the scene" },
    { label: "Controls", description: "User interaction" },
  ];
  return (
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
              <LessonCanvas camera={{ position: [3, 3, 3] }}>
                <Scene />
              </LessonCanvas>
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
          <FeatureListCard title="Concepts Learned" items={concepts} />
          <FeatureListCard title="Controls" items={controls} />
          <FeatureListCard title="Code Structure" items={codeStructure} />
        </div>
      </div>
    </div>
  );
}
