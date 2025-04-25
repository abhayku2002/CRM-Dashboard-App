
"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Dashboard, ListChecks, Activity, Users, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r flex-shrink-0 h-screen bg-card">
      <div className="p-4">
        <h1 className="text-lg font-semibold">CRM Light</h1>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button variant="ghost" className="justify-start w-full gap-2">
                <Dashboard className="h-4 w-4" />
                Dashboard
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button variant="ghost" className="justify-start w-full gap-2">
                <ListChecks className="h-4 w-4" />
                Tasks
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button variant="ghost" className="justify-start w-full gap-2">
                <Activity className="h-4 w-4" />
                Activity
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button variant="ghost" className="justify-start w-full gap-2">
                <Users className="h-4 w-4" />
                Customers
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button variant="ghost" className="justify-start w-full gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
};

export default Sidebar;
