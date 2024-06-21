import styles from "./user-info-grid.module.css";

type UserInfoGridProps = {
  data: any;
};

const UserInfoGrid: React.FC<UserInfoGridProps> = (data: any) => {
  console.log(data);
  data = data?.data;
  return (
    <>
      <div className={styles.container}>
        <span className={styles.header}>Personal Information</span>

        <div className={`${styles.content} ${styles[`columns-${5}`]}`}>
          <div className={styles.item}>
            <span className={styles.label}>Full Name</span>{" "}
            <span className={styles.value}>
              {data?.profile?.firstName} {data?.profile?.lastName}
            </span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Phone Number</span>{" "}
            <span className={styles.value}>{data?.phoneNumber}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Email Address</span>{" "}
            <span className={styles.value}>{data?.email}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>BVN</span>{" "}
            <span className={styles.value}>{data?.profile?.bvn}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Gender</span>{" "}
            <span className={styles.value}>{data?.profile?.gender}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Marital Status</span>{" "}
            <span className={styles.value}>Single</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Children</span>{" "}
            <span className={styles.value}>None</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Type of Residence</span>{" "}
            <span className={styles.value}>
              Parent’s Apartment {data?.personal?.typeOfResidence}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <span className={styles.header}>Education and Employment</span>
        <div className={`${styles.content} ${styles[`columns-${4}`]}`}>
          {/* {data?.education.map((item, index) => ( */}
          <div className={styles.item}>
            <span className={styles.label}>Level of Education</span>{" "}
            <span className={styles.value}>{data?.education?.level}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Employment Status</span>{" "}
            <span className={styles.value}>
              {data?.education?.employmentStatus}
            </span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Sector of Employment</span>{" "}
            <span className={styles.value}>{data?.education?.sector}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Duration of Employment</span>{" "}
            <span className={styles.value}>{data?.education?.duration}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Office Email</span>{" "}
            <span className={styles.value}>{data?.education?.officeEmail}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Monthly Income</span>{" "}
            <span className={styles.value}>
              {data?.education?.monthlyIncome}
            </span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Loan Repayment</span>{" "}
            <span className={styles.value}>
              {data?.education?.loanRepayment}
            </span>
          </div>
        </div>

        {/* ))} */}
      </div>
      <div className={styles.container}>
        <span className={styles.header}>Socials</span>

        <div className={`${styles.content} ${styles[`columns-${5}`]}`}>
          <div className={styles.item}>
            <span className={styles.label}>Twitter</span>{" "}
            <span className={styles.value}>{data?.socials?.twitter}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Facebook</span>{" "}
            <span className={styles.value}>{data?.socials?.facebook}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Instagram</span>{" "}
            <span className={styles.value}>{data?.socials?.instagram}</span>
          </div>
        </div>

        <div className={styles.container}>
          <span className={styles.header}>Guarantor</span>
          <div className={`${styles.content} ${styles[`columns-${5}`]}`}>
            <div className={styles.item}>
              <span className={styles.label}>Full Name</span>{" "}
              <span className={styles.value}>
                {data?.guarantor?.firstName} {data?.guarantor?.lastName}
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>Phone Number</span>{" "}
              <span className={styles.value}>
                {data?.guarantor?.phoneNumber}
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>Email Address</span>{" "}
              <span className={styles.value}>debby@gmail.com</span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>Relationship</span>{" "}
              <span className={styles.value}>Sister</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoGrid;
