"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";

interface CodeWindowProps {
  codeString: string;
  language?: string;
  className?: string;
}

export function CodeWindow({
  codeString,
  language = "typescript",
  className,
}: CodeWindowProps) {
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    // Delay start slightly to allow GSAP entrance to finish or start
    const startDelay = setTimeout(() => {
      const timer = setInterval(() => {
        setDisplayedCode(codeString.slice(0, index));
        index++;
        if (index > codeString.length) {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, 50); // Typing speed in ms

      return () => clearInterval(timer);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, [codeString]);

  // Handle cursor blinking by appending it to the code or just rendering close by
  // Note: SyntaxHighlighter might treat "|" as an operator, which is fine, or we can just omit it inside the highlighter to avoid token issues.

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden shadow-2xl bg-[#1e1e1e] border border-white/10 w-full font-mono text-sm",
        "transform transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20",
        className,
      )}
    >
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/5 select-none">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors" />
        <div className="ml-2 text-xs text-white/30 font-sans">pittaya.ts</div>
      </div>

      {/* Code Content */}
      <div className="relative group">
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            fontSize: "0.9rem",
            lineHeight: "1.6",
            background: "transparent",
            minHeight: "200px", // Prevent layout shift
          }}
          wrapLongLines={true}
        >
          {displayedCode}
        </SyntaxHighlighter>

        {/* Blinking Cursor overlay */}
        {isTyping && (
          <div className="absolute inset-0 pointer-events-none">
            {/* This is a bit tricky to position exactly at the end of text without monospace calc. 
                 Simple CSS hack for cursor: 
                 We won't try to position a cursor exactly at the text end because multiline wrapping makes it hard.
                 Instead, we rely on the visual effect of text appearing.
             */}
          </div>
        )}
      </div>
    </div>
  );
}
