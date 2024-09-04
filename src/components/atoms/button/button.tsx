import clsx from "clsx";
import styles from "./Button.module.css";
import ButtonProps from "./button.interface";

/**
 * Primary UI component for user interaction
 */
const AButton = ({
  size = "medium",
  color = "primary",
  variant = "solid",
  className = "",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      style={props.style}
      type="button"
      className={[
        className,
        styles["button"],
        styles[`button--${size}`],
        styles[
          clsx([
            {
              ["button-" + variant + "--" + color]: variant === "outline",
              ["button--" + color]: variant === "solid",
            },
          ])
        ],
      ].join(" ")}
      {...props}>
      {props.prefixIcon && (
        <props.prefixIcon
          className={clsx(
            "mr-2",
            styles["button-icon--" + size]
          )}></props.prefixIcon>
      )}
      {label}
      {props.suffixIcon && (
        <props.suffixIcon
          className={clsx(
            "ml-2",
            styles["button-icon--" + size]
          )}></props.suffixIcon>
      )}
      {props.children}
    </button>
  );
};

export default AButton;
