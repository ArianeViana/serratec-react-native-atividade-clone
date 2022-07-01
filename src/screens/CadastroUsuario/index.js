import { AntDesign } from "@expo/vector-icons";
import Gradiente from "../../components/Gradiente";
import { Container, Cabecalho, Titulo, Imagem, Body, BotaoCadastrar, TextoBotaoCadastrar } from "./styles";
import { TouchableOpacity } from "react-native";
import EntradaTexto from "../../components/EntradaTexto";
import InputEye from './../../components/InputEye/index';

const CadastroUsuario = () => {
  return (
    <Container>
      <Gradiente posicao="top" />
      <Cabecalho>
        <TouchableOpacity>
          <AntDesign
            name="logout"
            size={20}
            color="black"
            // onPress={openScreenHome}
          />
        </TouchableOpacity>
        <Titulo>Cadastro </Titulo>
        <Imagem source={require("../../../assets/logo.jpeg")} />
      </Cabecalho>
      <Body>
        <EntradaTexto placeholder="Nome" />
        <EntradaTexto placeholder="CPF" />
        <EntradaTexto placeholder="Data de Nascimento" />
        <InputEye placeholder="Senha" />
        <InputEye placeholder="Confirmar Senha" />
        <BotaoCadastrar>
          <TextoBotaoCadastrar>Cadastrar</TextoBotaoCadastrar>
        </BotaoCadastrar>
      </Body>
      <Gradiente posicao="bottom" />
    </Container>
  );
};

export default CadastroUsuario;
