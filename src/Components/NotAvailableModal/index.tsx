import { useContext } from "react";
import { ModalContainer } from "./styles";
import { CheckoutContext } from "../../Contexts/CheckoutContext";
import { Buildings, SmileySad, XCircle } from "phosphor-react";

export function NotAvailableModal() {
  const { isCityInvalid, formData, closeModal } = useContext(CheckoutContext);
  return (
    <ModalContainer isOpen={isCityInvalid}>
      <Buildings size={32} weight="fill" />
      <h2>
        Poxa, parece que ainda não estamos por aí{" "}
        <SmileySad size={32} weight="fill" />
      </h2>
      <span>Mas te avisaremos assim que chegarmos em {formData.cidade} </span>
      <XCircle
        size={40}
        weight="fill"
        className="closeButton"
        onClick={closeModal}
      />
    </ModalContainer>
  );
}
