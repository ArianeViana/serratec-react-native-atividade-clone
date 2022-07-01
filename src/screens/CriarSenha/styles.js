import styled from "styled-components/native";
import colors from "../../Theme/colors";

export const Container = styled.View`
  background-color: ${colors.terciary};
  flex: 1;
`;

export const Cabecalho = styled.View`
  align-items: center;
`;

export const Body = styled.View`
  flex: 0.9;
  justify-content: space-evenly;
`;

export const Texto = styled.Text`
  font-size: 25px;
  color: ${colors.secondary};
  font-weight: bold;
  text-align: center;
`;

export const TextoBotao = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000080;
  padding-bottom: 1;
`;

export const Botao = styled.Pressable`
  align-self: center;
  background-color: #ffffff;
  padding: 5px 40px;
  border: 1px solid #0ff;
  border-radius: 10px;
  box-shadow: 0px 5px 5px #2f4f4f;
`;
