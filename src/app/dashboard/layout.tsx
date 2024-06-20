"use client";

import Sidebar from "@/components/Dashboard/Sidebar";
function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Sidebar>{children}</Sidebar>
      </div>
    </>
  );
}

export default DashboardLayout;
