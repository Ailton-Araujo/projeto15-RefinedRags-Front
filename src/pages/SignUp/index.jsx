import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { signUpPost } from "../../services/Api";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    subscription: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    fullName: false,
    email: false,
    password: false,
    passwordConfirmation: false,
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (formData.password !== formData.passwordConfirmation) {
      setLoading(false);
      return alert("The password doesn't match with the password confirmation");
    }
    const data = { ...formData };
    delete data.passwordConfirmation;
    const promise = signUpPost(data);
    promise.then(() => {
      setLoading(false);
      navigate("/signin");
    });
    promise.catch((err) => {
      setLoading(false);
      alert(err.response.data);
    });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubscriptionChange() {
    setFormData({ ...formData, subscription: !formData.subscription });
  }

  return (
    <SignUpContainer>
      <form onSubmit={handleSubmit}>
        <FormInput
          placeholder="Full Name"
          name="fullName"
          type="text"
          autoComplete="name"
          value={formData.fullName}
          onChange={handleChange}
          required
          disabled={loading}
          onInvalid={() => setError({ ...error, fullName: true })}
          onInput={() => setError({ ...error, fullName: false })}
          err={error.fullName ? 1 : 0}
        />
        <FormInput
          placeholder="E-mail"
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
          onInvalid={() => setError({ ...error, email: true })}
          onInput={() => setError({ ...error, email: false })}
          err={error.email ? 1 : 0}
        />
        <FormInput
          placeholder="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength="3"
          value={formData.password}
          onChange={handleChange}
          required
          disabled={loading}
          onInvalid={() => setError({ ...error, password: true })}
          onInput={() => setError({ ...error, password: false })}
          err={error.password ? 1 : 0}
        />
        <FormInput
          placeholder="Password Confirmation"
          name="passwordConfirmation"
          type="password"
          autoComplete="new-password"
          minLength="3"
          value={formData.passwordConfirmation}
          onChange={handleChange}
          required
          disabled={loading}
          onInvalid={() => setError({ ...error, passwordConfirmation: true })}
          onInput={() => setError({ ...error, passwordConfirmation: false })}
          err={error.passwordConfirmation ? 1 : 0}
        />
        <div>
          <FormInput
            type="checkbox"
            defaultChecked="true"
            name="subscription"
            onChange={handleSubscriptionChange}
            disabled={loading}
          />
          <label htmlFor="subscription">
            Subscribe to receive promotional emails
          </label>
        </div>
        <button
          disabled={
            loading ||
            !formData.email ||
            !formData.fullName ||
            !formData.password ||
            !formData.passwordConfirmation
          }
        >
          Register
        </button>
        <p>
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </form>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.main`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p {
    margin-top: 10px;
  }
  width: 100vw;
  height: calc(100vh - 245px);
  padding: 25px;
  div {
    display: flex;
    align-items: center;
    text-align: center;
    label {
      margin-top: 10px;
    }
  }
`;

export const FormInput = styled.input`
  border-color: ${(props) => (props.err ? "red" : "#CCCCCC")};
  background: ${(props) => (props.err ? "#ffedf4" : "")};
`;
