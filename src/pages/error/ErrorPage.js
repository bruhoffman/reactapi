import React from "react";
import { MainContainer, MessageSection, StyledImg } from "./ErrorPageStyled";
import ErrorImg from "../../assets/error.png";

const ErrorPage = () => {
  return (
    <MainContainer>
      <MessageSection>
        <StyledImg src={ErrorImg} />
        <h1>Erro 404: Página Não Encontrada</h1>
      </MessageSection>
    </MainContainer>
  );
};

export default ErrorPage;
