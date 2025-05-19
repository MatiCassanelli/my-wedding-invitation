"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useInvitation } from "@/context/invitation-context";

interface NavigationProps {
  currentPage: "home" | "details";
}

export default function Navigation({ currentPage }: NavigationProps) {
  const { invitationCode } = useInvitation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to detect when to show fixed navigation
  useEffect(() => {
    const handleScroll = () => {
      // Only show fixed navigation when scrolled past the hero section (100vh)
      setIsScrolled(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile fixed navigation - appears only when scrolled past hero */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-md transition-all duration-300 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center pt-3 pb-1">
          <div className="text-2xl font-tangerine text-rose-300 mb-2">M&R</div>
          <div className="flex w-full">
            <Link
              href={invitationCode ? `/?code=${invitationCode}` : "/"}
              className={`flex-1 text-center py-2 ${
                currentPage === "home" ? "text-rose-300" : "text-gray-500"
              }`}
            >
              Inicio
            </Link>
            <Link
              href={
                invitationCode ? `/details?code=${invitationCode}` : "/details"
              }
              className={`flex-1 text-center py-2 ${
                currentPage === "details" ? "text-rose-300" : "text-gray-500"
              }`}
            >
              Cuándo y Dónde
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop fixed navigation - appears only when scrolled past hero */}
      <div
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-md transition-all duration-300 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link
              href={invitationCode ? `/?code=${invitationCode}` : "/"}
              className="text-2xl font-tangerine text-rose-300"
            >
              M&R
            </Link>

            <nav className="flex items-center">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    href={invitationCode ? `/?code=${invitationCode}` : "/"}
                    className={`hover:opacity-80 transition-opacity ${
                      currentPage === "home" ? "text-rose-300" : "text-gray-700"
                    }`}
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      invitationCode
                        ? `/details?code=${invitationCode}`
                        : "/details"
                    }
                    className={`hover:opacity-80 transition-opacity ${
                      currentPage === "details"
                        ? "text-rose-300"
                        : "text-gray-700"
                    }`}
                  >
                    Cuándo y Dónde
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
