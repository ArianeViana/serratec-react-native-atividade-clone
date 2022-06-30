import styled from "styled-components/native";
import colors from "../../Theme/colors";


export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Header = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: ${colors.secondary};
  text-align: center;
  margin-left: 25px;
`;

export const Imagem = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Body = styled.View`
  height: 400px;
  justify-content: space-evenly;
`;

export const TextoSelecionarImagem = styled.Text`
  font-size: 13px;
  align-self: center;
  color: ${colors.secondary};
`;

export const IconeTexto = styled.TouchableOpacity`
  margin-left: 3px;
`;

export const BotaoCadastrar = styled.TouchableOpacity`
  width: 120px;
  height: 30px;
  background-color: ${colors.tertiary};
  align-self: center;
  margin-top: 25px;
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
