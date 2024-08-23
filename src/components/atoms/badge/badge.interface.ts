import { Color } from "@/utils/constant/color";
import { Size } from "@/utils/constant/size";
import { VariantButton } from "@/utils/constant/variant";

export default interface BadgeProps {
  color?: Color;
  variant?: VariantButton;
  size?: Size;
  label: string;
  onClick?: () => void;
}
