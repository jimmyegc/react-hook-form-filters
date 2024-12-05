import { createContext } from "react";
import { useForm, FormProvider } from "react-hook-form";

export const FormContext = createContext(null);

export const FormProviderComponent = ({ children }) => {
  const methods = useForm();
  return (
    <FormContext.Provider value={methods}>
      <FormProvider {...methods}>{children}</FormProvider>
    </FormContext.Provider>
  );
};