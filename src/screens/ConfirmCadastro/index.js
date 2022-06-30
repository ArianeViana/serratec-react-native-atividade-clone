import { Botao, ContainerGeral, ContainerInterno, Texto, TextoBotao } from "./styles";
import Gradiente from "./../../components/Gradiente/index";
import CabecalhoLogo from "../../components/CabecalhoLogo";


const ConfirmCadastro = () => {
  return (
    <ContainerGeral>
      <Gradiente posicao="top" />
      <ContainerInterno>
      <CabecalhoLogo />
        <Texto>Usuário cadastrado com sucesso!</Texto>
        <Botao>
          <TextoBotao>Login</TextoBotao>
        </Botao>
      </ContainerInterno>
      <Gradiente posicao="bottom" />
    </ContainerGeral>
  );
};

export default ConfirmCadastro;