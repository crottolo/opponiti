import { cn } from "@/lib/utils";
import React from "react";

// Card con shadow sottile per statistiche e info
export const ShadowCard = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn("relative group", containerClassName)}>
      <div className={cn(
        "rounded-2xl p-6 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50",
        "shadow-lg shadow-neutral-900/20 hover:shadow-xl hover:shadow-neutral-900/30 transition-all duration-300",
        "hover:border-neutral-700/50 h-full",
        className
      )}>
        {children}
      </div>
    </div>
  );
};

// Card con gradiente colorato sobrio per features importanti  
export const GradientCard = ({
  children,
  className,
  containerClassName,
  variant = "emerald"
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: "emerald" | "blue" | "purple" | "red";
}) => {
  const gradientVariants = {
    emerald: "from-emerald-500/10 via-transparent to-teal-500/10",
    blue: "from-blue-500/10 via-transparent to-cyan-500/10", 
    purple: "from-purple-500/10 via-transparent to-violet-500/10",
    red: "from-red-500/10 via-transparent to-rose-500/10"
  };

  const borderVariants = {
    emerald: "border-emerald-500/20 hover:border-emerald-400/30",
    blue: "border-blue-500/20 hover:border-blue-400/30",
    purple: "border-purple-500/20 hover:border-purple-400/30", 
    red: "border-red-500/20 hover:border-red-400/30"
  };

  return (
    <div className={cn("relative group", containerClassName)}>
      <div className={cn(
        "rounded-2xl p-6 bg-neutral-900/50 backdrop-blur-sm border",
        "shadow-lg shadow-neutral-900/20 hover:shadow-xl transition-all duration-300",
        "hover:bg-neutral-900/60 h-full",
        `bg-gradient-to-br ${gradientVariants[variant]}`,
        borderVariants[variant],
        className
      )}>
        {children}
      </div>
    </div>
  );
};