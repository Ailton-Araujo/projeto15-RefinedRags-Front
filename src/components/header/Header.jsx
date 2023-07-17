import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import PrevCart from "./PrevCart";

export default function Header() {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const { auth, signOut } = useAuth();
  const { user, userSignIn, userSignOut } = useUser();
  console.log(auth);

  useEffect(() => {
    if (auth) {
      userSignIn(auth);
    }
  }, [auth]);

  return (
    <Top>
      <img
        src="https://drive.google.com/uc?id=10T5D_D1aHO7kX_jpqe6SRQnjFIoQhCCC"
        onClick={() => {
          navigate("/");
        }}
      />
      <div>
        {Object.values(user).length !== 0 ? <p>Hello, {user.name}!</p> : ""}
        <ul>
          {auth ? (
            ""
          ) : (
            <li>
              <Link to="/signin" style={{ textDecoration: "none" }}>
                Sign In
              </Link>
            </li>
          )}
          {auth ? (
            <li
              onClick={() => {
                signOut(), userSignOut();
              }}
            >
              Logout
            </li>
          ) : (
            ""
          )}
          <li>
            <Link
              to="/cart"
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              Cart
            </Link>
          </li>
          <li>
            <Link to="/checkout" style={{ textDecoration: "none" }}>
              CheckOut
            </Link>
          </li>
        </ul>
      </div>
      {isShown && <PrevCart />}
    </Top>
  );
}

const Top = styled.header`
  width: 100%;
  height: 120px;
  background: #f6f6f6;
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
  font-weight: 700;
  font-size: 18px;
  position: relative;
  div {
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: center;
    align-items: flex-end;
  }
  p {
    padding: 10px 10px;
  }
  ul {
    display: flex;
  }
  li {
    padding: 0 10px;
    font-family: "Roboto", sans-serif;
  }
  li:hover {
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
    cursor: pointer;
  }
`;
