"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Html } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Monitor } from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
import { FeatureListCard } from "@/app/_components/feature-list-card";

const floatingUICode = `function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" />
        <Html position={[0, 1.2, 0]} center>
          <div style={{
            background: 'rgba(255,255,255,0.9)',
            padding: '4px 12px',
            borderRadius: '8px',
            fontWeight: 'bold',
            color: '#1e293b',
            fontSize: '14px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            Box Object
          </div>
        </Html>
      </Box>
      <OrbitControls />
    </>
  );
}`;

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" />
        <Html position={[0, 1.2, 0]} center>
          <div
            style={{
              background: "rgba(255,255,255,0.9)",
              padding: "4px 12px",
              borderRadius: "8px",
              fontWeight: "bold",
              color: "#1e293b",
              fontSize: "14px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            Box Object
          </div>
        </Html>
      </Box>
      <OrbitControls />
    </>
  );
}

export default function FloatingUI() {
  const uiIntegration = [
    { badge: "Html", description: "Render 2D UI in 3D scene" },
    { badge: "React DOM", description: "Use React components in 3D" },
  ];

  const labelPlacement = [
    { badge: "position", description: "Place label above object" },
    { badge: "center", description: "Center the label horizontally" },
    { badge: "Box", description: "3D object with label" },
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
          <path d="M3 12h18" />
        </svg>
      ),
      description: "Right click + Drag: Pan",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Monitor className="w-8 h-8" />
          Lesson 8: Floating 2D UI in 3D
        </h1>
        <p className="text-muted-foreground">
          Attach 2D HTML UI to 3D objects and show popups with object names
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Floating UI Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                The label above the box is rendered as HTML in 3D space
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 w-full rounded-lg overflow-hidden">
                <Canvas camera={{ position: [4, 4, 4] }}>
                  <Scene />
                </Canvas>
              </div>
            </CardContent>
          </Card>
          {/* Code Display */}
          <CodeDisplay
            code={floatingUICode}
            title="Floating UI Scene Code"
            description="Box with floating 2D HTML label using drei Html"
          />
        </div>
        {/* Sidebar Cards */}
        <div className="space-y-4">
          <FeatureListCard title="UI Integration" items={uiIntegration} />
          <FeatureListCard title="Label Placement" items={labelPlacement} />
          <FeatureListCard title="Controls" items={controls} />
        </div>
      </div>
    </div>
  );
}
