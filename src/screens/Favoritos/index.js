import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Imagem,
  ImagemCard,
  Cards,
  TextCards,
  InconeX,
} from "./styles.js";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Gradiente from "./../../components/Gradiente/index";
import Icones from "./../../components/Icones/index";

const Lista = [
  {
    id: 1,
    imagem: require("../../../assets/2.png"),
    produto: "Produto 1",
    preco: "Preço R$ 50",
    estoque: "1 Unidades em estoque",
  },
  {
    id: 2,
    imagem: require("../../../assets/5.jpg"),
    produto: "Produto 5",
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
    <InconeX>
      <AntDesign name="close" size={18} color="black" />
    </InconeX>
    <ImagemCard source={imagem} />
    <TextCards style={{ fontWeight: "bold" }}>{produto}</TextCards>
    <TextCards style={{ fontWeight: "bold" }}>{preco}</TextCards>
    <TextCards>{estoque}</TextCards>
  </Cards>
);

const Favoritos = () => {
  const navigation = useNavigation();

  function openScreenHome() {
    navigation.navigate("Home");
  }

  const itemRenderizado = ({ item }) => (
    <Item
      imagem={item.imagem}
      produto={item.produto}
      preco={item.preco}
      estoque={item.estoque}
    />
  );

  return (
    <Container>
      <Gradiente posicao="top" />
      <Header>
        <TouchableOpacity>
          <AntDesign
            name="logout"
            size={20}
            color="black"
            onPress={openScreenHome}
          />
        </TouchableOpacity>
        <Title>Favoritos</Title>
        <Imagem source={require("../../../assets/SplashScreen.png")} />
      </Header>
      <View>
        <FlatList
          data={Lista}
          renderItem={itemRenderizado}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Icones />
      <Gradiente posicao="bottom" />
    </Container>
  );
};
export default Favoritos;
