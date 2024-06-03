import styles from "./index.module.css";

import Image from "next/image";
import Link from "next/link";

export type Stats = {
  title: string;
  count: number;
};

export type DashcardProps = {
  id?: string;
  lastUpdated?: Date;
  banner?: any;
  progress?: string;
  title: string;
  stat1?: Stats;
  stat2?: Stats;
  dashcardWidth?: string;
  height?: string;
  link?: string;
  platform?: string;
};

const formatDate = (date: Date): string => {
  if (date) {
    let formatDate = new Date(date);
    const day = formatDate.getUTCDate();
    const month = formatDate.toLocaleString("default", { month: "short" });
    const year = formatDate.getFullYear();

    return day + "/" + month + "/" + year;
  }
  return "";
};

const Dashcard = ({
  lastUpdated,
  link,
  dashcardWidth,
  height,
  banner,
  progress,
  title,
  stat1,
  stat2,
  platform,
}: DashcardProps) => {
  return (
    <Link
      href={link ? link : ""}
      className={styles.dash_card}
      style={{
        width: `${dashcardWidth ? dashcardWidth : "200px"}`,
        height: `${height ? height : "150px"}`,
      }}
    >
      <div>
        {lastUpdated && (
          <div className={styles.dash_card_last_updated}>
            <div>Last Updated</div>
            <div className={styles.dash_card_last_updated_date}>
              {formatDate(lastUpdated)}
            </div>
          </div>
        )}
        <Image
          src={banner}
          className={styles.dash_card_image}
          alt=""
          height={72}
        />
        {stat1 && stat2 ? (
          <div className={styles.stats}>
            <div style={{ marginTop: "15px" }}>
              <span className={styles.count}>{stat1.count} </span>
              <span>{stat1.title}</span>
            </div>
            <div style={{ marginTop: "-10px" }}>
              <span className={styles.count}>{stat2.count} </span>
              <span>{stat2.title}</span>
            </div>
          </div>
        ) : (
          <div className={styles.stats}>
            <span className={`${styles.count} ${styles.count1}`}>
              {stat1?.count}
            </span>
            <span> {stat1?.title}</span>
          </div>
        )}
        <div className={styles.dash_card_content}>
          {progress && (
            <>
              {" "}
              <div className={styles.dash_card_progress_percentage}>
                {progress}%
              </div>
              <div className={styles.dash_card_progress}>
                <div
                  className={styles.dash_card_progress_line}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </>
          )}
          <div className={styles.dash_card_title}>{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default Dashcard;
