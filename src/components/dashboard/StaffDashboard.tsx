
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, School, FileText, Settings } from "lucide-react";

const StaffDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome, Staff</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-cc-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">1,248</p>
              <Users className="h-5 w-5 text-cc-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-cc-gold-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Departments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">8</p>
              <School className="h-5 w-5 text-cc-gold-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-cc-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">24</p>
              <FileText className="h-5 w-5 text-cc-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-cc-gold-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-green-600">Normal</p>
              <Settings className="h-5 w-5 text-cc-gold-500" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>System and administrative activities</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { action: "User account created", user: "John Davis (Student)", time: "10 minutes ago" },
                { action: "Course catalog updated", user: "Susan Wilson (Admin)", time: "2 hours ago" },
                { action: "Grade submission deadline extended", user: "Dr. Rodriguez (Dean)", time: "Yesterday, 4:30 PM" },
                { action: "New semester registration opened", user: "System", time: "Yesterday, 9:00 AM" },
                { action: "Financial aid disbursement processed", user: "Finance Department", time: "Apr 28, 2:15 PM" }
              ].map((activity, index) => (
                <li key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <h3 className="font-medium">{activity.action}</h3>
                    <p className="text-sm text-muted-foreground">By {activity.user}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Administrative deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { 
                  task: "End of Year Reports", 
                  deadline: "May 15, 2025",
                  status: "upcoming" 
                },
                { 
                  task: "Summer Registration", 
                  deadline: "May 10, 2025",
                  status: "urgent" 
                },
                { 
                  task: "Faculty Evaluations", 
                  deadline: "May 20, 2025",
                  status: "upcoming" 
                },
                { 
                  task: "Budget Proposals", 
                  deadline: "June 1, 2025",
                  status: "planning" 
                }
              ].map((task, index) => (
                <li 
                  key={index} 
                  className={`p-3 rounded-lg ${
                    task.status === "urgent" 
                      ? "bg-red-50 border-l-4 border-l-red-500" 
                      : task.status === "upcoming"
                        ? "bg-amber-50 border-l-4 border-l-amber-500"
                        : "bg-gray-50 border-l-4 border-l-gray-500"
                  }`}
                >
                  <h3 className="font-medium">{task.task}</h3>
                  <p className="text-sm font-medium mt-1">Due: {task.deadline}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StaffDashboard;
