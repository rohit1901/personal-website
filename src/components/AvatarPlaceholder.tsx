import React from "react";
/**
// Basic usage (w-6 h-6 size)
<AvatarPlaceholder text={c.name} size="xs" />

// With custom colors
<AvatarPlaceholder
  text={c.name}
  size="sm"
  bgColor="bg-blue-500"
  textColor="text-white"
/>

// With additional custom classes
<AvatarPlaceholder
  text={c.name}
  size="md"
  className="shadow-lg border-2 border-white"
/>

 */

interface AvatarPlaceholderProps {
  text: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  bgColor?: string;
  textColor?: string;
}

const sizeClasses = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl",
};

const AvatarPlaceholder: React.FC<AvatarPlaceholderProps> = ({
  text,
  size = "md",
  className = "",
  bgColor = "bg-gray-800",
  textColor = "text-gray-100",
}) => {
  const firstLetter = text?.charAt(0).toUpperCase() || "?";

  return (
    <div
      className={[
        "rounded-full flex items-center justify-center font-medium",
        sizeClasses[size],
        bgColor,
        textColor,
        className,
      ].join(" ")}
    >
      {firstLetter}
    </div>
  );
};

export default AvatarPlaceholder;
