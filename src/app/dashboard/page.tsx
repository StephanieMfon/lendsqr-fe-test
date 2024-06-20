"use client";

// import Dashboard from "@/components/dashboard/dashboard";
import React from "react";
import dynamic from "next/dynamic";
import Dashboard from "@/components/Dashboard";
// import Loader from "@/components/loader";

// const DynamicDashboard = dynamic(() => import("@/components/Dashboard"), {
//   ssr: false,
//   loading: () => <Loader />,
// });
const DashboardPage = () => <Dashboard />;

export default DashboardPage;
