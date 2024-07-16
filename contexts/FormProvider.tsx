"use client";

import React, { createContext, useContext, useRef, ReactNode } from "react";

interface FormContextType {
  formRef: React.RefObject<HTMLFormElement>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <FormContext.Provider value={{ formRef }}>{children}</FormContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}
