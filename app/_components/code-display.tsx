"use client";

import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Sun, Moon, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CodeDisplayProps {
  code: string;
  language?: string;
  title?: string;
  description?: string;
}

export function CodeDisplay({
  code,
  language = "tsx",
  title = "Source Code",
  description = "View the code for this lesson",
}: CodeDisplayProps) {
  const [codeTheme, setCodeTheme] = useState<"light" | "dark">("dark");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="relative">
      {/* Theme & Copy Buttons */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCodeTheme(codeTheme === "light" ? "dark" : "light")}
          title={codeTheme === "light" ? "Dark code theme" : "Light code theme"}
        >
          {codeTheme === "light" ? <Moon /> : <Sun />}
          <span className="sr-only">Toggle code theme</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleCopy}
          title="Copy code"
        >
          {copied ? <Check className="text-green-600" /> : <Copy />}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>

      {/* Code Display */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-foreground">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Highlight
              theme={codeTheme === "dark" ? themes.oneDark : themes.oneLight}
              code={code.trim()}
              language={language}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={`${className} p-4 rounded-lg overflow-x-auto text-sm`}
                  style={style}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      <span className="text-muted-foreground mr-4 select-none">
                        {String(i + 1).padStart(2, " ")}
                      </span>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
