import { LucideIcon } from "lucide-react";

export interface LearningLevel {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  status: "available" | "coming-soon";
  lessons: number;
  concepts: string[];
  path: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  concepts: string[];
  path: string;
  duration: string;
}
