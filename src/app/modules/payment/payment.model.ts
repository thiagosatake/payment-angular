export interface Payment {
  checkoutId: string,
  description: string,
  amount: string,
  paymentType: string,
  currency: string,
  tenantId: string
}
