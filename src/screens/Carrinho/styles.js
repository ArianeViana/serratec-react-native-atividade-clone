import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import colors from "../../Theme/colors";

export const Container = styled.View`
  background-color: ${colors.terciary};
  flex: 1;
  justify-content: space-between;
`;

export const Cabecalho = styled.View`
  height: 150px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Texto = styled.Text`
  font-size: 18px;
  color: #000080;
  font-weight: bold;
`;

export const Imagem = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const TextoBotao = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000080;
`;

export const Botao = styled.Pressable`
  background-color: #ffffff;
  padding: 5px 40px;
  border: 3px solid #0ff;
  border-radius: 7px;
  box-shadow: 0 5px 5px rgba(0, 50, 50, 0.6);
`;

export const Card0 = styled.View`
  background-color: #ffffff;
  width: 95%;
  height: 200px;
  border: 3px solid #0ff;
  border-radius: 7px;
  box-shadow: 0 5px 5px rgba(0, 50, 50, 0.6);
  align-self: center;
`;

export const Ver = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  item: {
    padding: 9,
    fontSize: 10,
    height: 32,
    color: "#000080",
    fontWeight: "bold",
    width: "145px",
  },
});
