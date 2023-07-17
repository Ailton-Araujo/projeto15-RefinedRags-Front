import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { signInPost } from "../../services/Api";
import { FormInput } from "../SignUp";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ email: false, password: false });
  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const promise = signInPost({ ...formData });
    promise.then((res) => {
      setLoading(false);
      signIn(res.data);
      navigate("/");
    });
    promise.catch((err) => {
      setLoading(false);
      alert(err.response.data);
    });
    setLoading(false);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <SignInContainer>
      <form onSubmit={handleSubmit}>
        <FormInput
          placeholder="E-mail"
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          onInvalid={() => setError({ ...error, email: true })}
          onInput={() => setError({ ...error, email: false })}
          err={error.email ? 1 : 0}
          required
          disabled={loading}
        />
        <FormInput
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          minLength="3"
          value={formData.password}
          onChange={handleChange}
          onInvalid={() => setError({ ...error, password: true })}
          onInput={() => setError({ ...error, password: false })}
          err={error.password ? 1 : 0}
          required
          disabled={loading}
        />
        <button disabled={loading || !formData.email || !formData.password}>
          Sign In
        </button>
        <p>
          New customer? <Link to="/signup">Start here</Link>
        </p>
      </form>
    </SignInContainer>
  );
}

const SignInContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 15px;
  p {
    margin-top: 10px;
  }
  width: 100vw;
  height: calc(100vh - 285px);
  padding: 25px;
`;
