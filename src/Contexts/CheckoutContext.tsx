import { ReactNode, createContext, useState } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import { PaymentMethods } from "../@types/enums/paymentMethods";
import { useNavigate } from "react-router-dom";
import { Cities, CitiesWithoutStates } from "../@types/enums/cities";

export interface Form {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
}

interface CheckoutContextType {
  updateFormData: (data: Partial<Form>) => void;
  getFormErrors: (data: FieldErrors<FieldValues>) => void;
  updatePaymentMethod: (data: PaymentMethods) => void;
  formSubmit: () => void;
  formData: Form;
  paymentMethod: PaymentMethods;
  isCityInvalid: boolean;
  closeModal: () => void;
}

interface CheckoutProviderProps {
  children: ReactNode;
}

export const CheckoutProvider: React.FC<CheckoutProviderProps> = ({
  children,
}) => {
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState(
    PaymentMethods.NOT_SELECTED
  );
  const [isCityInvalid, setIsCityInvalid] = useState(false);
  const [formData, setFormData] = useState<Form>({
    bairro: "",
    cep: "",
    cidade: "",
    estado: "",
    numero: "",
    rua: "",
    complemento: "",
  });

  function getFormErrors(errors: FieldErrors<FieldValues>) {
    setErrors(errors);
  }

  function updateFormData(data: Partial<Form>) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...data,
    }));
  }

  function updatePaymentMethod(method: PaymentMethods) {
    setPaymentMethod(method);
  }

  const navigate = useNavigate();

  function closeModal() {
    setIsCityInvalid(false);
  }

  function formSubmit() {
    let isCityValid = false;
    const cityKeys = Object.keys(Cities);
    for (const cityKey of cityKeys) {
      const city =
        CitiesWithoutStates[cityKey as keyof typeof CitiesWithoutStates];
      if (formData.cidade === city) {
        isCityValid = true;
        break;
      }
    }
    if (!isCityValid) {
      setIsCityInvalid(true);
      return;
    }
    const allInputsChecked =
      formData.bairro &&
      formData.cep &&
      formData.cidade &&
      formData.estado &&
      formData.numero &&
      formData.rua.length > 4;
    const noError = Object.entries(errors).length === 0;
    const isPaymentMethodSelected =
      paymentMethod === PaymentMethods.CREDIT ||
      paymentMethod === PaymentMethods.DEBIT ||
      paymentMethod === PaymentMethods.MONEY;
    if (allInputsChecked && noError && isPaymentMethodSelected) {
      navigate("/order");
    } else {
      console.log(errors);
      console.log(formData);
    }
  }

  return (
    <CheckoutContext.Provider
      value={{
        updateFormData,
        getFormErrors,
        formSubmit,
        updatePaymentMethod,
        formData,
        paymentMethod,
        isCityInvalid,
        closeModal,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const CheckoutContext = createContext({} as CheckoutContextType);
