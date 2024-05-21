import Image from "next/image";
import styles from "./index.module.css";

type ButtonProps = {
  id: string;
  label: string;
};

export type RadioCardProps = {
  label?: string;
  buttons?: ButtonProps[];
  icon?: any;
  iconHeight?: number;
  backgroundColor?: string;
  titleColor?: string;
  buttonLabelColor?: string;
  platform?: string;
};

const RadioCard = ({
  label,
  backgroundColor,
  titleColor,
  buttons,
  icon,
  buttonLabelColor,
  iconHeight,
  platform,
}: RadioCardProps) => {
  return (
    <div
      className={styles.radio_card}
      style={{ width: "100%", backgroundColor }}
    >
      <div className={styles.radio_card_content}>
        <h2 className={styles.radio_card_heading} style={{ color: titleColor }}>
          {label}{" "}
        </h2>
        <div className={styles.radio_card_inputs}>
          {buttons &&
            buttons.map((button) => (
              <div key={button.id} className={styles.radio_card_input}>
                <input type="radio" name={label} id={button.id} />
                <label
                  htmlFor={button.id}
                  className={styles.btn_label}
                  style={{ color: buttonLabelColor }}
                >
                  {button.label}
                </label>
              </div>
            ))}
        </div>
      </div>
      {icon && (
        <div className={styles.radio_card_icon}>
          <Image src={icon} alt="" height={70} />
        </div>
      )}
    </div>
  );
};

export default RadioCard;
