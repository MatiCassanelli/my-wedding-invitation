"use client";

import { motion } from "framer-motion";
import type { PaymentInfo } from "@/types/invitation";
import BankInfo from "./bank-info";
import { useInvitation } from "@/context/invitation-context";

interface PaymentSectionProps {
  paymentInfo: PaymentInfo;
}

export default function GiftSection() {
  return (
    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
      <p className="text-md text-gray-700">
        Para nosotros, tu presencia es el mejor regalo. Pero como ya lo dijo
        Calamaro,
      </p>
      <h3 className="text-5xl text-rose-300 font-tangerine mt-5 mb-4 leading-10">
        No se puede vivir del amor...
      </h3>
      <p className="text-md text-gray-700 mb-6">
        Si de igual manera te gustaría acompañarnos con un obsequio, una
        contribución será recibida con mucho cariño y gratitud. Y para ello acá
        dejamos los datos de nuestras cuentas:
      </p>
      <div className="space-y-4">
        <BankInfo animate={false} className="bg-gray-50 p-4 rounded-md" />
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 italic">
          Por favor, enviá el comprobante de la transferencia a nuestro
          WhatsApp.
        </p>
      </div>
    </div>
  );
}
