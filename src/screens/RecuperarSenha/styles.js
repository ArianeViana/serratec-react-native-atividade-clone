import styled from "styled-components/native";
import colors from "../../Theme/colors";

export const ContainerRecuperarS = styled.View`
  flex: 1;
  background-color: ${colors.tertiary};
`;

export const ContainerIcone = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LogoRecuperarS = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-content: center;
  align-items: center;
`;

export const TituloRecuperarS = styled.Text`
  font-size: 20px;
  color: ${colors.secondary};
  margin: 50px;
  font-weight: 800;
  line-height: 22px;
`;
export const BotaoRecuperarS = styled.TouchableOpacity`
  padding: 7px;
  box-sizing: border-box;
  height: 33px;
  width: 131px;
  background-color: ${colors.tertiary};
  border: 2px solid ${colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  align-self: center;
  margin-top: 35px;
`;

export const TextoBotaoRecuperarS = styled.Text`
  color: ${colors.secondary};
  align-self: center;
  position: absolut;
  font-size: 12px;
  font-weight: 800;
  font-style: normal;
  line-height: 15px;
`;
