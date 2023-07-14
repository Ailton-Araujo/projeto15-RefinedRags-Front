import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import api from "../../services/Api";

export default function SignIn() {

    const [formData, setFormData] = useState({email: "", password: ""});
    const [loading, setLoading] = useState(false);
    const {auth, signIn} = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        const promise = api.signIn({...formData});
        promise.then((res) => {
            setLoading(false);
            signIn(res.data);
            navigate("/checkout")
        })
        promise.catch((err) => {
            setLoading(false);
            alert(err.response.data);
        });
        setLoading(false);
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <SignInContainer>
        <h1>Refined Rags</h1>
          <form onSubmit={handleSubmit}>
            <input placeholder="E-mail" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required disabled={loading}/>
            <input placeholder="Password" type="password" name="password" autoComplete="current-password" value={formData.password} onChange={handleChange} required disabled={loading}/>
            <button disabled={loading}>Entrar</button>
            <p>New customer? <Link to="/signup">Start here</Link></p>
          </form>
            
        </SignInContainer>
      )

}

const SignInContainer = styled.div`
    background-color: #EEEEEE;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    p {
        margin-top: 5px;
    }
    width: 100vw;
    height: 100vh;
    padding: 25px;
`