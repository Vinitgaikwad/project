export type ParticipantCategory = 'Research Scholar' | 'Academia';

export interface RegistrationFormData {
  name: string;
  category: ParticipantCategory;
  affiliation: string;
  email: string;
  whatsappNumber: string;
  vuAccountNumber: string;
  transactionId: string;
  transactionReceipt: File | null;
}