import clsx from "clsx";
import styles from "./Card.module.css";
import CardProps from "./card.interface";

/**
 * Primary UI component for user interaction
 */
const ACard = ({
  color = "primary",
  contentPosition = "center",
  ...props
}: CardProps) => {
  return (
    <div className={[styles["card"], "card-padding"].join(" ")}>
      <div
        className={clsx("text-black flex w-full", props.contentClassName, [
          {
            ["justify-start"]: contentPosition === "left",
            ["justify-center"]: contentPosition === "center",
            ["justify-end"]: contentPosition === "right",
          },
        ])}>
        {props.children}
      </div>
    </div>
  );
};

export default ACard;
