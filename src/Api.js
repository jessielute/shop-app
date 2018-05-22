import axios from 'axios';
const REACT_APP_BACKEND_URL = 'http://localhost:8080';
async function fetchCart() {
  debugger;
  return axios.get (`${REACT_APP_BACKEND_URL}/cart/`);
};

async function addToCart({ id, name, price }) {
  return axios.post(`${REACT_APP_BACKEND_URL}/cart/`, {
    id,
    name,
    price
  });
}

export {
  fetchCart,
  addToCart
};