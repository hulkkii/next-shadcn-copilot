"use client"

import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import SidebarNav from "./sidebar-nav"

interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

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
              className="md:hidden fixed top-4 left-4 z-50"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center h-16 px-4">
                <Image
                  src="/next.svg"
                  alt="Next.js logo"
                  width={80}
                  height={20}
                  className="dark:invert"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="ml-auto"
                  onClick={() => setIsSheetOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <Separator />
              <SidebarNav />
            </div>
          </SheetContent>
        </Sheet>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className="hidden md:flex h-full w-[240px] flex-col border-r">
          <div className="flex items-center h-16 px-4">
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={80}
              height={20}
              className="dark:invert"
            />
          </div>
          <Separator />
          <SidebarNav />
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-auto">
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
