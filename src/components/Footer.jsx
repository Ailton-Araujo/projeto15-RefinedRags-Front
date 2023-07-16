import { styled } from "styled-components";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <Bottom>
      <div>
        <h2>Refined Rags</h2>
        <h2>Contact us</h2>
        <p>Phone: +1 (0) 000 0000 001</p>
        <p>Email: refined@rags.com</p>
        <p>Address:1234 Street, Brazil</p>
      </div>
      <SocialMedia>
        <SocialIcon url="https://instagram.com"></SocialIcon>
        <SocialIcon url="https://facebook.com"></SocialIcon>
        <SocialIcon url="https://twitter.com"></SocialIcon>
        <SocialIcon url="https://tiktok.com"></SocialIcon>
      </SocialMedia>
    </Bottom>
  );
}

const Bottom = styled.footer`
  width: 100%;
  height: 150px;
  background: #f6f6f6;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  color: #726cd9;
  font-weight: 400;
  font-size: 14px;
  h2 {
    font-size: 16px;
    margin-bottom: 3px;
    font-weight: 700;
  }
  p {
    margin-bottom: 5px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-around;
`;
