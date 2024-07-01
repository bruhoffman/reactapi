import React from "react";
import {
  MainContainer,
  Logo,
  StyledButton,
  StyledInput,
  StyledForm,
} from "./SignupPageStyles";
import LogoImg from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { goToSignup } from "../../routes/coordinator";
import {
  emailPattern,
  namePattern,
  passwordPattern,
} from "../../constants/patterns";
import { useForm } from "../../hooks/useForm.js";

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, onChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const signup = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <MainContainer>
      <Logo src={LogoImg} alt="Logo Cookenu" />

      <StyledForm onSubmit={signup}>
        <StyledInput
          type="text"
          placeholder="Nome"
          pattern={namePattern}
          title="O nome precisa de pelo menos 3 caracteres."
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />

        <StyledInput
          type="email"
          placeholder="E-mail"
          pattern={emailPattern}
          title="Entre com um e-mail válido."
          name="email"
          value={form.email}
          onChange={onChange}
          required
        />

        <StyledInput
          type="password"
          placeholder="Senha"
          pattern={passwordPattern}
          title="Entre com uma senha de pelo menos 6 caracteres."
          name="password"
          value={form.password}
          onChange={onChange}
          required
        />

        <StyledButton>Cadastrar</StyledButton>
      </StyledForm>
    </MainContainer>
  );
};

export default SignupPage;
