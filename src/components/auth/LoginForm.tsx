
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Google, LogIn } from "lucide-react";

const LoginForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to authentication in a real implementation
    toast({
      title: "Login functionality",
      description: "This would authenticate you in a real implementation",
    });
  };
  
  const handleGoogleLogin = () => {
    // This would handle Google login in a real implementation
    toast({
      title: "Google Login",
      description: "This would authenticate with Google in a real implementation",
    });
  };
  
  return (
    <Card className="w-[350px] md:w-[400px]">
      <CardHeader>
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>Access your CaliConnect account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@college.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm text-cc-blue-500 hover:text-cc-blue-700">
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="bg-cc-blue-600 hover:bg-cc-blue-700">
              <LogIn className="mr-2 h-4 w-4" />
              Sign in
            </Button>
          </div>
        </form>
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={handleGoogleLogin}
        >
          <Google className="mr-2 h-4 w-4" />
          Google
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-500">
          Need an account? Contact your administrator
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
