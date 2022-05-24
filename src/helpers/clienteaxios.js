import axios from "axios";

const BASE_URI = "https://shielded-citadel-90167.herokuapp.com/";
export const tokenKey = "Domesticapp";


const clienteAxios = axios.create({
  baseURL: BASE_URI,
});

export default clienteAxios;
