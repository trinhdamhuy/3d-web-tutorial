"use client";

import { useState, Suspense } from "react";
import {
  Instances,
  OrbitControls,
  Plane,
  PerformanceMonitor,
  Box,
} from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap } from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
import { FeatureListCard } from "@/app/_components/feature-list-card";
import { LessonCanvas } from "@/app/_components/lesson-canvas";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CullFaceBack, PCFSoftShadowMap } from "three";

const perfOptCode = `import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Instances,
  OrbitControls,
  Plane,
  PerformanceMonitor,
  Box,
} from "@react-three/drei";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CullFaceBack, PCFSoftShadowMap } from "three";

function PerformanceOptimizationScene() {
  const [fps, setFps] = useState(0);
  const [showShadow, setShowShadow] = useState(true);
  const [showStaggeredCubes, setShowStaggeredCubes] = useState(false);
  const planeSize = 12;
  const boxSize = 0.1;
  const gap = 0.05;
  const grid = Math.floor(planeSize / (boxSize + gap));
  const count = grid * grid;
  const shadowArea = planeSize * 2;
  return (
    <div className="relative">
      <Canvas
        camera={{ position: [0, 8, 15], fov: 60 }}
        shadows={showShadow}
        gl={{
          antialias: true,
          shadowMap: {
            enabled: showShadow,
            type: PCFSoftShadowMap,
            autoUpdate: true,
            needsUpdate: true,
            render: () => {},
            cullFace: CullFaceBack,
          },
        }}
        dpr={1}
      >
        <ambientLight intensity={1} />
        <directionalLight
          position={[10, 10, 0]}
          intensity={1}
          castShadow={showShadow}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-left={-shadowArea / 2}
          shadow-camera-right={shadowArea / 2}
          shadow-camera-top={shadowArea / 2}
          shadow-camera-bottom={-shadowArea / 2}
          shadow-bias={-0.0005}
        />
        <hemisphereLight intensity={0.3} />
        <PerformanceMonitor
          onChange={({ fps }) => {
            setFps(fps);
          }}
        />
        <Plane
          args={[planeSize, planeSize]}
          position={[0, -0.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow={showShadow}
        >
          <meshStandardMaterial color="white" />
        </Plane>
        <Suspense fallback={<span>Loading...</span>}>
          <Instances
            limit={count}
            castShadow={showShadow}
            receiveShadow={showShadow}
          >
            <boxGeometry args={[boxSize, boxSize, boxSize]} />
            <meshStandardMaterial color="red" />
            {Array.from({ length: count }).map((_, i) => {
              const row = Math.floor(i / grid);
              const col = i % grid;
              if (
                showStaggeredCubes &&
                ((row % 2 === 0 && col % 2 === 1) ||
                  (row % 2 === 1 && col % 2 === 0))
              ) {
                return null;
              }
              const x = -planeSize / 2 + boxSize / 2 + col * (boxSize + gap);
              const z = -planeSize / 2 + boxSize / 2 + row * (boxSize + gap);
              return (
                <Box
                  key={i}
                  position={[x, 0, z]}
                  castShadow={showShadow}
                  receiveShadow={showShadow}
                  args={[boxSize, boxSize, boxSize]}
                >
                  <meshStandardMaterial color="red" />
                </Box>
              );
            })}
          </Instances>
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Badge className="absolute right-4 top-4 z-10 select-none">
        {fps} FPS
      </Badge>
      <div className="flex gap-4 absolute bottom-4 left-4 z-10">
        <Label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            checked={showShadow}
            onCheckedChange={(v) => setShowShadow(!!v)}
            id="shadow"
          />
          <span className="select-none">Show shadow</span>
        </Label>
        <Label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            checked={showStaggeredCubes}
            onCheckedChange={(v) => setShowStaggeredCubes(!!v)}
            id="staggered-cubes"
          />
          <span className="select-none">Show staggered cubes</span>
        </Label>
      </div>
    </div>
  );
}`;

