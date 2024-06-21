import React from "react";
import styles from "./user-table.module.css";
import { DashboardIcon } from "@/components/Ui/MainDashboardIcons";
import { formatDate } from "@/utilities/formatDate";
import { useRouter } from "next/navigation";

const UsersTable = ({ usersData }: any) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>
              <div>
                <span>Organization</span> <DashboardIcon name="filter" />
              </div>
            </th>
            <th>
              <div>
                <span>Username</span> <DashboardIcon name="filter" />
              </div>
            </th>
            <th>
              <div>
                <span>Email</span> <DashboardIcon name="filter" />
              </div>
            </th>
            <th>
              <div>
                <span>Phone number</span> <DashboardIcon name="filter" />
              </div>
            </th>
            <th>
              <div>
                <span>Date joined</span> <DashboardIcon name="filter" />
              </div>
            </th>
            <th>
              <span>Status</span> <DashboardIcon name="filter" />
            </th>
          </tr>
        </thead>
        <tbody>
          {usersData?.map(
            ({ orgName, userName, email, phoneNumber, createdAt, id }: any) => {
              return (
                <tr
                  key={id}
                  onClick={() => router.push(`/dashboard/user/${id}`)}
                >
                  <td>{orgName}</td>

                  <td>{userName}</td>
                  <td>{email}</td>
                  <td>{phoneNumber}</td>
                  <td>{formatDate(createdAt)}</td>
                  <td>
                    <span>Active</span>
                  </td>
                  <td>
                    <DashboardIcon name="vertical-dots" />
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
