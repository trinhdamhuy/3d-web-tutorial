"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
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

const modelViewerCode = `import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

function ModelViewer() {
  const [bg, setBg] = useState("#f3f4f6");
  const [light, setLight] = useState(1);
  return (
    <>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input type="color" value={bg} onChange={e => setBg(e.target.value)} />
        <input type="range" min={0.1} max={2} step={0.01} value={light} onChange={e => setLight(Number(e.target.value))} />
        <span>Light: {light.toFixed(2)}</span>
      </div>
      <Canvas style={{ background: bg }} camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 10, 5]} intensity={light} />
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial color="#3b82f6" />
        </Sphere>
        <OrbitControls />
      </Canvas>
    </>
  );
}`;

function ModelViewer() {
  const [bg, setBg] = useState("#f3f4f6");
  const [light, setLight] = useState(1);
  return (
    <>
      <div className="flex gap-2 mb-4 items-center">
        <label className="text-sm">Background:</label>
        <input
          type="color"
          value={bg}
          onChange={(e) => setBg(e.target.value)}
          className="w-8 h-8 p-0 border-none bg-transparent"
        />
        <label className="text-sm ml-4">Light:</label>
        <input
          type="range"
          min={0.1}
          max={2}
          step={0.01}
          value={light}
          onChange={(e) => setLight(Number(e.target.value))}
          className="w-32"
        />
        <span className="text-xs">{light.toFixed(2)}</span>
      </div>
      <div className="h-96 w-full rounded-lg overflow-hidden">
        <Canvas style={{ background: bg }} camera={{ position: [3, 3, 3] }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 10, 5]} intensity={light} />
          <Sphere args={[1, 32, 32]}>
            <meshStandardMaterial color="#3b82f6" />
          </Sphere>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default function ModelViewerLesson() {
  const viewerFeatures = [
    { badge: "Rotate", description: "Rotate model with mouse" },
    { badge: "Zoom", description: "Zoom in/out with scroll" },
    { badge: "Lighting", description: "Customizable lighting" },
    { badge: "Background", description: "Change scene background" },
  ];
  const uiFeatures = [
    { badge: "UI Controls", description: "Buttons/sliders for viewer options" },
    { badge: "Sketchfab-like", description: "Mini product viewer interface" },
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
      description: "Click + Drag: Rotate model",
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
          <Monitor className="w-8 h-8" />
          Lesson 12: Model Viewer
        </h1>
        <p className="text-muted-foreground">
          Interactive viewer with rotation, zoom, background, and lighting
          controls
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                Model Viewer Scene
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Rotate, zoom, and customize the model viewer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ModelViewer />
            </CardContent>
          </Card>
          {/* Code Display */}
          <CodeDisplay
            code={modelViewerCode}
            title="Model Viewer Code"
            description="Viewer UI and controls"
          />
        </div>
        {/* Sidebar Cards */}
        <div className="space-y-4">
          <FeatureListCard title="Viewer Features" items={viewerFeatures} />
          <FeatureListCard title="UI Features" items={uiFeatures} />
          <FeatureListCard title="Controls" items={controls} />
        </div>
      </div>
    </div>
  );
}
