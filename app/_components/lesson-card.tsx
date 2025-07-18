import Link from "next/link";
import { Play } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lesson } from "@/types";

interface LessonCardProps {
  lesson: Lesson;
  lessonNumber: number;
}

export function LessonCard({ lesson, lessonNumber }: LessonCardProps) {
  return (
    <Card className="hover:border-primary transition-colors">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <lesson.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-foreground">
                Lesson {lessonNumber}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {lesson.title}
              </CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">
            {lesson.duration}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 grow">
        <p className="text-muted-foreground text-sm">{lesson.description}</p>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">
            Concepts covered:
          </h4>
          <div className="flex flex-wrap gap-1">
            {lesson.concepts.map((concept) => (
              <Badge key={concept} variant="secondary" className="text-xs">
                {concept}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={lesson.path}>
            <Play className="w-4 h-4 mr-2" />
            Start Lesson
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
