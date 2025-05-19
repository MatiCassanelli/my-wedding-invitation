"use client";

import { motion } from "framer-motion";
import type { PaymentInfo } from "@/types/invitation";

interface PaymentSectionProps {
  paymentInfo: PaymentInfo;
}

export default function PaymentSection({ paymentInfo }: PaymentSectionProps) {
  if (!paymentInfo || !paymentInfo.required) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 bg-gray-50"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-tangerine text-rose-300 mb-6">
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
              Si podés y querés sumarte, nos va a encantar tenerte con nosotros
              en este día tan especial. ¡Gracias por entender y acompañarnos con
              tanto cariño! ❤️
            </p>

            <div className="mb-6 text-center">
              <span className="text-xl font-bold text-gray-800">
                ${paymentInfo.amount}
              </span>
              <p className="text-sm text-gray-600 mt-1">
                Fecha límite: {paymentInfo.deadline}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Métodos de pago:
              </h3>
              {paymentInfo.paymentMethods.map((method, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2">{method.bankName}</h4>
                  <p className="text-sm mb-1">Cuenta: {method.accountNumber}</p>
                  <p className="text-sm mb-1">CBU: {method.cbu}</p>
                  <p className="text-sm">Alias: {method.alias}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                Por favor, envía un comprobante de pago a nuestro WhatsApp o
                email para confirmar tu asistencia.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
