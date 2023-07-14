import axios from "axios";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

function tokenProvider(auth) {
  return {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
}

function signUp(body) {
  const promise = axios.post('/signup', body);
  return promise;
}

function signIn(body) {
  const promise = axios.post('/signin', body);
  return promise;
}

const api = {
  signIn,
  signUp
}

export default api;


function getProducts(success, failure) {
  axios
    .get("/")
    .then((response) => {
      success(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}

export { getProducts };
