import styles from "./dashboard.module.css";
import ProgressCards from "./Progress-card";
import { useState } from "react";
import Loader from "../Shared/Loader";
import ProjectsTable from "./Projects-table";
import { userStats } from "@/utilities/data";

// export const getTableData = async () => {
//   const [summaryResponse, tableResponse] = await Promise.all([
//     ProjectsRepository.countByStatus(),
//     ProjectsRepository.getProjects(),
//   ]);

//   return { summaryResponse, tableResponse };
// };
const Dashboard = () => {
  const [tableData, setTableData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  // const getComponentData = async () => {
  //   setLoading(true);
  //   const { summaryResponse, tableResponse } = await getTableData();
  //   setSummaryData(summaryResponse?.data?.data?.projects);
  //   setTableData(tableResponse?.data?.data.projects);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getComponentData();
  // }, []);
  // TODO: Remember to delete all the svgs in dashboard public folder
  if (loading) return <Loader />;
  return (
    <div className={styles.container}>
      <div className={styles.dashboard_top}>
        <span className={styles.header}>Users</span>

        <ProgressCards data={userStats} />
      </div>

      {/* Project Table */}
      <ProjectsTable projectsData={tableData} />
    </div>
  );
};

export default Dashboard;
