import { Size } from "@/utils/constant/size";
import { Color } from "@/utils/constant/color";
import { VariantButton } from "@/utils/constant/variant";
import { ReactNode } from "react";

export default interface ButtonProps {
  color?: Color;
  variant?: VariantButton;
  size?: Size;
  label: string;
  onClick?: () => void;
  prefixIcon?: any;
  suffixIcon?: any;
  className?: string;
  style?: any;
  children?: ReactNode;
}
