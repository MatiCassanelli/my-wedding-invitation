import { useInvitation } from "@/context/invitation-context";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

interface BankInfoProps {
  animate: boolean;
  className?: string;
}

const animationConfig = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay: 0.2 },
};

export default function BankInfo({ animate, className }: BankInfoProps) {
  const { bankInfo } = useInvitation();
  return (
    <>
      {bankInfo.map(({ accountNumber, alias, bankName, cbu, whatsapp }) => (
        <motion.div
          {...(animate ? animationConfig : {})}
          key={cbu}
          className={className}
        >
          <h4 className="font-medium mb-2">{bankName}</h4>
          <p className="text-sm mb-1">Cuenta: {accountNumber}</p>
          <p className="text-sm mb-1">CBU: {cbu}</p>
          <p className="text-sm mb-1">Alias: {alias}</p>
          <p className="text-sm">WhatsApp: {whatsapp}</p>
        </motion.div>
      ))}
    </>
  );
}
