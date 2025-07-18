import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
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
import { LearningLevel } from "@/types";

export function LearningLevelCard({
  learningLevel,
}: {
  learningLevel: LearningLevel;
}) {
  return (
    <Card
      className={`hover:border-primary transition-colors ${
        learningLevel.status === "coming-soon" ? "opacity-50" : ""
      }`}
    >
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <learningLevel.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-foreground">
              {learningLevel.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {learningLevel.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 grow">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">Lessons</span>
          <Badge variant="secondary">{learningLevel.lessons}</Badge>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">Key concepts:</h4>
          <div className="flex flex-wrap gap-1">
            {learningLevel.concepts.map((concept) => (
              <Badge key={concept} variant="secondary" className="text-xs">
                {concept}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {learningLevel.status === "available" ? (
          <Button className="w-full" asChild>
            <Link href={learningLevel.path}>
              <Play className="w-4 h-4 mr-2" />
              Start Learning
            </Link>
          </Button>
        ) : (
          <Button className="w-full" variant="outline" disabled>
            <ArrowRight className="w-4 h-4 mr-2" />
            Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
