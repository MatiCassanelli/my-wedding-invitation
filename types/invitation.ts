export interface BankInfo {
  bankName: string;
  accountNumber: string;
  cbu: string;
  alias: string;
  whatsapp: string;
}

export interface PaymentInfo {
  amount: number;
  currency: string;
  message: string;
  deadline: string;
  paymentMethods: BankInfo[];
}

export interface HomePageData {
  title: string;
  names: string;
  date: string;
  message: string;
  venue: string;
  bankInfo: BankInfo[];
  giftMessage?: string;
  giftQuote?: string;
  giftDetails?: string;
  paymentInfo?: PaymentInfo;
}

export interface DetailsPageData {
  ceremonyTitle: string;
  ceremonyDate: string;
  ceremonyLocation: string;
  ceremonyDescription: string;
  ceremonyAddress: string;
  ceremonyMapLink: string;
  partyTitle: string;
  partyDate: string;
  partyLocation: string;
  partyDescription: string;
  partyAddress: string;
  partyMapLink: string;
  dressCodeTitle: string;
  dressCodeDescription: string;
  dressCodeNote: string;
}

export interface GuestGroup {
  id: string;
  groupName: string;
  homeData: HomePageData;
  detailsData: DetailsPageData;
  requiresPayment?: boolean;
  guests: number;
}
