"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, ListChecks, Activity, Users, Settings } from "lucide-react";
import { useRouter } from 'next/navigation';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Import Avatar component
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    router.push('/login');
  };

  return (
    <aside className="w-64 border-r flex-shrink-0 h-screen bg-card flex flex-col">
      <div className="p-4">
        <h1 className="text-lg font-semibold">BizLink</h1>
      </div>
      <ScrollArea className="flex-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="ghost" className="justify-start w-full gap-2" onClick={() => router.push('/dashboard')}>
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="ghost" className="justify-start w-full gap-2" onClick={() => router.push('/tasks')}>
                  <ListChecks className="h-4 w-4" />
                  Tasks
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="ghost" className="justify-start w-full gap-2" onClick={() => router.push('/activity')}>
                  <Activity className="h-4 w-4" />
                  Activity
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="ghost" className="justify-start w-full gap-2" onClick={() => router.push('/customers')}>
                  <Users className="h-4 w-4" />
                  Customers
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="ghost" className="justify-start w-full gap-2" onClick={() => router.push('/settings')}>
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Projects Section */}
        <div className="p-4">
          <h2 className="text-sm font-semibold mb-2">Projects</h2>
          <ul>
            <li className="py-1">Project A</li>
            <li className="py-1">Project B</li>
            <li className="py-1">Project C</li>
          </ul>
        </div>

        {/* Members Section */}
        <div className="p-4">
          <h2 className="text-sm font-semibold mb-2">Members</h2>
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://picsum.photos/50/50" alt="Member 1" />
              <AvatarFallback>M1</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">John Doe</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://picsum.photos/51/51" alt="Member 2" />
              <AvatarFallback>M2</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">Jane Smith</p>
              <p className="text-xs text-muted-foreground">Sales Manager</p>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* User Profile/Settings */}
      <div className="border-t p-4">
        <Button variant="ghost" className="justify-start w-full gap-2" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
