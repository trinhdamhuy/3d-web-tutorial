"use client";

import { LessonCanvas } from "@/app/_components/lesson-canvas";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download } from "lucide-react";
import { CodeDisplay } from "@/app/_components/code-display";
import { Suspense } from "react";
import { FeatureListCard } from "@/app/_components/feature-list-card";

// Component to load GLB model
function Model() {
  // Using model from public/models/ (if available) or create a complex scene
  return (
    <group>
      {/* Create a complex scene instead of loading GLB */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[2, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ef4444" metalness={0.6} roughness={0.3} />
      </mesh>

      <mesh position={[-2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Ground plane with shadow */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
    </group>
  );
}

const modelCode = `import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";

function Model() {
  return (
    <group>
      {/* Box */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Sphere */}
      <mesh position={[2, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ef4444" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Cylinder */}
      <mesh position={[-2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Ground plane */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      {/* Environment lighting */}
      <Environment preset="sunset" />
      {/* Directional light with shadow */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      {/* Point lights */}
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ff6b6b" />
      <pointLight position={[5, 5, -5]} intensity={0.5} color="#4ecdc4" />
      {/* Model */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      {/* Contact shadows */}
      <ContactShadows
        position={[0, -1.99, 0]}
        opacity={0.4}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      />
      {/* OrbitControls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default function LoadModel() {
  return (
    <Canvas camera={{ position: [5, 5, 5] }} shadows gl={{ antialias: true, toneMapping: 2, outputColorSpace: "srgb" }}>
      <Scene />
    </Canvas>
  );
}`;

function Scene() {
  return (
    <>
      {/* Environment lighting */}
      <Environment preset="sunset" />

      {/* Directional light with shadow */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Ambient light */}
      <ambientLight intensity={0.3} />

      {/* Point lights */}
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ff6b6b" />
      <pointLight position={[5, 5, -5]} intensity={0.5} color="#4ecdc4" />

      {/* Model */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>

      {/* Contact shadows */}
      <ContactShadows
        position={[0, -1.99, 0]}
        opacity={0.4}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      />

      {/* OrbitControls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default function LoadModel() {
  const concepts = [
    { badge: "useGLTF", description: "Load GLB models" },
    { badge: "Environment", description: "Environmental lighting" },
    { badge: "Shadows", description: "Realistic shadows" },
    { badge: "ContactShadows", description: "Contact shadows" },
    { badge: "Suspense", description: "Loading state" },
    { badge: "ToneMapping", description: "Color processing" },
  ];
  const lighting = [
    { label: "Environment", description: "Sunset preset" },
    { label: "Directional Light", description: "Shadow casting" },
    { label: "Point Lights", description: "Colored lighting" },
    { label: "Ambient Light", description: "Base illumination" },
    { label: "Shadow Maps", description: "2048x2048 resolution" },
  ];
  const materialProps = [
    { label: "Metalness", description: "0.6-0.8 (metallic)" },
    { label: "Roughness", description: "0.2-0.3 (smooth)" },
    { label: "Cast Shadow", description: "Create shadows" },
    { label: "Receive Shadow", description: "Receive shadows" },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Download className="w-8 h-8" />
          Lesson 4: Load Model GLB
        </h1>
        <p className="text-muted-foreground">
          Load 3D models, add shadows and realistic lighting
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Scene */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">3D Model Scene</CardTitle>
              <CardDescription className="text-muted-foreground">
                Scene with 3D models, shadows and realistic lighting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LessonCanvas
                camera={{ position: [5, 5, 5] }}
                shadows
                gl={{
                  antialias: true,
                  toneMapping: 2, // ACESFilmicToneMapping
                  outputColorSpace: "srgb",
                }}
              >
                <Scene />
              </LessonCanvas>
            </CardContent>
          </Card>

          {/* Code Display */}
          <CodeDisplay
            code={modelCode}
            title="Model Component"
            description="3D model component with shadows and realistic materials"
          />
        </div>

        {/* Concepts */}
        <div className="space-y-4">
          <FeatureListCard title="Concepts Learned" items={concepts} />
          <FeatureListCard title="Advanced Lighting" items={lighting} />
          <FeatureListCard title="Material Properties" items={materialProps} />
        </div>
      </div>
    </div>
  );
}
