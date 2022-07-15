import React, { useMemo } from "react";
import styled from "styled-components";
import { StepStatus } from "../../lib/utils";

type DISPLAY_STATUS = "NOT_STARTED" | "LOADING" | "ERROR" | "SUCCESS";

const StepContainer = styled.li`
  margin-bottom: 12px;
  opacity: ${({ active }: { active: boolean }) => active ? "1" : "0.5"};
`;

const getSuffixIcon = (status: DISPLAY_STATUS) => {
  switch (status) {
    case "LOADING":
      return "⏱";
    case "ERROR":
      return "❌";
    case "SUCCESS":
      return "✅";
    default:
      return "";
  }
};

export const Step = ({ label, status, onSuccessElem }: { label: string, status: StepStatus, onSuccessElem?: React.ReactNode }) => {
  const { loading, error, data } = status;

  const getDerivedStatus = (): DISPLAY_STATUS => {
    if (error) {
      return "ERROR";
    } else if (loading) {
      return "LOADING";
    } else if (Object.keys(data).length > 0) {
      return "SUCCESS";
    }
    return "NOT_STARTED";
  };

  const displayStatus = useMemo(getDerivedStatus, [data, error, loading]);

  return (
    <StepContainer active={displayStatus !== "NOT_STARTED"}>
      {label} {getSuffixIcon(displayStatus)}
      {displayStatus === "SUCCESS" && onSuccessElem}
    </StepContainer>
  );
};

export default Step;
