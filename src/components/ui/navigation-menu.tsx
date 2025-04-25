"use client"

import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex w-full items-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuPrimitive.Indicator className="absolute bottom-0 h-px w-full bg-border transition-all" />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex h-12 list-none items-center justify-center space-x-4 rounded-md p-1 text-muted-foreground data-[orientation=horizontal]:p-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:space-x-0 data-[orientation=vertical]:space-y-1",
      className
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.List>
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Item ref={ref} className={cn("group-[[data-menu-open]]:text-foreground data-[active=true]:text-foreground data-[active=true]:shadow-sm", className)} {...props}>
    {children}
  </NavigationMenuPrimitive.Item>
))
NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-12 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus:bg-secondary focus:text-foreground focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary data-[state=open]:text-foreground",
  {
    variants: {
      variant: {
        default: {},
        "with-icon": {
          "& > *:first-child": {
            marginRight: "0.5rem",
          },
        },
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown className="relative top-[1px] h-4 w-4 opacity-50" />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full sm:w-[400px] data-[motion=from-start]:animate-in data-[motion=to-end]:animate-out data-[motion=from-end]:animate-in data-[motion=to-start]:animate-out data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 absolute mt-1.5 min-w-[220px] overflow-hidden rounded-md border bg-popover p-4 text-popover-foreground shadow-md",
      className
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Content>
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Viewport
    ref={ref}
    className={cn(
      "absolute left-1/2 top-full h-[var(--radix-navigation-menu-viewport-height)] w-full min-w-[var(--radix-navigation-menu-viewport-width)] translate-x-[-50%] overflow-hidden rounded-[8px] shadow",
      className
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Viewport>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName


export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuViewport, navigationMenuTriggerStyle }
