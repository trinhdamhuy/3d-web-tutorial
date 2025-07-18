"use client";

import * as React from "react";
import Link from "next/link";
import {
  Box as Cube,
  GraduationCap,
  Zap,
  Star,
  RotateCcw,
  Grid3X3,
  Download,
  TabletSmartphone as Responsive,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";

const levels = [
  {
    title: "Basic Level",
    href: "/basic",
    description: "Master fundamental 3D web development concepts",
    icon: GraduationCap,
    status: "available",
    lessons: 5,
  },
  {
    title: "Intermediate Level",
    href: "#",
    description: "Advanced techniques and complex interactions",
    icon: Zap,
    status: "available",
    lessons: 5,
  },
  {
    title: "Advanced Level",
    href: "#",
    description: "Expert-level projects and optimization",
    icon: Star,
    status: "coming-soon",
    lessons: 0,
  },
];

const basicLessons = [
  {
    title: "Hello Cube",
    href: "/basic/hello-cube",
    description:
      "Create a basic 3D scene with a box, lighting, and camera controls",
    icon: Cube,
  },
  {
    title: "Cube Animation",
    href: "/basic/cube-animation",
    description: "Animate a cube with rotation and hover effects",
    icon: RotateCcw,
  },
  {
    title: "Multi Object Scene",
    href: "/basic/multi-object",
    description: "Create a scene with multiple 3D objects arranged in space",
    icon: Grid3X3,
  },
  {
    title: "Load Model GLB",
    href: "/basic/load-model",
    description: "Load 3D models, add shadows and realistic lighting",
    icon: Download,
  },
  {
    title: "Responsive Viewport",
    href: "/basic/responsive-viewport",
    description: "Automatically adjust camera based on screen size",
    icon: Responsive,
  },
];

const intermediateLessons = [
  {
    title: "Ground & Shadows",
    href: "/intermediate/ground-shadows",
    description: "Add a ground plane and enable object shadows.",
  },
  {
    title: "Advanced Mouse Interaction",
    href: "/intermediate/mouse-interaction",
    description: "Hover to scale, click to change color or move.",
  },
  {
    title: "Floating 2D UI in 3D",
    href: "/intermediate/floating-ui",
    description: "Attach 2D HTML UI to 3D objects.",
  },
  {
    title: "Smooth Camera Animation",
    href: "/intermediate/camera-animation",
    description: "Tween camera movement when selecting objects.",
  },
  {
    title: "Load Multiple Models",
    href: "/intermediate/multi-models",
    description: "Load and display multiple models from JSON.",
  },
];

const advancedLessons = [
  {
    title: "Model Selector + UI",
    href: "/advanced/model-selector",
    description: "UI to select and load different 3D models dynamically.",
  },
  {
    title: "Model Viewer",
    href: "/advanced/model-viewer",
    description:
      "Interactive viewer with rotation, zoom, background, and lighting controls.",
  },
  {
    title: "Drag & Drop Features",
    href: "/advanced/drag-drop",
    description: "Drag models in the scene using the mouse.",
  },
  {
    title: "Basic Interior Design",
    href: "/advanced/interior-design",
    description:
      "Add walls, floor, and furniture models. Allow rotation and movement.",
  },
  {
    title: "Performance Optimization",
    href: "/advanced/performance-optimization",
    description:
      "Use instances, suspense, bounds, and lazy loading for optimal performance.",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/50 shadow-xs">
      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation Menu */}
        <div className="py-4 flex justify-between items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Learning Levels</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 text-lg font-medium">
                            3D Web Tutorial
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Master 3D web development with React Three Fiber and
                            Drei
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {levels.map((level) => (
                      <ListItem
                        key={level.title}
                        title={level.title}
                        href={level.href}
                        disabled={level.status === "coming-soon"}
                      >
                        {level.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Basic Level</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {basicLessons.map((lesson) => (
                      <ListItem
                        key={lesson.title}
                        title={lesson.title}
                        href={lesson.href}
                      >
                        {lesson.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Intermediate Level
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {intermediateLessons.map((lesson) => (
                      <ListItem
                        key={lesson.title}
                        title={lesson.title}
                        href={lesson.href}
                      >
                        {lesson.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Advanced Level</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {advancedLessons.map((lesson) => (
                      <ListItem
                        key={lesson.title}
                        title={lesson.title}
                        href={lesson.href}
                      >
                        {lesson.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  disabled = false,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  disabled?: boolean;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={disabled ? "#" : href}
          className={disabled ? "pointer-events-none opacity-50" : ""}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
