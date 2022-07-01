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
  font-size: 23;
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

export const InputTexto = styled.TextInput`
  width: 100%;
  height: 35px;
  color: ${colors.secondary};
  font-size: 15;
  padding: 10px;
  width: 60%;
  background-color: ${colors.tertiary};
  border-radius: 10px;
  border: 1px solid;
  border-color: ${colors.primary};
  height: 35px;
  align-self: center;
  box-shadow: 0px 5px 5px #2f4f4f;
`;


export const TextoSelecionarImagem = styled.Text`
  font-size: 13;
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

export const IconesEditar = styled.View`
flex-direction: row;
justify-content: center;
margin-left: 150px;

`;

export const IconeLixo = styled.TouchableOpacity`
  margin-right: 5px;
`;

export const EditarImagem = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ImagemCriadores = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  border: 3px solid;
  border-color: #05148c;
`;

export const TituloTexto = styled.Text`
  color: ${colors.secondary};
  font-size: 25;
  
`;

export const SubTituloCategoria = styled.View`
flex-direction: row;
`;


export const TextoLoren = styled.Text`
  font-size: 10;
  text-align: center;
  font-weight: bold;
  align-self: center;
`;

export const ImagemCategoria = styled.Image`
  width: 70px;
  height: 100px;
  border-radius: 10px;
  margin-top: 60px;
`;

export const ImagemCentro = styled.Image`
  width: 210px;
  height: 160px;
  border-radius: 10px;
  `;

export const Criadores = styled.View`
  /* margin-top: 150px; */
`;

export const EditarNomes = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const NomeCriadores = styled.Text`
    color: #05148c;
    margin: 3px;
    padding: 10px;
    font-weight: bold;
`;

export const EditarTecs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  margin-left: 30px;
`;



export const TextoTecs = styled.Text`
  color: #05148c;
  font-weight: bold;
`;

