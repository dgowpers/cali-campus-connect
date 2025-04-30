
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import StudentDashboard from "@/components/dashboard/StudentDashboard";

const StudentDashboardPage = () => {
  return (
    <MainLayout userType="student">
      <StudentDashboard />
    </MainLayout>
  );
};

export default StudentDashboardPage;
