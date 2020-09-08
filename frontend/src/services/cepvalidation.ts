import axios from 'axios';

export default async function cepValidation(cep: string) {
  const data = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
  return data.data;
}
