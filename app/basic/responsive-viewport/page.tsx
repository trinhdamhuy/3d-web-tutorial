"use client";

import { useThree } from "@react-three/fiber";
import { LessonCanvas } from "@/app/_components/lesson-canvas";
import { OrbitControls, Box, Sphere, Cylinder } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Smartphone,
  Monitor,
  Tablet,
  TabletSmartphone as Responsive,
} from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
import { useEffect, useState } from "react";
import { FeatureListCard } from "@/app/_components/feature-list-card";

// Component to adjust camera based on screen size
function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    // Adjust camera based on viewport size
    if (size.width < 768) {
      // Mobile
      camera.position.set(4, 4, 4);
      if ("fov" in camera) camera.fov = 75;
    } else if (size.width < 1024) {
      // Tablet
      camera.position.set(5, 5, 5);
      if ("fov" in camera) camera.fov = 60;
    } else {
      // Desktop
      camera.position.set(6, 6, 6);
      if ("fov" in camera) camera.fov = 50;
    }

    camera.updateProjectionMatrix();
  }, [camera, size.width, size.height]);

  return null;
}

const responsiveCameraCode = `import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Box, Sphere, Cylinder } from "@react-three/drei";

function ResponsiveCamera() {
  const { camera, size } = useThree();
  useEffect(() => {
    if (size.width < 768) {
      camera.position.set(4, 4, 4);
      if ("fov" in camera) camera.fov = 75;
    } else if (size.width < 1024) {
      camera.position.set(5, 5, 5);
      if ("fov" in camera) camera.fov = 60;
    } else {
      camera.position.set(6, 6, 6);
      if ("fov" in camera) camera.fov = 50;
    }
    camera.updateProjectionMatrix();
  }, [camera, size.width, size.height]);
  return null;
}

function Scene() {
  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.4} />
      {/* Point Light */}
      <pointLight position={[10, 10, 10]} intensity={1} />
      {/* Objects */}
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ef4444" />
      </Box>
      <Sphere args={[0.5, 32, 32]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" />
      </Sphere>
      <Cylinder args={[0.5, 0.5, 1, 32]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Cylinder>
      <Box args={[0.5, 0.5, 0.5]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>
      <Sphere args={[0.3, 16, 16]} position={[0, -2, 0]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Sphere>
      {/* Responsive Camera */}
      <ResponsiveCamera />
      {/* OrbitControls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxDistance={20}
        minDistance={2}
      />
    </>
  );
}

export default function ResponsiveViewport() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );}`;

// Component to display viewport information
function ViewportInfo() {
  const [viewportInfo, setViewportInfo] = useState({
    screenWidth: 0,
    screenHeight: 0,
    pixelRatio: 0,
  });

  useEffect(() => {
    const updateViewportInfo = () => {
      setViewportInfo({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        pixelRatio: window.devicePixelRatio,
      });
    };

    updateViewportInfo();
    window.addEventListener("resize", updateViewportInfo);

    return () => window.removeEventListener("resize", updateViewportInfo);
  }, []);

  return (
    <div className="absolute top-4 left-4 bg-background/80 text-foreground p-2 rounded text-xs border">
      <div>
        Screen: {viewportInfo.screenWidth} x {viewportInfo.screenHeight}
      </div>
      <div>Canvas: 100% x 100%</div>
      <div>Pixel Ratio: {viewportInfo.pixelRatio.toFixed(2)}</div>
    </div>
  );
}

function Scene() {
  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.4} />

      {/* Point Light */}
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Objects */}
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ef4444" />
      </Box>

      <Sphere args={[0.5, 32, 32]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" />
      </Sphere>

      <Cylinder args={[0.5, 0.5, 1, 32]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Cylinder>

      <Box args={[0.5, 0.5, 0.5]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>

      <Sphere args={[0.3, 16, 16]} position={[0, -2, 0]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Sphere>

      {/* Responsive Camera */}
      <ResponsiveCamera />

      {/* OrbitControls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxDistance={20}
        minDistance={2}
      />
    </>
  );
}

export default function ResponsiveViewport() {
  const concepts = [
    { badge: "useThree", description: "Get scene information" },
    { badge: "size", description: "Viewport dimensions" },
    { badge: "viewport", description: "Viewport coordinates" },
    { badge: "camera.position", description: "Camera position" },
    { badge: "camera.fov", description: "Camera field of view" },
    { badge: "updateProjectionMatrix", description: "Update camera" },
  ];
  const breakpoints = [
    {
      icon: <Smartphone className="w-4 h-4 text-primary" />,
      label: "Mobile",
      description: "< 768px\nPosition: [4, 4, 4], FOV: 75°",
    },
    {
      icon: <Tablet className="w-4 h-4 text-primary" />,
      label: "Tablet",
      description: "768px - 1024px\nPosition: [5, 5, 5], FOV: 60°",
    },
    {
      icon: <Monitor className="w-4 h-4 text-primary" />,
      label: "Desktop",
      description: "> 1024px\nPosition: [6, 6, 6], FOV: 50°",
    },
  ];
  const viewportInfo = [
    { label: "Screen Size", description: "Actual screen dimensions" },
    { label: "Viewport Size", description: "3D viewport dimensions" },
    { label: "Pixel Ratio", description: "Device pixel ratio" },
    { label: "FOV", description: "Field of View (viewing angle)" },
    { label: "Position", description: "Camera position [x, y, z]" },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Responsive className="w-8 h-8" />
          Lesson 5: Responsive Viewport
        </h1>
        <p className="text-muted-foreground">
          Automatically adjust camera based on screen size
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Responsive 3D Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Resize the window to see the camera automatically adjust
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ position: "relative" }}>
                <LessonCanvas>
                  <Scene />
                </LessonCanvas>
                <ViewportInfo />
              </div>
            </CardContent>
          </Card>

          {/* Code Display */}
          <CodeDisplay
            code={responsiveCameraCode}
            title="Responsive Camera Component"
            description="Camera component that adjusts based on screen size"
          />
        </div>

        {/* Concepts */}
        <div className="space-y-4">
          <FeatureListCard title="Concepts Learned" items={concepts} />
          <FeatureListCard title="Responsive Breakpoints" items={breakpoints} />
          <FeatureListCard title="Viewport Info" items={viewportInfo} />
        </div>
      </div>
    </div>
  );
}
