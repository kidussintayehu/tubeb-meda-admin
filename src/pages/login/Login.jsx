import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://zoetalentsolutions.com/wp-content/uploads/2017/04/Office-Administration-and-Management-Course.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;


const Login = () => {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const dispatch = useDispatch();
      let navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
        navigate("/home" )
    };

    return (
        <Container>
        <Wrapper>
          <Title>ADMIN LOGIN</Title>
          <Form>
            <Input
              placeholder="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={
        username === "" || password === "" ? true : false
    } >
              LOGIN
            </Button>
            
           
          </Form>
        </Wrapper>
      </Container>
    );
};
export default Login