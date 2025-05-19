"use client";

import { useInvitation } from "@/context/invitation-context";
import { motion } from "framer-motion";

export default function RSVP() {
  const { guestCount } = useInvitation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-800 text-white"
    >
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl mb-4 font-tangerine"
        >
          ¿Contamos con vos para vivir este gran momento juntos?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 text-lg md:text-xl"
        >
          Tu invitación es válida para{" "}
          <span className="font-bold">
            {guestCount} persona{guestCount > 1 ? "s" : ""}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4 text-sm"
        >
          Por temas de organización (espacio, logística, y todo lo que implica
          armar una fiesta 😅), esta invitación es válida{" "}
          {guestCount > 1 ? "para vos y un acompañanate" : "solo para vos"}.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 text-sm"
        >
          Si te gustaría venir con alguien más, no hay problema: solo te pedimos
          que esa persona abone la entrada como colaboración. En ese caso,
          escribinos y te pasamos los detalles.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-8 text-sm"
        >
          Por favor, completá el siguiente formulario para confirmar si vas a
          venir y si tenés alguna restricción alimenticia. ¡Gracias!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a className="inline-block bg-rose-300 text-gray-800 px-6 py-3 uppercase tracking-wider text-sm hover:bg-rose-400 transition-colors cursor-pointer">
            Completar Formulario
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
