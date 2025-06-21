import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger } from
'@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User, Settings, LogOut, Shield } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const UserMenu: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
        variant: "default"
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Logout Error",
        description: "There was an error logging out.",
        variant: "destructive"
      });
    }
  };

  const getInitials = (name: string) => {
    return name.
    split(' ').
    map((word) => word.charAt(0)).
    join('').
    toUpperCase().
    slice(0, 2);
  };

  if (!user) return null;

  return (
    <DropdownMenu data-id="y0p068sci" data-path="src/components/UserMenu.tsx">
      <DropdownMenuTrigger asChild data-id="844yr8n7a" data-path="src/components/UserMenu.tsx">
        <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 hover:bg-blue-50 dark:hover:bg-gray-800" data-id="cna2lxjmn" data-path="src/components/UserMenu.tsx">
          <Avatar className="h-10 w-10 border-2 border-blue-200 dark:border-gray-600" data-id="000foy3jl" data-path="src/components/UserMenu.tsx">
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium" data-id="wq3ztel13" data-path="src/components/UserMenu.tsx">
              {getInitials(user.Name)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-64 p-2" align="end" forceMount data-id="jrd1p37vh" data-path="src/components/UserMenu.tsx">
        <DropdownMenuLabel className="font-normal" data-id="o6f5vqsnt" data-path="src/components/UserMenu.tsx">
          <div className="flex flex-col space-y-1" data-id="5rwk3zyry" data-path="src/components/UserMenu.tsx">
            <p className="text-sm font-medium leading-none" data-id="xzifxkudm" data-path="src/components/UserMenu.tsx">{user.Name}</p>
            <p className="text-xs leading-none text-muted-foreground" data-id="x0uv84ya3" data-path="src/components/UserMenu.tsx">
              {user.Email}
            </p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator data-id="37m8m1qd7" data-path="src/components/UserMenu.tsx" />
        
        <DropdownMenuItem asChild data-id="q5meg8309" data-path="src/components/UserMenu.tsx">
          <Link to="/profile" className="flex items-center w-full cursor-pointer" data-id="b0fbucgs0" data-path="src/components/UserMenu.tsx">
            <User className="mr-2 h-4 w-4" data-id="b1g5i8q0n" data-path="src/components/UserMenu.tsx" />
            <span data-id="42o30fw90" data-path="src/components/UserMenu.tsx">Profile</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild data-id="0c01lsafs" data-path="src/components/UserMenu.tsx">
          <Link to="/settings" className="flex items-center w-full cursor-pointer" data-id="ktu2ypv8e" data-path="src/components/UserMenu.tsx">
            <Settings className="mr-2 h-4 w-4" data-id="6akwqty7p" data-path="src/components/UserMenu.tsx" />
            <span data-id="xmrbvb7l4" data-path="src/components/UserMenu.tsx">Settings</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild data-id="320yzw5ti" data-path="src/components/UserMenu.tsx">
          <Link to="/verify" className="flex items-center w-full cursor-pointer" data-id="wo9ildenr" data-path="src/components/UserMenu.tsx">
            <Shield className="mr-2 h-4 w-4" data-id="h9rz6apg7" data-path="src/components/UserMenu.tsx" />
            <span data-id="wt2siemsr" data-path="src/components/UserMenu.tsx">Verify Certificate</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator data-id="lr0mkdii9" data-path="src/components/UserMenu.tsx" />
        
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-red-600 dark:text-red-400 focus:text-red-600 dark:focus:text-red-400 cursor-pointer" data-id="hlmj00g9y" data-path="src/components/UserMenu.tsx">

          <LogOut className="mr-2 h-4 w-4" data-id="ocrcucs77" data-path="src/components/UserMenu.tsx" />
          <span data-id="5ecjodpef" data-path="src/components/UserMenu.tsx">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>);

};

export default UserMenu;