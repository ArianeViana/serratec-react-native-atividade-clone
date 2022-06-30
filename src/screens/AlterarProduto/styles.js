import styled from "styled-components/native";
import colors from "../../Theme/colors";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: space-between;
  
`;

export const Topo = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 25px;
  margin-bottom: 20px;
  
`;

export const Titulo = styled.Text`
  color: #000080;
  font-weight: bold;
  font-size: 16pt;
  width: 100px;
  
`;
export const Pacote = styled.View`
  justify-items: baseline;
`;

export const CaixaTexto = styled.View`
  height: 35px;
  width: 60%;
  border: 1mm solid;
  border-color: ${colors.primary};
  border-radius: 8;
  box-shadow: 0px 5px 5px #BEBEBE;
  margin-top: 25px;
  align-self: center;
`;

export const TextoCaixa = styled.Text`
  color: #000080;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 10px;
`;

export const Botao = styled.TouchableOpacity`
  height: 50px;
  width: 150px;
  border: 1mm solid aqua;
  border-radius: 8px;
  box-shadow: 0px 5px 5px #BEBEBE;
  margin-top: 22px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  color: #fff;
  
  align-self: center ;
  
`; 

export const TextoBotao = styled.Text`
    font-size: 12pt;
    font-weight: bold;
    color: #000080;
`;

export const Imagem = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const SeleImagem = styled.Text`
  margin-top: 10px;
  align-self: center;
  color: #000080;
  font-weight: bold;
`;
export const Logout = styled.TouchableOpacity`
color: #000080;

`;