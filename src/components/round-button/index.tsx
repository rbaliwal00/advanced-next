import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  icon?: any;
  label?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  border?: string;
  onClick?: () => void;
  platform?: string;
};

const RoundButton = ({
  icon,
  label,
  borderRadius,
  backgroundColor,
  border,
  onClick,
  color,
  platform,
}: Props) => {
  return (
    <div
      className={styles.round_button}
      style={{ borderRadius, backgroundColor, color, border }}
      onClick={onClick}
    >
      {icon && (
        <div>
          <Image src={icon} alt="" width={100} height={50} />
        </div>
      )}
      {label && <div className={styles.round_button_label}>{label}</div>}
    </div>
  );
};

export default RoundButton;
