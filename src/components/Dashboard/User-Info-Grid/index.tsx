import styles from "./user-info-grid.module.css";

type UserInfoGridProps = {
  items: Array<{ label: string; value: string }>;
  itemsPerRow: number;
  header: string;
};

const UserInfoGrid: React.FC<UserInfoGridProps> = ({
  items,
  itemsPerRow,
  header,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.header}>{header}</span>

      <div className={`${styles.content} ${styles[`columns-${itemsPerRow}`]}`}>
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            <span className={styles.label}>{item.label}</span>{" "}
            <span className={styles.value}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfoGrid;
