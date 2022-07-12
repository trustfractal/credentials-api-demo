import React from "react";

import { StatusMessage as StatusMessageT } from "../../lib/utils";

const getMessage = (statusMessage: StatusMessageT) => {
  const { status, data } = statusMessage;
  switch (status) {
    case "APPROVED":
      return `Thank you! Now this page knows that, as the owner of address ${data.address as string}, you're approved for the plus KYC level, are not a citizen of Germany, and are not a resident of Canada or the United States! Your transaction will succeed.`;
    case "NOT_APPROVED":
      return `It seems your address ${data.address as string} isn't associated with an approved Fractal user.`;
    case "TX_SUCCESS":
      return "Your transaction succeeded!";
    case "TX_ERROR":
      return "Your transaction failed.";

    default:
      return "";
  }
};

export const StatusMessage = ({ status }: { status: StatusMessageT }) => (
  <div>
    <p>{getMessage(status)}</p>
    {(status.status === "NOT_APPROVED" || status.status === "TX_ERROR") &&
      <p>
        <small>
          You can verify yourself with Fractal. {"<LINK TO ID>"}
        </small>
      </p>
    }
  </div>
);

export default StatusMessage;
