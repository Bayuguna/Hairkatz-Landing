import { Size } from "@/utils/constant/size";
import { Color } from "@/utils/constant/color";
import { VariantButton } from "@/utils/constant/variant";

export default interface ButtonIconProps {
  color?: Color;
  variant?: VariantButton;
  size?: Size;
  icon: any;
  onClick?: () => void;
  className?: string;
}
