import { Botao, Fundo, Texto, TextoBotao } from "./styles";
import Gradiente from "./../../components/Gradiente/index";
import CabecalhoLogo from "../../components/CabecalhoLogo"

const ConfirmCadastro = () => {
  return (
    <Fundo>
      <Gradiente posicao="top" cor1="#cbffff" cor2="transparent"/>
      <CabecalhoLogo /> 
      <Texto>Usuário cadastrado com sucesso!</Texto>
      <Botao>
        <TextoBotao>Login</TextoBotao>
      </Botao>
      <Gradiente posicao="bottom" cor1="transparent" cor2="#cbffff"/>
    </Fundo>
  );
};

export default ConfirmCadastro;
