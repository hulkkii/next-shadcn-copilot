"use client"

import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Menu, ChevronLeft, ChevronRight } from "lucide-react"
import SidebarNav from "./sidebar-nav"

interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  useEffect(() => {
    // Check if window is client-side
    if (typeof window !== "undefined") {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }

      // Initial check
      checkIsMobile()

      // Add event listener
      window.addEventListener("resize", checkIsMobile)

      // Cleanup
      return () => window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Sidebar */}
      {isMobile && (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden fixed top-3 left-3 z-40"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              <div className="flex items-center h-16 px-4">
                <Image
                  src="/next.svg"
                  alt="Next.js logo"
                  width={80}
                  height={20}
                  className="dark:invert"
                />
                <SheetClose className="ml-auto">
                  <span className="sr-only">Close menu</span>
                </SheetClose>
              </div>
              <Separator />
              <SidebarNav />
            </div>
          </SheetContent>
        </Sheet>
      )}      {/* Desktop Sidebar */}
      {!isMobile && (
        <div 
          className={`hidden md:flex h-full flex-col border-r transition-all duration-300 ease-in-out ${
            isSidebarCollapsed ? "w-[70px]" : "w-[240px]"
          }`}
        >
          <div className="flex items-center h-16 px-4 justify-between">
            {!isSidebarCollapsed && (
              <Image
                src="/next.svg"
                alt="Next.js logo"
                width={80}
                height={20}
                className="dark:invert"
              />
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="ml-auto"
              aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isSidebarCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>
          <Separator />
          <SidebarNav collapsed={isSidebarCollapsed} />
        </div>
      )}      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-auto">
        <main className="flex-1 pt-12 px-6 pb-6 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
