
import React from "react";
import { SidebarNav } from "./SidebarNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: React.ReactNode;
  userType: "student" | "faculty" | "staff";
}

const MainLayout = ({ children, userType }: MainLayoutProps) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar flex flex-col border-r",
          isMobile ? "hidden" : "block"
        )}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-sidebar-accent">CaliConnect</h2>
          <p className="text-sm text-sidebar-foreground/80">California College ERP</p>
        </div>
        <div className="px-3 py-2 flex-1">
          <SidebarNav userType={userType} />
        </div>
      </aside>
      
      {/* Mobile sidebar */}
      {isMobile && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 left-4 z-40 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
          
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setSidebarOpen(false)} />
          )}
          
          <aside
            className={cn(
              "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar flex flex-col border-r transition-transform duration-200 ease-in-out",
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="p-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-sidebar-accent">CaliConnect</h2>
                <p className="text-sm text-sidebar-foreground/80">California College ERP</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6 text-sidebar-foreground" />
              </Button>
            </div>
            <div className="px-3 py-2 flex-1">
              <SidebarNav userType={userType} />
            </div>
          </aside>
        </>
      )}
      
      {/* Main content */}
      <main className={cn(
        "flex-1 p-6",
        isMobile ? "w-full" : "ml-64"
      )}>
        <div className="cc-container">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
