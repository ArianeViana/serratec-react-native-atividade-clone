import styled from "styled-components/native";
import colors from "../../Theme/colors";

export const ContainerLogin = styled.View`
  flex: 1;
  background-color: ${colors.tertiary};
  /* align-items: center; */
`;

export const Header = styled.View`
  height: 200px;
  align-self: center;
  justify-content: center;
`;

export const Body = styled.View`
  height: 170px;
  justify-content: space-evenly;
`;

export const Titulo = styled.Text`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 800;
  line-height: 22px;
  align-self: center;
`;

export const CliqueAqui = styled.TouchableOpacity`
  height: 30px;
  align-items: center;
  justify-content: center;

`;

export const TextoCliqueAqui = styled.Text`
  color: ${colors.secondary};
  font-size: 11px;
  font-weight: 700;
  line-height: 12px;
`;

export const TextoNavegacao = styled.TouchableOpacity`
  color: ${colors.secondary};
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  font-family: "Roboto";
`;

export const BotaoEntrar = styled.View`
height: 100px;
justify-content: center;


`
export const Botao = styled.TouchableOpacity`
  padding: 7px;
  box-sizing: border-box;
  height: 33px;
  width: 131px;
  background-color: ${colors.tertiary};
  border: 2px solid ${colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  align-self: center;
`;

export const TextoBotao = styled.Text`
  color: ${colors.secondary};
  align-self: center;
  font-size: 12px;
  font-weight: 800;
  line-height: 15px;
`;
