
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <h1 className="text-2xl font-bold leading-none">
        sono
        <span className="text-sonoaac-accent font-extrabold">AA</span>
        <span className="text-sonoaac-DEFAULT">c</span>
      </h1>
    </div>
  );
};

export default Logo;
