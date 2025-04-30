
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import StaffDashboard from "@/components/dashboard/StaffDashboard";

const StaffDashboardPage = () => {
  return (
    <MainLayout userType="staff">
      <StaffDashboard />
    </MainLayout>
  );
};

export default StaffDashboardPage;
