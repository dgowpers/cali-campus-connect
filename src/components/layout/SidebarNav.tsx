
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Book, Calendar, FileText, LogOut, Settings, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link, useLocation } from "react-router-dom";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  userType: "student" | "faculty" | "staff";
}

export function SidebarNav({ className, userType, ...props }: SidebarNavProps) {
  const { toast } = useToast();
  const location = useLocation();
  
  // Define navigation items based on user type
  const getNavItems = () => {
    const baseItems = [
      {
        name: "Dashboard",
        href: `/dashboard/${userType}`,
        icon: <Book className="h-5 w-5" />
      },
      {
        name: "Calendar",
        href: "/calendar",
        icon: <Calendar className="h-5 w-5" />
      }
    ];
    
    // Add user-type specific items
    if (userType === "student") {
      return [
        ...baseItems,
        {
          name: "Courses",
          href: "/courses",
          icon: <Book className="h-5 w-5" />
        },
        {
          name: "Assignments",
          href: "/assignments",
          icon: <FileText className="h-5 w-5" />
        }
      ];
    } else if (userType === "faculty") {
      return [
        ...baseItems,
        {
          name: "My Classes",
          href: "/my-classes",
          icon: <Users className="h-5 w-5" />
        },
        {
          name: "Grades",
          href: "/grades",
          icon: <FileText className="h-5 w-5" />
        }
      ];
    } else {
      // Staff
      return [
        ...baseItems,
        {
          name: "Students",
          href: "/students",
          icon: <Users className="h-5 w-5" />
        },
        {
          name: "Faculty",
          href: "/faculty",
          icon: <Users className="h-5 w-5" />
        },
        {
          name: "Reports",
          href: "/reports",
          icon: <FileText className="h-5 w-5" />
        }
      ];
    }
  };
  
  const navItems = getNavItems();
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    // Navigate to login page in a real implementation
  };
  
  return (
    <nav className={cn("flex flex-col space-y-1", className)} {...props}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
            location.pathname === item.href
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
          )}
        >
          {item.icon}
          {item.name}
        </Link>
      ))}
      
      <Link
        to="/settings"
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
          location.pathname === "/settings"
            ? "bg-sidebar-accent text-sidebar-accent-foreground"
            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
        )}
      >
        <Settings className="h-5 w-5" />
        Settings
      </Link>
      
      <Button 
        variant="ghost" 
        className="flex items-center justify-start gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground mt-auto"
        onClick={handleLogout}
      >
        <LogOut className="h-5 w-5" />
        Logout
      </Button>
    </nav>
  );
}
