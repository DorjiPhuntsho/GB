"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Dumbbell className="h-6 w-6" />
          <span className="font-bold">College Sports Booking</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/grounds">
            <Button variant="ghost">Grounds</Button>
          </Link>
          <Link href="/events">
            <Button variant="ghost">Events</Button>
          </Link>
          <Link href="/bookings">
            <Button variant="ghost">My Bookings</Button>
          </Link>
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}