const BASE_URL = "https://resource.staging.sandbox.fractal.id/credentials";

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
  const url = `${BASE_URL}?message=${encMessage}&signature=${signature}`;
  return fetch(url);
};
