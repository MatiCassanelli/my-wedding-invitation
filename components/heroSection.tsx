"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroSectionProps {
  currentPage: "home" | "details";
}
export default function HeroSection({ currentPage }: HeroSectionProps) {
  const isMobile = useIsMobile();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {isMobile ? (
        <div
          className="absolute inset-0 bg-cover bg-center z-0 bg-[url(/hero-mati-ro.jpg)]"
          style={{
            filter: "brightness(0.4)",
          }}
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center z-0 bg-[url(/hero-landscape-mati-ro.jpg)]"
          style={{
            filter: "brightness(0.4)",
          }}
        />
      )}

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <h1 className="text-4xl font-tangerine">Nuestra Boda</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-6"
        >
          <h2 className="text-7xl font-tangerine ">Mati y Ro</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="inline-block"
        >
          <p className="text-xl tracking-widest border-b border-t pb-1">
            15.11.2025
          </p>
        </motion.div>
      </div>

      {/* Navigation */}
      <Navigation currentPage={currentPage} />
    </section>
  );
}
