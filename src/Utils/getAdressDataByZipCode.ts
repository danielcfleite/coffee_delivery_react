export const fetchAddressData = async (cep: string) => {
  const formatedCep = cep.replace("-", "");
  console.log(formatedCep);
  try {
    const response = await fetch(
      `https://viacep.com.br/ws/${formatedCep}/json/ `
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar os dados do endereço.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ocorreu um erro:", error);
    return null;
  }
};
