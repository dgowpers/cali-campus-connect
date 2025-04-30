
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, BookUser, FileText, School } from "lucide-react";

const StudentDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome, Student</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-cc-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Enrolled Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">4</p>
              <BookUser className="h-5 w-5 text-cc-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-cc-gold-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">3</p>
              <FileText className="h-5 w-5 text-cc-gold-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-cc-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">3.8</p>
              <School className="h-5 w-5 text-cc-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-cc-gold-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Calendar Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">2</p>
              <Calendar className="h-5 w-5 text-cc-gold-500" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Courses</CardTitle>
            <CardDescription>Your currently enrolled courses</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { id: "CS101", name: "Introduction to Computer Science", instructor: "Dr. Smith", progress: 65 },
                { id: "MATH202", name: "Calculus II", instructor: "Prof. Johnson", progress: 82 },
                { id: "ENG110", name: "College Composition", instructor: "Dr. Williams", progress: 45 },
                { id: "BIO130", name: "General Biology", instructor: "Dr. Garcia", progress: 70 }
              ].map((course) => (
                <li key={course.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <h3 className="font-medium">{course.id}: {course.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.instructor}</p>
                  </div>
                  <div className="w-24">
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-cc-blue-500" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground text-right mt-1">{course.progress}%</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Assignments due soon</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { 
                  title: "Research Paper Draft", 
                  course: "ENG110", 
                  date: "Tomorrow, 11:59 PM",
                  status: "urgent" 
                },
                { 
                  title: "Problem Set 3", 
                  course: "MATH202", 
                  date: "May 3, 11:59 PM",
                  status: "upcoming" 
                },
                { 
                  title: "Lab Report", 
                  course: "BIO130", 
                  date: "May 5, 5:00 PM",
                  status: "upcoming" 
                }
              ].map((assignment, index) => (
                <li 
                  key={index} 
                  className={`p-3 rounded-lg border-l-4 ${
                    assignment.status === "urgent" 
                      ? "border-l-red-500 bg-red-50" 
                      : "border-l-cc-gold-500 bg-amber-50"
                  }`}
                >
                  <h3 className="font-medium">{assignment.title}</h3>
                  <p className="text-sm text-muted-foreground">{assignment.course}</p>
                  <p className="text-sm font-medium mt-1">Due: {assignment.date}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
