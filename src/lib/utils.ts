export interface StepStatus {
  loading: boolean;
  error: Error | string | undefined;
  data: Record<string, any>;
}

export const defaultStepStatus: StepStatus = {
  loading: false,
  error: undefined,
  data: {},
};

export type StatusMessageType =
  | "NO_MESSAGE"
  | "APPROVED"
  | "NOT_APPROVED"
  | "TX_SUCCESS"
  | "TX_ERROR";

export interface StatusMessage {
  status: StatusMessageType;
  data: Record<string, any>;
}
