"use client";
import React from "react";
import styles from "./sidenav.module.css";
import { SIDE_NAV_DATA } from "@/utilities/data";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { Icon } from "@/components/Ui/Icon";
import NavBar from "@/components/Navbar";
import { SidebarIcon } from "@/components/Ui/SidebarIcons";

// export const handleLogout = (router: any) => {
//   // torage.removeItem("access_token");
//   router.push(ROUTES.LOGIN);
// };

function Sidebar({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  let active_page = useSelectedLayoutSegment();
  return (
    <div className={styles.navigation}>
      <header className={styles.header_1}>
        <NavBar />
      </header>

      <div className={styles.left_sidebar}>
        <div className={`${styles.sub_item} ${styles.highlight}`}>
          <SidebarIcon name="karma" />
          {/* TODO: Add the correct icon to the sidebar */}
          <span className={styles.sub_item_title}>Switch Organization</span>
          <SidebarIcon name="highlight-dropdown" />
        </div>

        <div className={styles.sub_item}>
          <SidebarIcon name="karma" />
          <span className={styles.sub_item_title}>Dashboard</span>
        </div>
        {SIDE_NAV_DATA.map((item, index) => (
          <div className={styles.menu_item} key={index}>
            <span className={styles.subject}>{item.subject}</span>
            <div className={styles.sub_items}>
              {item.subitems.map((subitem, subindex) => (
                <div className={styles.sub_item} key={subindex}>
                  <SidebarIcon name="users" />
                  {/* TODO: Add the correct icon to the sidebar */}
                  <span className={styles.sub_item_title}>
                    {subitem.subitem}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <main className={styles.main_content}>
        <div>{children}</div>
      </main>
    </div>
  );
}
export default Sidebar;
