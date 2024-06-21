"use client";
import styles from "./dashboard.module.css";
import ProgressCards from "./Progress-card";
import { useEffect, useState } from "react";
import Loader from "../Shared/Loader";
import { userStats } from "@/utilities/data";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/utilities/apiClient";
import UsersTable from "./Users-table";
import ReactPaginate from "react-paginate";
import { DashboardIcon } from "../Ui/MainDashboardIcons";
const Dashboard = () => {
  const [pagination, setPagination] = useState({
    pageCount: 0,
    itemOffset: 0,
    currentItems: [],
    itemsPerPage: 10,
  });

  const {
    isLoading,
    isError,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => apiClient.get("/users").then((res) => res.data), // specify the query function here
  });
  console.log(users);

  useEffect(() => {
    if (users) {
      const endOffset = pagination.itemOffset + pagination.itemsPerPage;
      setPagination((prev) => ({
        ...prev,
        currentItems: users.slice(prev.itemOffset, endOffset),
        pageCount: Math.ceil(users.length / prev.itemsPerPage),
      }));
    }
  }, [pagination.itemOffset, pagination.itemsPerPage, users]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * pagination.itemsPerPage) % users.length;
    setPagination((prev) => ({
      ...prev,
      itemOffset: newOffset,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.dashboard_top}>
        <span className={styles.header}>Users</span>

        <ProgressCards data={userStats} />
      </div>

      {/* Project Table */}
      <div>
        <UsersTable usersData={pagination.currentItems} />
        <div className={styles.users_paginate}>
          <div className={styles.users_page_info}>
            <p>
              Showing{" "}
              <span>
                {pagination.itemOffset + pagination.itemsPerPage}{" "}
                <DashboardIcon name="down-arrow" />
              </span>{" "}
              out of {users?.length}
            </p>
          </div>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pagination.pageCount}
            previousLabel="<"
            pageClassName={styles.page_item}
            pageLinkClassName={styles.page_link}
            previousClassName={styles.arrow}
            nextClassName={styles.arrow}
            breakLabel="..."
            containerClassName={styles.pagination}
            activeClassName={styles.active}
            // renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
