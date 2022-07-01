import { AntDesign, Feather } from "@expo/vector-icons";
import {
  Container,
  Title,
  Header,
  Imagem,
  IconesEditar,
  SubTituloCategoria,
  EditarImagem,
  ImagemCriadores,
  TituloTexto,
  TextoLoren,
  ImagemCategoria,
  ImagemCentro,
  Criadores,
  EditarNomes,
  NomeCriadores,
  IconeLixo,
  EditarTecs,
  TextoTecs,
} from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Gradiente from "../../components/Gradiente/index";
import Icones from "./../../components/Icones/index";

const TelaInicial = () => {
  const navigation = useNavigation();

  function openScreenLogOut() {
    navigation.navigate("Login");
  }

  function openScreenCadastroCategoria() {
    navigation.navigate("CadastroCategoria");
  }

  function openScreenAlterarCategoria() {
    navigation.navigate("AlterarCategoria");
  }

  return (
    <Container>
      <Gradiente posicao="top" />
      <Header>
        <TouchableOpacity>
          <AntDesign
            name="logout"
            size={20}
            color="black"
            onPress={openScreenLogOut}
          />
        </TouchableOpacity>
        <Title>MarketPlace</Title>
        <Imagem source={require("../../../assets/logo.jpeg")} />
      </Header>
      <TituloTexto>Sobre Nós...</TituloTexto>
      <TextoLoren>
        Lorem Ipsum is simply dummy text of the printing and
      </TextoLoren>
      <TextoLoren>
        typesetting industry. Lorem Ipsum has been the industry's
      </TextoLoren>
      <TextoLoren>
        unchanged. It was popularised in the 1960s with the release of
      </TextoLoren>
      <TextoLoren>
        Letraset sheets containing Lorem Ipsum passages, and more
      </TextoLoren>
      <TextoLoren>
        recently with desktop publishing software like Aldus PageMaker
      </TextoLoren>
      <TextoLoren>including versions of Lorem Ipsum.</TextoLoren>
      <SubTituloCategoria>
        <TituloTexto>Categorias</TituloTexto>
        <TouchableOpacity>
          <AntDesign
            name="plus"
            size={20}
            color="#05148c"
            onPress={openScreenCadastroCategoria}
          />
        </TouchableOpacity>
      </SubTituloCategoria>
      <IconesEditar>
        <IconeLixo>
          <Feather name="trash" size={20} color="red" />
        </IconeLixo>
        <TouchableOpacity>
          <AntDesign name="edit" size={24} color="black" onPress={openScreenAlterarCategoria} />
        </TouchableOpacity>
      </IconesEditar>

      <EditarImagem>
        <ImagemCategoria source={require("../../../assets/3.jpg")} />
        <ImagemCentro source={require("../../../assets/5.jpg")} />
        <ImagemCategoria source={require("../../../assets/1.jpg")} />
      </EditarImagem>
      <EditarTecs>
        <TextoTecs>Tec3</TextoTecs>
        <TextoTecs>Tec1</TextoTecs>
        <TextoTecs>Tec2</TextoTecs>
      </EditarTecs>

      <Criadores>
        <TituloTexto>Criadores</TituloTexto>
        <EditarImagem>
          <ImagemCriadores source={require("../../../assets/People4.jpg")} />
          <ImagemCriadores source={require("../../../assets/People3.jpg")} />
          <ImagemCriadores source={require("../../../assets/People2.jpg")} />
          <ImagemCriadores source={require("../../../assets/People1.jpg")} />
        </EditarImagem>
        <EditarNomes>
          <NomeCriadores>Alex</NomeCriadores>
          <NomeCriadores>Beatriz</NomeCriadores>
          <NomeCriadores>Carlos</NomeCriadores>
          <NomeCriadores>Alie</NomeCriadores>
        </EditarNomes>
      </Criadores>
      <Icones />
      <Gradiente posicao="bottom" />
    </Container>
  );
};

export default TelaInicial;
