import { Botao, ContainerGeral, ContainerInterno, Texto, TextoBotao } from "./styles";
import Gradiente from "./../../components/Gradiente/index";
import CabecalhoLogo from "../../components/CabecalhoLogo";
import { useNavigation } from "@react-navigation/native";

const ConfirmCadastro = () => {
  const navigation = useNavigation();

  function openScreenLogin() {
    navigation.navigate("Login");
  }

  return (
    <ContainerGeral>
      <Gradiente posicao="top" />
      <ContainerInterno>
      <CabecalhoLogo />
        <Texto>Usuário cadastrado com sucesso!</Texto>
        <Botao onPress={openScreenLogin}>
          <TextoBotao>Login</TextoBotao>
        </Botao>
      </ContainerInterno>
      <Gradiente posicao="bottom" />
    </ContainerGeral>
  );
};

export default ConfirmCadastro;