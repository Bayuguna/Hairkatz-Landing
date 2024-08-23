import { Color } from "@/utils/constant/color";
import { Size } from "@/utils/constant/size";

export default interface SearchProps {
  value?: string;
  onSubmit: (search: string) => void;
  size?: Size;
  color?: Color;
}
