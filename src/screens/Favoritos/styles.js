import styled from "styled-components/native";
import colors from "../Theme/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  justify-content: flex-start;
`;

export const Header = styled.View`
  height: 100;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const LogOut = styled.TouchableOpacity`
  padding-right: 35px;
`;

export const Title = styled.Text`
  font-size: 15;
  font-weight: bold;
  color: ${colors.secondary};
  text-align: center;
`;

export const Imagem = styled.Image`
  width: 30;
  height: 30;
  border-radius: 50px;
  margin-left: 50px;
`;

export const Cards = styled.View`
  margin: 25px;
  width: 80%;
  height: 70;
  background-color: white;
  align-items: center;
  border: 1px solid;
  border-color: #00ffff;
  box-shadow: 0px 5px 5px #2f4f4f;
`;

export const ImagemCard = styled.Image`
  width: 120;
  height: 60;
  border-radius: 5px;
  
`;

export const TextCards = styled.Text`
  color: ${colors.secondary};
`;

export const Icones = styled.Pressable`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 200px;
  height: 30;
  background-color: #00ffff;
`;
