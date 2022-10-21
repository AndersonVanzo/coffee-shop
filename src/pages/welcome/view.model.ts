import { useState } from "react";

const useWelcomeViewModel = () => {
  const [step, setStep] = useState(1);

  const nextStep = (): void => {
    console.log('step:', step)
    if (step < 3) setStep(step + 1);
  }

  return {
    step,
    nextStep,
  };
}

export default useWelcomeViewModel;