import React from "react";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  LogOut,
  Title,
  Imagem,
  ImagemCard,
  Cards,
  TextCards,
} from "./styles.js";
import {
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Gradiente from './../../components/Gradiente/index';
import Icones from "./../../components/Icones/index";

const Lista = [
  {
    id: 1,
    imagem: require("../../../assets/2.png"),
    produto: "produto 1",
    preco: "Preço R$ 50",
    estoque: "1 Unidades em estoque",
  },
  {
    id: 2,
    imagem: require("../../../assets/5.jpg"),
    produto: "produto 5",
    preco: "Preço R$40",
    estoque: "20 Unidades em estoque",
  },
  {
    id: 3,
    imagem: require("../../../assets/6.jpg"),
    produto: "produto 6",
    preco: "Preço R$ 70",
    estoque: "8 Unidades em estoque",
  },
];

const Item = ({ produto, preco, estoque, imagem }) => (
  <Cards>
    <ImagemCard source={imagem} />
    <TextCards>{produto}</TextCards>
    <TextCards>{preco}</TextCards>
    <TextCards>{estoque}</TextCards>
  </Cards>
);

const Favoritos = () => {
  const navigation = useNavigation();

  function openScreenCadastroDeProdutos() {
    navigation.navigate("CadastroProdutos");
  }

  function openScreenHome() {
    navigation.navigate("Home");
  }

  function openScreenFavoritos() {
    navigation.navigate("Favoritos");
  }

  const itemRenderizado = ({ item }) => (
    <Item imagem={item.imagem} produto={item.produto} preco={item.preco} estoque={item.estoque}   />
  );

  return (
    <Container>
       <Gradiente posicao="top"/>
      <Header>
        <LogOut>
          <AntDesign
            name="logout"
            size={12}
            color="black"
            onPress={openScreenHome}
          />
        </LogOut>
        <Title>Favoritos</Title>
        <Imagem source={require("../../../assets/SplashScreen.png")} />
      </Header>
      <FlatList
        data={Lista}
        renderItem={itemRenderizado}
        keyExtractor={(item) => item.id}
      />
      <Icones />
      <Gradiente posicao="bottom"/>
    </Container>
  );
};
export default Favoritos;
