export interface StepStatus {
  loading: boolean;
  error: Error | string | undefined;
  data: Record<string, any>;
}

export const defaultStepStatus : StepStatus = {
  loading: false,
  error: undefined,
  data: {},
};
