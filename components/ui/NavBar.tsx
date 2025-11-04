"use client";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white border-b shadow-sm z-50">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Business Dining Etiquette</h1>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-6 text-gray-700">
            <NavigationMenuItem><Link href="/">Home</Link></NavigationMenuItem>
            <NavigationMenuItem><Link href="/before">Before The Meal</Link></NavigationMenuItem>
            <NavigationMenuItem><Link href="/etiquette">At The Table</Link></NavigationMenuItem>
            <NavigationMenuItem><Link href="/resources">Resources</Link></NavigationMenuItem>
            <NavigationMenuItem><Link href="/survey">Survey</Link></NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
