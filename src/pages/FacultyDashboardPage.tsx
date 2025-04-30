
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import FacultyDashboard from "@/components/dashboard/FacultyDashboard";

const FacultyDashboardPage = () => {
  return (
    <MainLayout userType="faculty">
      <FacultyDashboard />
    </MainLayout>
  );
};

export default FacultyDashboardPage;
