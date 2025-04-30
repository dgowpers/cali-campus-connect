
import React from "react";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side banner with image */}
      <div className="md:w-1/2 bg-cc-blue-700 text-white p-8 flex flex-col justify-center items-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-6">CaliConnect</h1>
          <h2 className="text-2xl font-semibold mb-4">California Community College ERP System</h2>
          <p className="text-lg mb-8">
            Your comprehensive student information system for managing courses, grades, schedules and more.
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
              <span className="text-cc-gold-400 text-xl font-bold mb-2">24/7</span>
              <span>Access to your information</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
              <span className="text-cc-gold-400 text-xl font-bold mb-2">100+</span>
              <span>California colleges connected</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
              <span className="text-cc-gold-400 text-xl font-bold mb-2">1M+</span>
              <span>Student records managed</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
              <span className="text-cc-gold-400 text-xl font-bold mb-2">Easy</span>
              <span>Course registration & management</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side login form */}
      <div className="md:w-1/2 flex justify-center items-center p-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
