"use client";

import Sidebar from "@/components/Dashboard/Sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function DashboardLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Sidebar>{children}</Sidebar>
      </QueryClientProvider>
    </div>
  );
}

export default DashboardLayout;
