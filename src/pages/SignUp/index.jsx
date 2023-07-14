import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import api from "../../services/Api";

export default function SignUp() {

    const [formData, setFormData] = useState({fullName: "", email: "", password: "", passwordConfirmation: "", subscription: true});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        if(formData.password !== formData.passwordConfirmation){
            setLoading(false);
            return alert("The password doesn't match with the password confirmation")
        }
        const data = {...formData};
        delete data.passwordConfirmation;
        const promise = api.signUp(data);
        promise.then(() => {
            setLoading(false);
            navigate("/signin")
        })
        promise.catch((err) => {
            setLoading(false);
            alert(err.response.data);
        })
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function handleSubscriptionChange(){
        setFormData({...formData, subscription: !formData.subscription});
    }

    return (
        <SignUpContainer>
        <h1>Refined Rags</h1>
          <form onSubmit={handleSubmit}>
            <input placeholder="Full Name" name="fullName" type="text" autoComplete="name" value={formData.fullName} onChange={handleChange} required disabled={loading}/>
            <input placeholder="E-mail" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required disabled={loading}/>
            <input placeholder="Password" name="password" type="password" autoComplete="new-password" value={formData.password} onChange={handleChange} required disabled={loading}/>
            <input placeholder="Password Confirmation" name="passwordConfirmation" type="password" autoComplete="new-password" value={formData.passwordConfirmation} onChange={handleChange} required disabled={loading}/>
            <div>
                <input type="checkbox" defaultChecked="true" name="subscription" onChange={handleSubscriptionChange} disabled={loading}/>
                <label htmlFor="subscription">Subscribe to receive promotional emails</label>
            </div>
            <button disabled={loading}>Entrar</button>
            <p>Already have an account? <Link to="/signin">Sign in</Link></p>
          </form>      
        </SignUpContainer>
      )
}

const SignUpContainer = styled.div`
    background-color: #EEEEEE;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    p {
        margin-top: 10px;
    }
    width: 100vw;
    height: 100vh;
    padding: 25px;
    div{
        display: flex;
        align-items:center;
        text-align: center;
        label{
            margin-top:10px;
        }
    }
`