function PerformanceOptimizationScene() {
  const [fps, setFps] = useState(0);
  const [showShadow, setShowShadow] = useState(true);
  const [showStaggeredCubes, setShowStaggeredCubes] = useState(false);
  const planeSize = 12;
  const boxSize = 0.1;
  const gap = 0.05;
  const grid = Math.floor(planeSize / (boxSize + gap));
  const count = grid * grid;
  const shadowArea = planeSize * 2;
  return (
    <div className="relative">
      <LessonCanvas
        camera={{ position: [0, 8, 15], fov: 60 }}
        shadows={showShadow}
        gl={{
          antialias: true,
          shadowMap: {
            enabled: showShadow,
            type: PCFSoftShadowMap,
            autoUpdate: true,
            needsUpdate: true,
            render: () => {},
            cullFace: CullFaceBack,
          },
        }}
        dpr={1}
      >
        <ambientLight intensity={1} />
        <directionalLight
          position={[10, 10, 0]}
          intensity={1}
          castShadow={showShadow}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-left={-shadowArea / 2}
          shadow-camera-right={shadowArea / 2}
          shadow-camera-top={shadowArea / 2}
          shadow-camera-bottom={-shadowArea / 2}
          shadow-bias={-0.0005}
        />
        <hemisphereLight intensity={0.3} />
        <PerformanceMonitor
          onChange={({ fps }) => {
            setFps(fps);
          }}
        />
        <Plane
          args={[planeSize, planeSize]}
          position={[0, -0.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow={showShadow}
        >
          <meshStandardMaterial color="white" />
        </Plane>
        <Suspense fallback={<span>Loading...</span>}>
          <Instances
            limit={count}
            castShadow={showShadow}
            receiveShadow={showShadow}
          >
            <boxGeometry args={[boxSize, boxSize, boxSize]} />
            <meshStandardMaterial color="red" />
            {Array.from({ length: count }).map((_, i) => {
              const row = Math.floor(i / grid);
              const col = i % grid;
              if (
                showStaggeredCubes &&
                ((row % 2 === 0 && col % 2 === 1) ||
                  (row % 2 === 1 && col % 2 === 0))
              ) {
                return null;
              }
              const x = -planeSize / 2 + boxSize / 2 + col * (boxSize + gap);
              const z = -planeSize / 2 + boxSize / 2 + row * (boxSize + gap);
              return (
                <Box
                  key={i}
                  position={[x, 0, z]}
                  castShadow={showShadow}
                  receiveShadow={showShadow}
                  args={[boxSize, boxSize, boxSize]}
                >
                  <meshStandardMaterial color="red" />
                </Box>
              );
            })}
          </Instances>
        </Suspense>
        <OrbitControls />
      </LessonCanvas>
      <Badge className="absolute right-4 top-4 z-10 select-none">
        {fps} FPS
      </Badge>
      <div className="flex gap-4 absolute bottom-4 left-4 z-10">
        <Label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            checked={showShadow}
            onCheckedChange={(v) => setShowShadow(!!v)}
            id="shadow"
          />
          <span className="select-none">Show shadow</span>
        </Label>
        <Label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            checked={showStaggeredCubes}
            onCheckedChange={(v) => setShowStaggeredCubes(!!v)}
            id="staggered-cubes"
          />
          <span className="select-none">Show staggered cubes</span>
        </Label>
      </div>
    </div>
  );
}

export default function PerformanceOptimizationLesson() {
  const perfConcepts = [
    { badge: "Instances", description: "Efficiently render many objects" },
    { badge: "Suspense", description: "Async loading for performance" },
    { badge: "Bounds", description: "Fit camera to content" },
    { badge: "Lazy", description: "Lazy load heavy models" },
  ];
  const techniques = [
    { badge: "Optimization", description: "Improve web 3D performance" },
    { badge: "Memory", description: "Reduce memory usage" },
    { badge: "FPS", description: "Increase frame rate" },
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
      description: "Click + Drag: Rotate camera",
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
          <Zap className="w-8 h-8" />
          Lesson 15: Performance Optimization
        </h1>
        <p className="text-muted-foreground">
          Use instances, suspense, bounds, and lazy loading for optimal
          performance
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2 relative">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Performance Optimization Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Optimize your 3D web app for speed and efficiency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceOptimizationScene />
            </CardContent>
          </Card>
          {/* Code Display */}
          <CodeDisplay
            code={perfOptCode}
            title="Performance Optimization Code"
            description="Web 3D optimization techniques"
          />
        </div>
        {/* Sidebar Cards */}
        <div className="space-y-4">
          <FeatureListCard title="Performance Concepts" items={perfConcepts} />
          <FeatureListCard title="Techniques" items={techniques} />
          <FeatureListCard title="Controls" items={controls} />
        </div>
      </div>
    </div>
  );
}
