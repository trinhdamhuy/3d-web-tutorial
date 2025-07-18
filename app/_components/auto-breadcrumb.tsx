"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

// Map path segments to display names
const pathNameMap: Record<string, string> = {
  basic: "Basic Level",
  "hello-cube": "Hello Cube",
  "cube-animation": "Cube Animation",
  "multi-object": "Multi Object Scene",
  "load-model": "Load Model GLB",
  "responsive-viewport": "Responsive Viewport",
  // Intermediate section
  intermediate: "Intermediate Level",
  "ground-shadows": "Ground & Shadows",
  "mouse-interaction": "Advanced Mouse Interaction",
  "floating-ui": "Floating 2D UI in 3D",
  "camera-animation": "Smooth Camera Animation",
  "multi-models": "Load Multiple Models",
  // Advanced section
  advanced: "Advanced Level",
  "model-selector": "Model Selector + UI",
  "model-viewer": "Model Viewer",
  "drag-drop": "Drag & Drop Features",
  "interior-design": "Basic Interior Design",
  "performance-optimization": "Performance Optimization",
};

export function AutoBreadcrumb() {
  const pathname = usePathname();

  // Don't show breadcrumb on home page
  if (pathname === "/") {
    return null;
  }

  // Split pathname into segments
  const segments = pathname.split("/").filter(Boolean);

  // Build breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      const label = pathNameMap[segment] || segment;
      const isLast = index === segments.length - 1;

      return {
        label,
        href: isLast ? undefined : href,
      };
    }),
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
