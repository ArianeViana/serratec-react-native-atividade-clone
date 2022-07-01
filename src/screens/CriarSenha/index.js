import React from "react";
import CabecalhoLogo from "../../components/CabecalhoLogo";
import { Container, Texto, Botao, TextoBotao, Body, Cabecalho } from "./styles";
import Gradiente from "./../../components/Gradiente/index";
import InputEye from "./../../components/InputEye/index";

const CriarSenha = () => {
  return (
    <Container>
      <Gradiente posicao="top" />
      <Body>
        <Cabecalho>
          <CabecalhoLogo />
        </Cabecalho>
        <Texto>Criar Senha</Texto>

        <InputEye placeholder="Digite sua nova senha" />
        <InputEye placeholder="Repita sua nova senha" />

        <Botao>
          <TextoBotao>ALTERAR</TextoBotao>
        </Botao>
      </Body>
      <Gradiente posicao="bottom" />
    </Container>
  );
};

export default CriarSenha;
