import clsx from "clsx";
import TextfieldProps from "./textfield.interface";
import styles from "./Textfield.module.css";

const ATextfield = ({
  color = "primary",
  type = "text",
  size = "medium",
  ...props
}: TextfieldProps) => {
  return (
    <div className="flex w-full flex-col">
      {props.label && (
        <label
          htmlFor={props.id}
          className={[
            styles["textfield-label"],
            styles["textfield-label--" + size],
          ].join(" ")}>
          {props.label}
        </label>
      )}
      <div className="flex">
        {props.icon && (
          <div>
            <props.icon
              className={[
                styles["textfield-icon"],
                styles["textfield-icon--" + size],
              ].join(" ")}
            />
          </div>
        )}
        <input
          type={type}
          id={props.id}
          value={props.value}
          className={[
            styles["textfield"],
            styles["textfield--" + size],
            styles[clsx(["textfield--" + color])],
            clsx([
              {
                ["rounded-l-xl"]: !props.icon,
              },
            ]),
          ].join(" ")}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default ATextfield;
