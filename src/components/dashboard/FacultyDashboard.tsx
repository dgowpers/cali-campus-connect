
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Book, Calendar, FileText } from "lucide-react";

const FacultyDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome, Professor</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-cc-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Classes Teaching</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">3</p>
              <Book className="h-5 w-5 text-cc-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-cc-gold-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">87</p>
              <Users className="h-5 w-5 text-cc-gold-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-cc-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">12</p>
              <FileText className="h-5 w-5 text-cc-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-cc-gold-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Office Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">Today</p>
              <Calendar className="h-5 w-5 text-cc-gold-500" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Current Courses</CardTitle>
            <CardDescription>Courses you are teaching this semester</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { id: "CS101", name: "Introduction to Computer Science", students: 32, section: "A" },
                { id: "CS250", name: "Data Structures", students: 28, section: "B" },
                { id: "CS375", name: "Algorithm Design", students: 27, section: "A" }
              ].map((course) => (
                <li key={course.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <h3 className="font-medium">{course.id}: {course.name}</h3>
                    <p className="text-sm text-muted-foreground">Section {course.section} · {course.students} students</p>
                  </div>
                  <button className="text-sm text-cc-blue-500 hover:text-cc-blue-700">
                    View Class
                  </button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Grading Queue</CardTitle>
            <CardDescription>Assignments to review</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { 
                  title: "Midterm Exams", 
                  course: "CS101", 
                  count: 32,
                  priority: "high" 
                },
                { 
                  title: "Project 2 Submissions", 
                  course: "CS375", 
                  count: 24,
                  priority: "medium" 
                },
                { 
                  title: "Quiz 3", 
                  course: "CS250", 
                  count: 28,
                  priority: "low" 
                }
              ].map((item, index) => (
                <li 
                  key={index} 
                  className={`p-3 rounded-lg ${
                    item.priority === "high" 
                      ? "bg-red-50 border-l-4 border-l-red-500" 
                      : item.priority === "medium"
                        ? "bg-amber-50 border-l-4 border-l-amber-500"
                        : "bg-blue-50 border-l-4 border-l-blue-500"
                  }`}
                >
                  <h3 className="font-medium">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">{item.course}</p>
                    <p className="text-sm font-medium">{item.count} items</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FacultyDashboard;
