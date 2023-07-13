import axios from "axios";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

function tokenProvider(auth) {
  return {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
}

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
