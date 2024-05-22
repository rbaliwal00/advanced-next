import Image from "next/image";
import Button from "@components/button";
import styles from "./index.module.css";

type Props = {
  logo?: any;
  description?: string;
  color?: string;
  buttonText?: string;
  backgroundColor?: string;
  borderRadius?: string;
  onUpload?: () => void;
  platform?: string;
};

const UploadCard = ({
  logo,
  description,
  backgroundColor,
  color,
  buttonText,
  borderRadius,
  onUpload,
  platform,
}: Props) => {
  return (
    <div
      className={styles.upload_card}
      style={{ backgroundColor, color, borderRadius }}
    >
      <Image src={logo} alt="" />
      <p className={styles.upload_card_description}>{description}</p>
      <Button text={buttonText} onClick={onUpload} />
    </div>
  );
};

export default UploadCard;
