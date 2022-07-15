import { CREDENTIALS_BASE_URL } from "./config";

export interface CredentialResponse {
  address?: string;
  approvedAt?: number;
  fractalId?: string;
  error?: string;
  proof?: string;
  validUntil?: number;
}

export const fetchCredential = (message: string, signature: string) => {
  const encMessage = encodeURIComponent(message);
  const url = `${CREDENTIALS_BASE_URL}?message=${encMessage}&signature=${signature}`;
  return fetch(url);
};
