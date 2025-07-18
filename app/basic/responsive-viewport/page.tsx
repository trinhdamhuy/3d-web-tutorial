"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Box, Sphere, Cylinder } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Monitor,
  Tablet,
  TabletSmartphone as Responsive,
} from "lucide-react";
import { useEffect } from "react";

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

// Component to display viewport information
function ViewportInfo() {
  const { size, viewport } = useThree();

  return (
    <div className="absolute top-4 left-4 bg-background/80 text-foreground p-2 rounded text-xs border">
      <div>
        Screen: {size.width} x {size.height}
      </div>
      <div>
        Viewport: {viewport.width.toFixed(1)} x {viewport.height.toFixed(1)}
      </div>
      <div>Pixel Ratio: {window.devicePixelRatio.toFixed(2)}</div>
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
  return (
    <div className="p-4">
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
                <div className="h-96 w-full rounded-lg overflow-hidden relative">
                  <Canvas>
                    <Scene />
                    <ViewportInfo />
                  </Canvas>
                </div>
              </CardContent>
            </Card>
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
                  <Badge variant="secondary">useThree</Badge>
                  <span className="text-muted-foreground text-sm">
                    Get scene information
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">size</Badge>
                  <span className="text-muted-foreground text-sm">
                    Viewport dimensions
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">viewport</Badge>
                  <span className="text-muted-foreground text-sm">
                    Viewport coordinates
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">camera.position</Badge>
                  <span className="text-muted-foreground text-sm">
                    Camera position
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">camera.fov</Badge>
                  <span className="text-muted-foreground text-sm">
                    Camera field of view
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">updateProjectionMatrix</Badge>
                  <span className="text-muted-foreground text-sm">
                    Update camera
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  Responsive Breakpoints
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <div className="text-muted-foreground text-sm">
                    <strong>Mobile:</strong> &lt; 768px
                    <br />
                    <span className="text-xs">
                      Position: [4, 4, 4], FOV: 75°
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Tablet className="w-4 h-4 text-primary" />
                  <div className="text-muted-foreground text-sm">
                    <strong>Tablet:</strong> 768px - 1024px
                    <br />
                    <span className="text-xs">
                      Position: [5, 5, 5], FOV: 60°
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-primary" />
                  <div className="text-muted-foreground text-sm">
                    <strong>Desktop:</strong> &gt; 1024px
                    <br />
                    <span className="text-xs">
                      Position: [6, 6, 6], FOV: 50°
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Viewport Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-muted-foreground text-sm">
                  <strong>Screen Size:</strong> Actual screen dimensions
                </div>
                <div className="text-muted-foreground text-sm">
                  <strong>Viewport Size:</strong> 3D viewport dimensions
                </div>
                <div className="text-muted-foreground text-sm">
                  <strong>Pixel Ratio:</strong> Device pixel ratio
                </div>
                <div className="text-muted-foreground text-sm">
                  <strong>FOV:</strong> Field of View (viewing angle)
                </div>
                <div className="text-muted-foreground text-sm">
                  <strong>Position:</strong> Camera position [x, y, z]
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
