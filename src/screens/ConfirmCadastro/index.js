import { Botao, Fundo, Texto, TextoBotao } from "./styles";
import Gradiente from "./../../components/Gradiente/index";
import CabecalhoLogo from "../../components/CabecalhoLogo"

const ConfirmCadastro = () => {
  return (
    <Fundo>
      <Gradiente posicao="top"/>
      <CabecalhoLogo /> 
      <Texto>Usuário cadastrado com sucesso!</Texto>
      <Botao>
        <TextoBotao>Login</TextoBotao>
      </Botao>
      <Gradiente posicao="bottom"/>
    </Fundo>
  );
};

export default ConfirmCadastro;
