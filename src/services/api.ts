import axios from "axios";

export const api = axios.create ({
  baseURL: 'https://dev-marcilio-afya.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});