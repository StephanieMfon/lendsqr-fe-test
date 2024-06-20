import React from "react";
import styles from "./table.module.css";
import { DashboardIcon } from "@/components/Ui/MainDashboardIcons";
import { USERS } from "@/utilities/data";
// import { Stack } from "@mui/material";
// import { downloadProjectsCSV } from "@/repositories/ProjectsRepository";
// import { dateFormatter } from "@/utilities/dateConfig";
// import { statusFormatter } from "@/utilities/routes";

const ProjectsTable = ({ projectsData }: any) => {
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
          {USERS?.map(
            (
              {
                organization,
                username,
                email,
                phoneNumber,
                dateJoined,
                status,
              }: any,
              id: number
            ) => {
              return (
                <tr key={id}>
                  <td>{organization}</td>

                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{phoneNumber}</td>
                  <td>{dateJoined}</td>
                  <td>{status}</td>
                  {/* <td>
                    <button
                      className={`${styles.button} ${
                        status === "not-started" && styles.completed_status
                      } ${status === "on-hold" && styles.pending_status} ${
                        status === "blocked" && styles.blocked
                      }`}
                    >
                      {statusFormatter(status)} green
                    </button>
                  </td> */}
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

export default ProjectsTable;
