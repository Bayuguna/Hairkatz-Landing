import clsx from "clsx";
import BadgeProps from "./badge.interface";
import styles from "./Badge.module.css";

/**
 * Primary UI component for user interaction
 */
const ABadge = ({
  size = "medium",
  color = "primary",
  variant = "solid",
  ...props
}: BadgeProps) => {
  return (
    <div
      className={[
        styles["badge"],
        styles[`badge--${size}`],
        styles[
          clsx([
            {
              ["badge-" + variant + "--" + color]: variant === "outline",
              ["badge--" + color]: variant === "solid",
            },
          ])
        ],
      ].join(" ")}
      {...props}>
      {props.label}
    </div>
  );
};

export default ABadge;
