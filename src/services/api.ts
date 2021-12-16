import axios from "axios";

export const api = axios.create ({
  baseURL: 'https://dev-marcilio-afrya.herokuapp.com/',
  headers: {
    'Content-Type': 'text/plain'
  }
});