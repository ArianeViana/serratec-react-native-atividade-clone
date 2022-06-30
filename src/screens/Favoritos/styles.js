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

export const Cards = styled.View`
  margin: 25px;
  width: 80%;
  height: 80px;
  background-color: white;
  border: 1px solid;
  border-color: #00ffff;
  border-radius: 5px;
  box-shadow: 0px 5px 5px #2f4f4f;
  align-self: center;
`;

export const InconeX = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 10px;
  width: 14px;
  height: 14px;
`;

export const ImagemCard = styled.Image`
  width: 120px;
  height: 60px;
  border-radius: 5px;
  position: absolute;
  margin-top: 10px;
  margin-left: 5px;
`;

export const TextCards = styled.Text`
  color: ${colors.secondary};
  text-align: justify;
  margin-left: 130px;
`;
