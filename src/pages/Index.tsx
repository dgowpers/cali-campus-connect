
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-cc-blue-700 text-white py-4">
        <div className="cc-container flex justify-between items-center">
          <h1 className="text-2xl font-bold">CaliConnect</h1>
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-white hover:text-cc-blue-700"
            onClick={() => navigate("/login")}
          >
            Sign In
          </Button>
        </div>
      </header>
      
      {/* Hero section */}
      <section className="bg-cc-blue-700 text-white py-16 flex-grow flex items-center">
        <div className="cc-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">California Community College ERP System</h2>
              <p className="text-xl mb-8">
                The comprehensive management solution designed specifically for California's community college system.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-cc-gold-500 text-black hover:bg-cc-gold-600"
                  onClick={() => navigate("/login")}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-cc-blue-700"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3"
                alt="College student working on computer"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-16 bg-white">
        <div className="cc-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Complete ERP Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border shadow-sm">
              <div className="bg-cc-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg className="w-6 h-6 text-cc-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Student Information System</h3>
              <p className="text-gray-600">
                Comprehensive student record management, registration, course catalog, and academic progress tracking.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border shadow-sm">
              <div className="bg-cc-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg className="w-6 h-6 text-cc-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Faculty Tools</h3>
              <p className="text-gray-600">
                Class management, attendance tracking, grade submission, and communication tools for instructors.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border shadow-sm">
              <div className="bg-cc-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg className="w-6 h-6 text-cc-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Administrative Dashboard</h3>
              <p className="text-gray-600">
                Institutional reporting, analytics, staff management, and comprehensive system administration.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo section */}
      <section className="py-16 bg-gray-50">
        <div className="cc-container text-center">
          <h2 className="text-3xl font-bold mb-4">See CaliConnect in Action</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience how our system streamlines operations for California community colleges.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => navigate("/dashboard/student")}
              className="bg-cc-blue-600 hover:bg-cc-blue-700"
            >
              Student Demo
            </Button>
            <Button
              onClick={() => navigate("/dashboard/faculty")}
              className="bg-cc-blue-600 hover:bg-cc-blue-700"
            >
              Faculty Demo
            </Button>
            <Button
              onClick={() => navigate("/dashboard/staff")}
              className="bg-cc-blue-600 hover:bg-cc-blue-700"
            >
              Staff Demo
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="cc-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">CaliConnect</h3>
              <p className="text-gray-400">California Community College ERP System</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400">&copy; 2025 CaliConnect. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
