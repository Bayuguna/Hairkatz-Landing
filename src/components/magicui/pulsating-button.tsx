"use client";

import React from "react";

import { cn } from "@/lib/utils";
import ButtonProps from "../atoms/button/button.interface";
import AButton from "../atoms/button/button";

interface PulsatingButtonProps extends ButtonProps {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#FF1818",
  duration = "1.5s",
  ...props
}: PulsatingButtonProps) {
  return (
    <AButton
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
      label={props.label}>
      <div className="absolute top-1/2 left-1/2 size-full rounded-full bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2 -z-30" />
    </AButton>
  );
}
