import React from "react";
import {
  MainContainer,
  Logo,
  StyledButton,
  StyledInput,
  StyledForm,
} from "./LoginPageStyles";
import LogoImg from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { goToSignup } from "../../routes/coordinator";
import { emailPattern, passwordPattern } from "../../constants/patterns";
import { useForm } from "../../hooks/useForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, onChange] = useForm({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <MainContainer>
      <Logo src={LogoImg} alt="Logo Cookenu" />

      <StyledForm onSubmit={login}>
        <StyledInput
          type="email"
          placeholder="E-mail"
          pattern={emailPattern}
          title="Entre com um e-mail válido"
          name="email"
          value={form.email}
          onChange={onChange}
          required
        />

        <StyledInput
          type="password"
          placeholder="Senha"
          pattern={passwordPattern}
          title="Entre com uma senha de pelo menos 6 caracteres"
          name="password"
          value={form.password}
          onChange={onChange}
          required
        />

        <StyledButton>Login</StyledButton>
      </StyledForm>

      <StyledButton onClick={() => goToSignup(navigate)}>
        Fazer Cadastro
      </StyledButton>
    </MainContainer>
  );
};

export default LoginPage;
