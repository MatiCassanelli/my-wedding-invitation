"use client";

import { motion } from "framer-motion";
import type { PaymentInfo } from "@/types/invitation";
import BankInfo from "./bank-info";

interface PaymentSectionProps {
  paymentInfo: PaymentInfo;
}

export default function PaymentSection({ paymentInfo }: PaymentSectionProps) {
  return (
    <>
      <h2 className="text-5xl font-tangerine text-rose-300 mb-6">
        Información de Pago
      </h2>
      <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <p className="text-gray-700">
          Estamos preparando esta fiesta con muchísima ilusión y esfuerzo, y
          queremos compartirla con todas las personas que fueron parte de
          nuestra historia.
        </p>
        <p className="text-gray-700 mb-4">
          Para que esta celebración sea posible, estamos pidiendo una
          contribución para cubrir parte de los costos del evento.
        </p>
        <p className="text-md text-gray-700 mb-6">
          Si podés y querés sumarte, nos va a encantar tenerte con nosotros en
          este día tan especial. ¡Gracias por entender y acompañarnos con tanto
          cariño! ❤️
        </p>

        <div className="mb-6 text-center">
          <span className="text-xl font-bold text-gray-800">
            ${paymentInfo.amount}
          </span>
          <p className="text-xs text-gray-600 mt-0">
            Si querés, podes pagarlo en hasta 3 cuotas!
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Fecha límite: {paymentInfo.deadline}
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            Métodos de pago:
          </h3>
          <BankInfo animate={false} className="bg-gray-50 p-4 rounded-md" />
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 italic">
            Por favor, enviá el comprobante de la transferencia a nuestro
            WhatsApp.
          </p>
        </div>
      </div>
    </>
  );
}
