import styled from "styled-components/native";
import colors from "../Theme/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Header = styled.View`
  height: 100;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 23;
  font-weight: bold;
  color: ${colors.secondary};
  text-align: center;
  margin-left: 25;
`;

export const Imagem = styled.Image`
  width: 50;
  height: 50;
  border-radius: 50px;
`;

export const InputTexto = styled.TextInput`
  width: 100%;
  height: 35;
  color: ${colors.secondary};
  font-size: 15;
  padding: 10px;
  width: 60%;
  background-color: ${colors.tertiary};
  border-radius: 10px;
  border: 1px solid;
  border-color: ${colors.primary};
  height: 35;
  align-self: center;
  box-shadow: 0px 5px 5px #2f4f4f;
`;

export const Body = styled.View`
  height: 400;
  justify-content: space-evenly;
`;

export const TextoSelecionarImagem = styled.Text`
  font-size: 13;
  align-self: center;
  color: ${colors.secondary};
`;

export const IconeTexto = styled.TouchableOpacity`
  margin-left: 3;
`;

export const BotaoCadastrar = styled.TouchableOpacity`
  width: 120;
  height: 30;
  background-color: ${colors.tertiary};
  align-self: center;
  margin-top: 25;
  border-radius: 10px;
  border: 1px solid;
  justify-content: center;
  align-items: center;
  border-color: ${colors.primary};
  box-shadow: 0px 5px 5px #2f4f4f;
`;

export const TextoBotaoCadastrar = styled.Text`
  color: #05148c;
  font-weight: bold;
`;
