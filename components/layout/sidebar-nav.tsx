"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon, Home, Settings, Users, BarChart2, FileText } from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: LucideIcon
}

interface SidebarNavProps {
  collapsed?: boolean
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart2,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export default function SidebarNav({ collapsed = false }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <TooltipProvider delayDuration={300}>
      <div className="flex flex-col h-full py-4">
        <nav className="flex flex-col gap-1 px-2">
          {navItems.map((item) => (
            collapsed ? (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link 
                    href={item.href}
                    className="no-underline"
                  >
                    <Button
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      className={cn(
                        "text-sm h-10 font-medium w-full justify-center p-0",
                        pathname === item.href
                          ? "bg-secondary text-secondary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" align="start" className="font-medium text-xs">
                  {item.title}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link 
                key={item.href} 
                href={item.href}
                className="no-underline"
              >
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "text-sm h-10 font-medium w-full justify-start gap-3",
                    pathname === item.href
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Button>
              </Link>
            )
          ))}
        </nav>
        <div className="mt-auto">
          <Separator className="my-4" />
          <div className="px-2">
            {collapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-center text-muted-foreground"
                  >
                    <Users className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" align="start" className="font-medium text-xs">
                  Account
                </TooltipContent>
              </Tooltip>
            ) : (
              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 text-muted-foreground"
              >
                <Users className="h-4 w-4" />
                <span>Account</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
