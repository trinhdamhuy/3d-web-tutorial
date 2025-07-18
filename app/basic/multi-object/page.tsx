"use client";

import { LessonCanvas } from "@/app/_components/lesson-canvas";
import { OrbitControls, Box, Sphere, Cylinder, Plane } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Box as Cube,
  Circle,
  Cylinder as CylinderIcon,
  Square,
  Grid3X3,
} from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
import { FeatureListCard } from "@/app/_components/feature-list-card";

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

const multiObjectCode = `import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Sphere, Cylinder, Plane } from "@react-three/drei";

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

export default function MultiObject() {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <Scene />
    </Canvas>
  );
}`;

export default function MultiObject() {
  const objects = [
    { badge: "Box", description: "Cube (0, 0, 0)" },
    { badge: "Sphere", description: "Ball (0, 0, 2)" },
    { badge: "Cylinder", description: "Tube (2, 0, 0)" },
    { badge: "Small Box", description: "Small cube (-2, 0, 0)" },
    { badge: "Small Sphere", description: "Small ball (0, 0, -2)" },
    { badge: "Small Cylinder", description: "Small tube (0, 2, 0)" },
  ];

  const coordinateSystem = [
    { label: "X-axis", description: "Left (-) → Right (+)" },
    { label: "Y-axis", description: "Down (-) → Up (+)" },
    { label: "Z-axis", description: "Back (-) → Front (+)" },
    { label: "Position", description: "[x, y, z]" },
    { label: "Rotation", description: "[x, y, z] (radians)" },
  ];

  const geometryTypes = [
    {
      icon: <Cube className="w-4 h-4" />,
      description: "Box: args=[width, height, depth]",
    },
    {
      icon: <Circle className="w-4 h-4" />,
      description: "Sphere: args=[radius, widthSegments, heightSegments]",
    },
    {
      icon: <CylinderIcon className="w-4 h-4" />,
      description: "Cylinder: args=[topRadius, bottomRadius, height, segments]",
    },
    {
      icon: <Square className="w-4 h-4" />,
      description: "Plane: args=[width, height]",
    },
  ];
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
              <LessonCanvas camera={{ position: [5, 5, 5] }}>
                <Scene />
              </LessonCanvas>
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
          <FeatureListCard title="3D Objects" items={objects} />
          <FeatureListCard
            title="3D Coordinate System"
            items={coordinateSystem}
          />
          <FeatureListCard title="Geometry Types" items={geometryTypes} />
        </div>
      </div>
    </div>
  );
}
