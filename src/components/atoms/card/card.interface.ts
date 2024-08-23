import { Color } from "@/utils/constant/color";

export default interface CardProps {
  color?: Color;
  onClick?: () => void;
  contentPosition?: "left" | "center" | "right";
  contentClassName?: string;
  children: React.ReactNode;
}
