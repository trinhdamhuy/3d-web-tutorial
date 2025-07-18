import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";

interface FeatureListItem {
  icon?: React.ReactNode;
  badge?: string;
  label?: string;
  description: string;
}

export function FeatureListCard({
  title,
  items,
}: {
  title: string;
  items: FeatureListItem[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            {item.icon && <span className="inline-flex">{item.icon}</span>}
            {item.badge && <Badge variant="secondary">{item.badge}</Badge>}
            {item.label && <strong>{item.label}:</strong>}
            <span>{item.description}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
