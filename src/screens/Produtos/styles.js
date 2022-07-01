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

export const MiniCard = styled.View`
  width: 80px;
  height: 20px;
  border: 1px solid;
  border-radius: 5px;
  border-color: #00ffff;
  margin-left: 10px;
  margin-top: 8px;
`;

export const Cards = styled.View`
  margin: 15px;
  width: 40%;
  height: 180px;
  background-color: white;
  border: 1px solid;
  border-color: #00ffff;
  border-radius: 5px;
  box-shadow: 0px 5px 5px #2f4f4f;
`;

export const Descricao = styled.View`
  border: 0px;
  margin-top: 95px;
`;

export const ImagemCard = styled.Image`
  width: 130px;
  height: 80px;
  border-radius: 5px;
  position: absolute;
  margin-top: 10px;
  margin-left: 5px;
`;

export const TextCards = styled.Text`
  color: ${colors.secondary};
  margin-left: 10px;
  font-size: 12px;
`;

export const QuantidadeProdutos = styled.Text`
  text-align: center;
`;

export const Check = styled.TouchableOpacity`
  width: 30%;
  margin-left: 100px;
  margin-top: -22px;
`;

export const Star = styled.TouchableOpacity`
  width: 30%;
  margin-left: 125px;
  margin-top: -22px;
`;

export const EditarLixo = styled.View`
  flex-direction: row;
`;

export const Editar = styled.TouchableOpacity`
  width: 20%;
  margin-top: 12px;
  margin-left: 5px;
`;

export const Lixo = styled.TouchableOpacity`
  width: 20%;
  margin-top: 12px;
  margin-left: 5px;
`;
