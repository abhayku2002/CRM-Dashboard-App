
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

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    router.push('/login');
  };

  return (
    <aside className="w-64 border-r flex-shrink-0 h-screen bg-card">
      <div className="p-4">
        <h1 className="text-lg font-semibold">BizLink</h1>
      </div>
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
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button variant="ghost" className="justify-start w-full gap-2" onClick={handleLogout}>
                Logout
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
};

export default Sidebar;

