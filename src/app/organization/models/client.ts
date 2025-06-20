export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  dni: string;
  email: string | null;
  phoneNumber: string;
  fullName?: string;
}