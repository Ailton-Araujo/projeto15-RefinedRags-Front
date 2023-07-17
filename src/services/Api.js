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
  console.log("teste");

  success({ name: "teste" });

  // axios
  //   .get("/user", tokenProvider(auth))
  //   .then((response) => {
  //     success(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error.response.data);
  //   });
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

export { getProducts, getUser, signInPost, signUpPost };
