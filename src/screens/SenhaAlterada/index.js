import { Botao, ContainerGeral, ContainerInterno, Texto, TextoBotao } from "./style";
import Gradiente from "./../../components/Gradiente/index";
import CabecalhoLogo from "../../components/CabecalhoLogo";


const ConfirmCadastro = () => {
  return (
    <ContainerGeral>
      <Gradiente posicao="top" />
      <ContainerInterno>
      <CabecalhoLogo />
        <Texto>Senha alterada com sucesso!</Texto>
        <Botao>
          <TextoBotao>Login</TextoBotao>
        </Botao>
      </ContainerInterno>
      <Gradiente posicao="bottom" />
    </ContainerGeral>
  );
};

export default ConfirmCadastro;