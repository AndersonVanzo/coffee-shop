import React, { createContext, useState } from "react";

interface WelcomeProviderProps {
  children: JSX.Element;
}

interface WelcomeContextData {
  step: number;
  nextStep: () => void;
}

export const WelcomeContext = createContext<WelcomeContextData>({} as WelcomeContextData);

export const WelcomeProvider = ({ children }: WelcomeProviderProps) => {
  const [step, setStep] = useState(1);

  const nextStep = (): void => {
    if (step < 3) setStep(step + 1);
  }

  return (
    <WelcomeContext.Provider value={{ step, nextStep }}>
      {children}
    </WelcomeContext.Provider>
  );
}