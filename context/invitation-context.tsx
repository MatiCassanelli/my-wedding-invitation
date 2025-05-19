"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type {
  GuestGroup,
  HomePageData,
  DetailsPageData,
} from "@/types/invitation";

type InvitationContextType = {
  invitationCode: string | null;
  isValidCode: boolean;
  isLoading: boolean;
  error: string | null;
  homeData: HomePageData | null;
  detailsData: DetailsPageData | null;
  requiresPayment: boolean;
  validateInvitationCode: (code: string) => Promise<boolean>;
  clearInvitationCode: () => void;
  guestCount: number;
};

const InvitationContext = createContext<InvitationContextType | undefined>(
  undefined
);

export function InvitationProvider({ children }: { children: ReactNode }) {
  const [invitationCode, setInvitationCode] = useState<string | null>(null);
  const [isValidCode, setIsValidCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [homeData, setHomeData] = useState<HomePageData | null>(null);
  const [detailsData, setDetailsData] = useState<DetailsPageData | null>(null);
  const [requiresPayment, setRequiresPayment] = useState(false);
  const [guestCount, setGuestCount] = useState(0);

  const validateInvitationCode = async (code: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Query Firestore for the invitation code
      const guestGroupsRef = collection(db, "guestGroups");
      const q = query(guestGroupsRef, where("id", "==", code));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("Código de invitación inválido");
        setIsValidCode(false);
        setInvitationCode(null);
        setHomeData(null);
        setDetailsData(null);
        setIsLoading(false);
        setRequiresPayment(false);
        return false;
      }

      // Get the first matching document
      const guestGroupDoc = querySnapshot.docs[0];
      const guestGroup = guestGroupDoc.data() as GuestGroup;

      // Set the data in state
      setInvitationCode(code);
      setIsValidCode(true);
      setHomeData(guestGroup.homeData);
      setDetailsData(guestGroup.detailsData);
      setRequiresPayment(!!guestGroup.requiresPayment);
      setGuestCount(guestGroup.guests);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.error("Error validating invitation code:", err);
      clearInvitationCode();
      setError("Error al validar el código. Por favor, intenta nuevamente.");
      return false;
    }
  };

  const clearInvitationCode = () => {
    setInvitationCode(null);
    setIsValidCode(false);
    setHomeData(null);
    setDetailsData(null);
    setRequiresPayment(false);
    setError(null);
    setGuestCount(0);
  };

  return (
    <InvitationContext.Provider
      value={{
        invitationCode,
        isValidCode,
        isLoading,
        error,
        homeData,
        detailsData,
        requiresPayment,
        validateInvitationCode,
        clearInvitationCode,
        guestCount,
      }}
    >
      {children}
    </InvitationContext.Provider>
  );
}

export function useInvitation() {
  const context = useContext(InvitationContext);
  if (context === undefined) {
    throw new Error("useInvitation must be used within an InvitationProvider");
  }
  return context;
}
