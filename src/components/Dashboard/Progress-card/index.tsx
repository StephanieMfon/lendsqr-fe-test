"use client";
import { DashboardIcon } from "@/components/Ui/MainDashboardIcons";
import styles from "./progress-card.module.css";

const ProgressCards = ({ data }: any) => {
  return (
    <div className={styles.user_stats}>
      {data?.map(({ title, count, icon }: any, index: number) => {
        return (
          <div className={`${styles.user_stat_card} `} key={index}>
            <DashboardIcon name={icon} />
            <span className={styles.title}>{title}</span>
            <span className={styles.count}>{count}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressCards;
