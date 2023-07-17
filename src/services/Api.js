import axios from "axios";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

function tokenProvider(auth) {
  return {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
}

function signUpPost(body) {
  const promise = axios.post("/signup", body);
  return promise;
}

function signInPost(body) {
  const promise = axios.post("/signin", body);
  return promise;
}

function getUser(success, auth) {
  axios
    .get("/user", tokenProvider(auth))
    .then((response) => {
      success(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
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

function postShopping(obj, auth, success, failure) {
  success();
  // axios
  //   .post("/checkout", obj, tokenProvider(auth))
  //   .then(() => {
  //     success();
  //   })
  //   .catch((error) => {
  //     failure(error.response.data);
  //   });
}

function getAddress(zipCode, success, failure) {
  axios
    .get(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then((res) => {
      success(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error.response);
    });
}

export {
  getProducts,
  getUser,
  getAddress,
  postShopping,
  signInPost,
  signUpPost,
};
