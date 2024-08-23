import { Size } from "@/utils/constant/size";

export default interface TextfieldProps {
  label?: string;
  id?: string;
  placeholder?: string;
  color?: string;
  type?: string;
  value?: string;
  onChange: (e: any) => void;
  onFocus?: () => void;
  icon?: any;
  size?: Size;
}
