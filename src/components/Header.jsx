import { styled } from "styled-components";
import useAuth from "../hooks/useAuth"
import { Link } from "react-router-dom";

export default function Header() {

    const {auth, signOut} = useAuth();
    console.log(auth)

    return(
        <Top >
            <img src="https://drive.google.com/uc?id=10T5D_D1aHO7kX_jpqe6SRQnjFIoQhCCC"/>
            <div>
            {auth ? <p>Hello, {auth.name}!</p> : ""}
            <ul>
                <li><Link to="/signin" style={{ textDecoration: 'none' }}>Sign In</Link></li>
                <li><Link to="/cart" style={{ textDecoration: 'none' }}>Cart</Link></li>
                <li><Link to="/checkout" style={{ textDecoration: 'none' }}>Check Out</Link></li>
                <li onClick={signOut}>Logout</li>
            </ul>
            </div>
        </Top>
    )
}

const Top = styled.div`
    width: 100%;
    height: 120px;
    background: #F6F6F6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    align-items: center;
    color: #726cd9;
    font-weight:700;
    font-size: 18px;
    div{
        display: flex;
        flex-direction:column;
        height: 100px;
        justify-content: center;
        align-items: flex-end;
    }
    p {
        padding: 10px 10px;
    }
    ul{
        display: flex;
    }
    li{
        padding: 0 10px;
        font-family: 'Roboto', sans-serif;
    }
    li:hover{
        cursor: pointer;
    }
    a:-webkit-any-link {
        text-decoration: none;
        color: inherit;
    }
    img {
        width: 120px;
        border-radius: 98.5px;
        margin-right: 18px;
    }
`
