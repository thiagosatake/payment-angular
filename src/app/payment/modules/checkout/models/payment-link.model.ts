export interface PaymentLink {
  uuid?: string;
  order: string;
  currency: string;
  paymentType: string;
  amount: number;
  description: string;
}
