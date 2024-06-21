"use client";
import UserInfoGrid from "@/components/Dashboard/User-Info-Grid";
import { DashboardIcon } from "@/components/Ui/MainDashboardIcons";
import styles from "@/styles/SingleUser.module.css";
import { apiClient } from "@/utilities/apiClient";
import { USER_DATA, USER_INFO_CATEGORIES_MENU } from "@/utilities/data";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const SingleUser = ({ id }: { id: string }) => {
  const { isLoading, isError, isFetching, data } = useQuery(
    {
      queryKey: ["users", id],
      queryFn: () =>
        apiClient.get(`/users/${id}`).then((res) => {
          return res?.data;
        }),
    }
    // {
    //   enabled: !localStorage.hasOwnProperty(`user_detail_${id}`),
    //   onSuccess: (data) => {
    //     localStorage.setItem(`user_detail_${id}`, JSON.stringify(data));
    //   },
    // }
  );
  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.top_wrapper}>
        <Link href="/dashboard" className={styles.back}>
          <DashboardIcon name="back-arrow" />
          <span>Back to users</span>
        </Link>

        <div className={styles.header_content}>
          <span className={styles.header}>User Details</span>

          <div className={styles.header_content_buttons}>
            <button className={styles.blacklist}>Blacklist</button>
            <button className={styles.activate}>Activate User</button>
          </div>
        </div>

        <div className={styles.info_box}>
          <div className={styles.info_box_top}>
            <div className={styles.info_box_item}>
              <img
                className={styles.avatar}
                src={data?.profile.avatar}
                alt={data?.userName}
              />
              <div>
                <span className={styles.bold}>{data?.userName}</span>
                <span className={styles.code}>LSQFf587g90</span>
              </div>
            </div>

            <div className={styles.info_box_item}>
              <span className={styles.user_tier_title}>User&apos;s Tier</span>
              <div>
                <DashboardIcon name="star-filled" />
                <DashboardIcon name="star-outline" />
                <DashboardIcon name="star-outline" />
              </div>
            </div>

            <div className={styles.info_box_item}>
              <span className={styles.bold}>₦{data?.accountBalance}</span>
              <span className={styles.bank_details}>
                9912345678/Providus Bank{" "}
              </span>
            </div>
          </div>

          <div className={styles.info_box_bottom}>
            {USER_INFO_CATEGORIES_MENU.map((item, index) => (
              <span
                key={index}
                className={`${styles.category} ${styles.active_category}`}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom_wrapper}>
        {/* {USER_DATA.map((item, index) => (
          <div key={index} className={styles.user_item_wrapper}> */}
        <UserInfoGrid
          data={data}
          // items={item.items}
          // itemsPerRow={item.max_items}
          // header={item.header}
        />
        {/* </div>
        ))} */}
      </div>
    </div>
  );
};

export default SingleUser;
