import styled from "styled-components/native";
import colors from "../../Theme/colors"


export const ContainerGeral = styled.View`
  background-color: ${colors.terciary};
  flex: 1;
`;

export const ContainerInterno = styled.View`
  flex: 0.80;
  justify-content: space-around;
  align-items: center;
`;

export const Texto = styled.Text`
  font-size: 25px;
  color: ${colors.secondary};
  font-weight: bold;
  text-align: center;
`;

export const Botao = styled.Pressable`
  background-color: ${colors.terciary};
  padding: 5px 40px;
  border: 3px solid #0ff;
  border-radius: 10px;
  box-shadow: 0px 5px 5px #2f4f4f;
`;

export const TextoBotao = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.secondary};
`;