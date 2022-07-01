import { Botao, ContainerGeral, ContainerInterno, Texto, TextoBotao } from "./style";
import Gradiente from "./../../components/Gradiente/index";
import CabecalhoLogo from "../../components/CabecalhoLogo";
import { useNavigation } from "@react-navigation/native";

const CompraEfetuada = () => {
  const navigation = useNavigation();

  function openScreenTelaIncial() {
    navigation.navigate("TelaInicial");
  }

  return (
    <ContainerGeral>
      <Gradiente posicao="top" />
      <ContainerInterno>
      <CabecalhoLogo />
        <Texto>Compra efetuada com sucesso!</Texto>
        <Botao onPress={openScreenTelaIncial}>
          <TextoBotao>Voltar</TextoBotao>
        </Botao>
      </ContainerInterno>
      <Gradiente posicao="bottom" />
    </ContainerGeral>
  );
};

export default CompraEfetuada;