"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import InvitationCodeForm from "@/components/invitation-code-form";
import { useInvitation } from "@/context/invitation-context";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import HeroSection from "@/components/heroSection";
import RSVP from "@/components/rsvp";

export default function Details() {
  const searchParams = useSearchParams();
  const { invitationCode, isValidCode, isLoading, validateInvitationCode } =
    useInvitation();

  useEffect(() => {
    const checkInvitationCode = async () => {
      // Check for invitation code in URL
      const codeFromUrl = searchParams.get("code");
      if (codeFromUrl && !invitationCode) {
        await validateInvitationCode(codeFromUrl);
      }
    };
    checkInvitationCode();
  }, [invitationCode, searchParams, validateInvitationCode]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <Loader2 className="animate-spin h-12 w-12 text-rose-300 mx-auto mb-4" />
          <p className="text-gray-600">Cargando invitación...</p>
        </div>
      </div>
    );
  }

  if (!isValidCode) {
    return <InvitationCodeForm />;
  }

  return (
    <main className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      <HeroSection currentPage="details" />

      {/* Cuando y Donde Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl text-rose-300 font-tangerine text-center mb-12"
          >
            Cuándo y Dónde
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 ">
            {/* Ceremony */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center bg-gray-50 p-4 border border-gray-200 rounded-lg shadow-sm"
            >
              <div className="mb-6 aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                <Image
                  src="/parroquia-urca.jpg"
                  alt="Iglesia"
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                />
              </div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl mb-4 font-tangerine"
              >
                Ceremonia
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-sm mb-1">
                  Sábado 15 de Noviembre, 17.00 - 17.40
                </p>
                <p className="text-sm font-bold mb-4">Parroquia Urca</p>

                <p className="text-sm mb-4">
                  Los invitamos a ser testigos de nuestra unión en una ceremonia
                  llena de amor y emoción, donde daremos el sí para siempre ante
                  los ojos de Dios.
                </p>

                <p className="text-sm mb-2">Lucas de Figueroa y Mendoza 879</p>
                <a
                  href="https://maps.app.goo.gl/4kAD2y8fhQWKcbvG9"
                  className="text-xs text-rose-400 hover:underline"
                >
                  Abrir en Maps
                </a>
              </motion.div>
            </motion.div>

            {/* Party */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center bg-gray-50 p-4 border border-gray-200 rounded-lg shadow-sm"
            >
              <div className="mb-6 aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                <Image
                  src="/casapueblo.jpg"
                  alt="Salón"
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                />
              </div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl mb-4 font-tangerine"
              >
                La gran fiesta
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-sm mb-1">
                  Sábado 15 de Noviembre, 18.30 - 2.30
                </p>
                <p className="text-sm font-bold mb-4">Salón Casapueblo</p>

                <p className="text-sm mb-4">
                  ¡Ahora sí, que empiece la fiesta! 🥂🎉 Los esperamos para
                  brindar, bailar y celebrar a lo grande. ¡No falten, que la
                  joda nos espera!.
                </p>

                <p className="text-sm mb-2">Ruta E53. KM 9.5</p>
                <a
                  href="Ruta E53. KM 9.5"
                  className="text-xs text-rose-400 hover:underline"
                >
                  Abrir en Maps
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Dress Code */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center bg-gray-50 p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <h3 className="text-3xl mb-4 font-tangerine">Dress Code</h3>
            <p className="font-medium mb-4">Formal Elegante</p>
            <p className="text-sm">
              Los tonos blancos y crudos son EXCLUSIVIDAD de la novia. Por
              favor, no los uses.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <RSVP />
      <Footer />
    </main>
  );
}
