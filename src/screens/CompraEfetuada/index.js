import { Botao, ContainerGeral, ContainerInterno, Texto, TextoBotao } from "./styles";
import Gradiente from "./../../components/Gradiente/index";
import CabecalhoLogo from "../../components/CabecalhoLogo";


const CompraEfetuada = () => {
  return (
    <ContainerGeral>
      <Gradiente posicao="top" />
      <ContainerInterno>
      <CabecalhoLogo />
        <Texto>Compra efetuada com sucesso!</Texto>
        <Botao>
          <TextoBotao>Voltar</TextoBotao>
        </Botao>
      </ContainerInterno>
      <Gradiente posicao="bottom" />
    </ContainerGeral>
  );
};

export default CompraEfetuada;