"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Countdown from "@/components/countdown";
import Footer from "@/components/footer";
import InvitationCodeForm from "@/components/invitation-code-form";
import { Heart, Loader2 } from "lucide-react";
import { useInvitation } from "@/context/invitation-context";
import Image from "next/image";
import HeroSection from "@/components/hero-section";
import RSVP from "@/components/rsvp";
import PaymentSection from "@/components/payment-section";

export default function Home() {
  const searchParams = useSearchParams();
  const {
    invitationCode,
    isValidCode,
    isLoading,
    validateInvitationCode,
    homeData,
    requiresPayment,
  } = useInvitation();

  useEffect(() => {
    const checkInvitationCode = async () => {
      // Check for invitation code in URL
      const codeFromUrl = searchParams.get("code");
      if (codeFromUrl && !invitationCode) {
        await validateInvitationCode(codeFromUrl);
      }
    };
    checkInvitationCode();
  }, [searchParams, validateInvitationCode, invitationCode]);

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
      <HeroSection currentPage="home" />

      {/* Profile Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
            {/* Mati Profile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/mati.png"
                  alt="Mati"
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                />
              </div>
              <h3 className="text-xl text-gray-700">Mati</h3>
            </motion.div>

            {/* Heart Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-rose-300 my-4 md:my-0"
            >
              <Heart size={40} fill="currentColor" />
            </motion.div>

            {/* Ro Profile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/ro.png"
                  alt="Ro"
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                />
              </div>
              <h3 className="text-xl text-gray-700">Ro</h3>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <h2 className="text-6xl text-rose-300 font-tangerine mb-6">
              Nos casamos!
            </h2>
            <p className="text-gray-600 font-bold">
              15 de Noviembre — Salón Casapueblo
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Countdown Section */}
      <section className="py-16 bg-rose-200">
        <div className="container mx-auto px-4">
          <Countdown />
        </div>
      </section>

      {requiresPayment && homeData?.paymentInfo ? (
        <PaymentSection paymentInfo={homeData.paymentInfo} />
      ) : (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <p className="text-gray-700 mb-4">{homeData?.giftMessage}</p>
              <h3 className="text-5xl text-rose-300 font-tangerine mb-4">
                {homeData?.giftQuote}
              </h3>
              <p className="text-gray-700">{homeData?.giftDetails}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {homeData?.bankInfo?.map((bankInfo) => (
                <motion.div
                  key={bankInfo.cbu}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="bg-gray-50 p-6 text-center"
                >
                  <h4 className="font-medium mb-2">{bankInfo.bankName}</h4>
                  <p className="text-sm mb-1">
                    Cuenta: {bankInfo.accountNumber}
                  </p>
                  <p className="text-sm mb-1">CBU: {bankInfo.cbu}</p>
                  <p className="text-sm">Alias: {bankInfo.alias}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      <RSVP />
      <Footer />
    </main>
  );
}
