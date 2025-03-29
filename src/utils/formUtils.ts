interface FormData {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
  }
  
  import { UseFormSetValue } from "react-hook-form";
  
  export const resetForm = (
    setValue: UseFormSetValue<FormData>,
    setIsEmailVerified: (value: boolean) => void,
    setUserEmail: (value: string) => void
  ) => {
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("address", "");
    setValue("email", "");
    setIsEmailVerified(false);
    setUserEmail("");
  };
  