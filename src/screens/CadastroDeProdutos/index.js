import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  Title,
  Header,
  Body,
  InputTexto,
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

const CadastroProdutos = () => {
  const navigation = useNavigation();

  function openScreenHome() {
    navigation.navigate("Home");
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
            onPress={openScreenHome}
          />
        </TouchableOpacity>
        <Title>Cadastro de Produto </Title>
        <Imagem source={require("../../../assets/SplashScreen.png")} />
      </Header>
      <Body>
        <InputTexto placeholder="Nome" />
        <InputTexto placeholder="Preço R$" />
        <InputTexto placeholder="Quantidade em Estoque" />
        <InputTexto placeholder="Imagem" />
        <TextoSelecionarImagem>
          Selecionar Imagem
          <IconeTexto>
            <AntDesign name="upload" size={13} color="#141568" />
          </IconeTexto>
        </TextoSelecionarImagem>
        <BotaoCadastrar>
          <TextoBotaoCadastrar>Cadastrar</TextoBotaoCadastrar>
        </BotaoCadastrar>
      </Body>
      <Icones />
      <Gradiente posicao="bottom"/>
    </Container>
  );
};

export default CadastroProdutos;
