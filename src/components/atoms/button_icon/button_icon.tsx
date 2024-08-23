import styles from "./ButtonIcon.module.css";
import ButtonIconProps from "./button_icon.interface";
import clsx from "clsx";

/**
 * Primary UI component for user interaction
 */
const AButtonIcon = ({
  size = "medium",
  color = "primary",
  variant = "solid",
  className = "",
  ...props
}: ButtonIconProps) => {
  return (
    <button
      type="button"
      className={[
        className,
        styles["button-icon"],
        styles[
          clsx([
            {
              ["button-icon-" + variant + "--" + color]: variant === "outline",
              ["button-icon--" + "primary"]: variant === "solid",
            },
          ])
        ],
      ].join(" ")}
      {...props}>
      {<props.icon className={styles[`button-icon--${size}`]}></props.icon>}
    </button>
  );
};

export default AButtonIcon;
