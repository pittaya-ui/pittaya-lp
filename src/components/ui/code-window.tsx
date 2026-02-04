"use client";

import { useEffect, useState, lazy, Suspense, memo, useCallback } from "react";
import { cn } from "@/lib/utils";

// Lazy load the heavy syntax highlighter
const SyntaxHighlighter = lazy(() =>
  import("react-syntax-highlighter").then((mod) => ({
    default: mod.Prism,
  })),
);

// Lazy load the theme
const getTheme = () =>
  import("react-syntax-highlighter/dist/esm/styles/prism").then(
    (mod) => mod.atomDark,
  );

interface CodeWindowProps {
  codeString: string;
  language?: string;
  className?: string;
}

interface CustomCodeTagProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/**
 * Code window component with typing animation
 * Optimized with lazy loading for syntax highlighter
 */
function CodeWindowComponent({
  codeString,
  language = "typescript",
  className,
}: CodeWindowProps) {
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [theme, setTheme] = useState<Record<string, React.CSSProperties>>({});

  // Load theme on mount
  useEffect(() => {
    getTheme().then(setTheme);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const startDelay = setTimeout(() => {
      const timer = setInterval(() => {
        setDisplayedCode(codeString.slice(0, index));
        index++;
        if (index > codeString.length) {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, 20);

      return () => clearInterval(timer);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, [codeString]);

  const CustomCodeTag = useCallback(
    ({ children, ...props }: CustomCodeTagProps) => (
      <code {...props}>
        {children}
        {isTyping && (
          <span className="inline-block w-2.5 h-5 ml-1 align-text-bottom bg-white/70 animate-pulse" />
        )}
      </code>
    ),
    [isTyping],
  );

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden shadow-2xl bg-[#1e1e1e] border border-white/10 w-full font-mono text-sm",
        "transform transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20",
        className,
      )}
    >
      {/* Window Header */}
      <div
        className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/5 select-none"
        aria-hidden="true"
      >
        <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors" />
        <div className="ml-2 text-xs text-white/30 font-sans">pittaya.ts</div>
      </div>

      {/* Code Content */}
      <div className="relative group min-h-[200px]">
        <Suspense
          fallback={
            <div className="p-6 text-white/50 animate-pulse">Loading...</div>
          }
        >
          <SyntaxHighlighter
            language={language}
            style={theme}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              fontSize: "0.9rem",
              lineHeight: "1.6",
              background: "transparent",
              minHeight: "200px",
            }}
            wrapLongLines
            CodeTag={CustomCodeTag}
          >
            {displayedCode}
          </SyntaxHighlighter>
        </Suspense>
      </div>
    </div>
  );
}

// Memoize to prevent unnecessary re-renders
export const CodeWindow = memo(CodeWindowComponent);
