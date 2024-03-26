import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  CheckoutFormContainer,
  FormTitle,
  Input,
  InputGrid,
  InputsContainer,
  PayingMethodOption,
  PayingMethodOptions,
} from "./styles";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { PaymentMethods } from "../../@types/enums/paymentMethods";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CheckoutContext, Form } from "../../Contexts/CheckoutContext";
import InputMask from "react-input-mask";
import { fetchAddressData } from "../../Utils/getAdressDataByZipCode";

const newOrderFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(9, { message: "CEP deve conter 9 caracteres" })
    .max(9, { message: "CEP deve conter 9 caracteres" })
    .regex(/^\d{5}-?\d{3}$/, { message: "CEP deve conter 9 caracteres" }),
  numero: zod.string().min(1, "O número de conter pelo menos 1 caracter"),
});

export function CheckoutForm() {
  const [methodOfPayment, setMethodOfPayment] = useState("");
  const [touchedFields, setTouchedFields] = useState({});
  const isSelected = (method: string) => {
    return method === methodOfPayment;
  };

  const {
    register,
    formState: { errors },
    trigger,
    setValue,
  } = useForm({
    resolver: zodResolver(newOrderFormValidationSchema),
    mode: "onChange",
  });

  useEffect(() => {
    console.log("Touched fields:", touchedFields);
  }, [touchedFields]);

  const { updateFormData, getFormErrors, updatePaymentMethod } =
    useContext(CheckoutContext);

  const [formData, setFormData] = useState<Form>({
    bairro: "",
    cep: "",
    cidade: "",
    estado: "",
    numero: "",
    rua: "",
    complemento: "",
  });

  function handleBlur(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    trigger(name);
    updateFormData({ [name]: value });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    trigger(name);
    setValue(name, value);
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [name]: true,
    }));
    updateFormData({ [name]: value });
  }

  useEffect(() => {
    getFormErrors(errors);
    trigger(["rua", "numero", "complemento", "bairro", "cidade", "estado"]);
  }, [formData, errors, getFormErrors]);

  useEffect(() => {
    const fetchAddress = async () => {
      if (!errors.cep) {
        try {
          const addressData = await fetchAddressData(formData.cep);
          console.log(addressData);
          const { bairro, localidade, logradouro, uf } = addressData;
          console.log(addressData);
          setFormData({
            ...formData,
            bairro,
            cidade: localidade,
            rua: logradouro,
            estado: uf,
          });
          updateFormData({
            bairro,
            cidade: localidade,
            rua: logradouro,
            estado: uf,
          });
          trigger([
            "rua",
            "numero",
            "complemento",
            "bairro",
            "cidade",
            "estado",
          ]);
        } catch (error) {
          console.error("Erro ao buscar dados de endereço:", error);
        }
      }
    };

    fetchAddress();
  }, [formData.cep, errors.cep]);

  function handlePaymentMethodSelection(method: PaymentMethods) {
    updatePaymentMethod(method);
    setMethodOfPayment(method);
  }

  return (
    <>
      <CheckoutFormContainer>
        <form>
          <FormTitle>
            <MapPinLine size={32} />
            <div>
              <span className="subtitle">Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </FormTitle>
          <InputsContainer>
            <InputGrid size={1}>
              <InputMask
                mask="99999-999"
                type="text"
                placeholder="CEP"
                {...register("cep")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={formData.cep}
              />
            </InputGrid>
            <InputGrid size={1}>
              <Input
                type="text"
                placeholder="Rua "
                {...register("rua")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={formData.rua}
              />
            </InputGrid>
            <InputGrid size={2}>
              <InputMask
                mask="999"
                type="text"
                placeholder="102 "
                {...register("numero")}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleChange(e)}
              />
              <Input
                type="text"
                placeholder="Complemento "
                {...register("complemento")}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleChange(e)}
              />
            </InputGrid>
            <InputGrid size={3}>
              <Input
                type="text"
                placeholder="Bairro "
                {...register("bairro")}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleChange(e)}
                value={formData.bairro}
              />
              <Input
                type="text"
                placeholder="Cidade "
                {...register("cidade")}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleChange(e)}
                value={formData.cidade}
              />
              <InputMask
                mask="aa"
                type="text"
                placeholder="ES"
                {...register("estado")}
                onBlur={(e) => handleBlur(e)}
                onChange={(e) => handleChange(e)}
                value={formData.estado}
              />
            </InputGrid>
          </InputsContainer>
        </form>
      </CheckoutFormContainer>
      <CheckoutFormContainer mt color="purple">
        <FormTitle>
          <CurrencyDollar size={32} />
          <div>
            <span className="subtitle">Pagamento</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </FormTitle>
        <PayingMethodOptions>
          <PayingMethodOption
            method={PaymentMethods.CREDIT}
            isSelected={isSelected(PaymentMethods.CREDIT)}
            onClick={() => handlePaymentMethodSelection(PaymentMethods.CREDIT)}
          >
            {" "}
            <CreditCard size={16} />
            {PaymentMethods.CREDIT}
          </PayingMethodOption>
          <PayingMethodOption
            method={PaymentMethods.DEBIT}
            isSelected={isSelected(PaymentMethods.DEBIT)}
            onClick={() => handlePaymentMethodSelection(PaymentMethods.DEBIT)}
          >
            <Bank size={16} />
            {PaymentMethods.DEBIT}
          </PayingMethodOption>
          <PayingMethodOption
            method={PaymentMethods.MONEY}
            isSelected={isSelected(PaymentMethods.MONEY)}
            onClick={() => handlePaymentMethodSelection(PaymentMethods.MONEY)}
          >
            <Money size={16} />
            {PaymentMethods.MONEY}
          </PayingMethodOption>
        </PayingMethodOptions>
      </CheckoutFormContainer>
    </>
  );
}
