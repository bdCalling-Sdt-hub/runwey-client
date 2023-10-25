import React, { useState } from "react";
import ChangePasswordPage from "./ChangePasswordPage";

const ChangePassword = () => {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  return (
    <>
      < ChangePasswordPage />
    </>
  );
};

export default ChangePassword;
