import axios from "axios";

export const api = axios.create ({
  baseURL: 'https://sistemadeagendamento-san5v.ondigitalocean.app/',
  headers: {
    'Content-Type': 'application/json'
  }
});