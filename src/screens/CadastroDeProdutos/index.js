import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  Title,
  Header,
  Body,
  BotaoCadastrar,
  TextoBotaoCadastrar,
  Imagem,
  TextoSelecionarImagem,
  IconeTexto,
} from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Icones from "./../../components/Icones/index";
import Gradiente from './../../components/Gradiente/index';
import EntradaTexto from './../../components/EntradaTexto/index';

const CadastroProdutos = () => {
  const navigation = useNavigation();

  function openScreenLogout() {
    navigation.navigate("Login");
  }

  function openScreenCadastroProdutos() {
    navigation.navigate("CadastroProdutos");
  }

  return (
    <Container>
      <Gradiente posicao="top"/>
      <Header>
        <TouchableOpacity>
          <AntDesign
            name="logout"
            size={20}
            color="black"
            onPress={openScreenLogout}
          />
        </TouchableOpacity>
        <Title>Cadastro de Produto </Title>
        <Imagem source={require("../../../assets/logo.jpeg")} />
      </Header>
      <Body>
        <EntradaTexto placeholder="Nome" />
        <EntradaTexto placeholder="Preço R$" />
        <EntradaTexto placeholder="Quantidade em Estoque" />
        <EntradaTexto placeholder="Imagem" />
        <TextoSelecionarImagem>
          Selecionar Imagem
          <IconeTexto>
            <AntDesign name="upload" size={13} color="#141568" />
          </IconeTexto>
        </TextoSelecionarImagem>
        <BotaoCadastrar onPress={openScreenCadastroProdutos}>
          <TextoBotaoCadastrar>Cadastrar</TextoBotaoCadastrar>
        </BotaoCadastrar>
      </Body>
      <Icones />
      <Gradiente posicao="bottom"/>
    </Container>
  );
};

export default CadastroProdutos;
