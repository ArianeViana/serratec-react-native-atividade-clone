import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Gradiente from "./../../components/Gradiente/index";
import Icones from "./../../components/Icones/index";
import {
  Container,
  Header,
  Title,
  Imagem,
  Cards,
  ImagemCard,
  TextCards,
  MiniCard,
  Descricao,
  QuantidadeProdutos,
  Check,
  Star,
  Editar,
  Lixo,
  EditarLixo,
} from "./styles";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

const Lista = [
  {
    id: 1,
    imagem: require("../../../assets/1.jpg"),
    produto: "Produto 1",
    preco: "Preço R$ 25,00",
    estoque: "10 Unidades em estoque",
    quantidade: "-  2  + ",
  },
  {
    id: 2,
    imagem: require("../../../assets/2.png"),
    produto: "Produto 2",
    preco: "Preço R$50,00",
    estoque: "1 Unidade em estoque",
    quantidade: "-  0  + ",
  },
  {
    id: 3,
    imagem: require("../../../assets/3.jpg"),
    produto: "Produto 3",
    preco: "Preço R$ 30,00",
    estoque: "5 Unidades em estoque",
    quantidade: "-  0  + ",
  },
  {
    id: 4,
    imagem: require("../../../assets/4.jpg"),
    produto: "Produto 4",
    preco: "Preço R$ 100,00",
    estoque: "15 Unidades em estoque",
    quantidade: "-  1  + ",
  },
  {
    id: 5,
    imagem: require("../../../assets/5.jpg"),
    produto: "Produto 5",
    preco: "Preço R$ 40,00",
    estoque: "20 Unidades em estoque",
    quantidade: "-  1  + ",
  },
  {
    id: 6,
    imagem: require("../../../assets/6.jpg"),
    produto: "Produto 6",
    preco: "Preço R$ 70,00",
    estoque: "8 Unidades em estoque",
    quantidade: "-  0  + ",
  },
];

const Produtos = () => {
  const navigation = useNavigation();

  function openScreenLogOut() {
    navigation.navigate("Login");
  }

  function openScreenAlterarProduto() {
    navigation.navigate("AlterarProduto");
  }

  function openScreenCadastroProdutos() {
    navigation.navigate("CadastroProdutos");
  }

  const Item = ({ produto, preco, estoque, imagem, quantidade }) => (
      
    <Cards>
      <ImagemCard source={imagem} />
      <Descricao>
        <TextCards style={{ fontWeight: "bold" }}>{produto}</TextCards>
        <TextCards style={{ fontWeight: "bold" }}>{preco}</TextCards>
        <TextCards>{estoque}</TextCards>
        <MiniCard>
          <QuantidadeProdutos style={{ fontWeight: "bold" }}>
            {quantidade}
          </QuantidadeProdutos>
        </MiniCard>
      </Descricao>
      <Check>
        <Ionicons name="ios-checkmark-sharp" size={20} color="#141568" />
      </Check>
      <Star>
        <Feather name="star" size={20} color="#141568" />
      </Star>
      <EditarLixo>
        <Lixo>
          <Feather name="trash" size={20} color="red" />
        </Lixo>
        <Editar>
          <AntDesign
            name="edit"
            size={20}
            color="#141568"
            onPress={openScreenAlterarProduto}
          />
        </Editar>
      </EditarLixo>
    </Cards>
  );

  const itemRenderizado = ({ item }) => (
    <Item
      imagem={item.imagem}
      produto={item.produto}
      preco={item.preco}
      estoque={item.estoque}
      quantidade={item.quantidade}
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
            onPress={openScreenLogOut}
          />
        </TouchableOpacity>
        <Title>Produtos</Title>
        <Imagem source={require("../../../assets/logo.jpeg")} />
      </Header>
      <TouchableOpacity style={{marginLeft:'15px'}}><AntDesign name="plus" size={24} color="#141568" onPress={openScreenCadastroProdutos} /></TouchableOpacity>
      <FlatList
        data={Lista}
        renderItem={itemRenderizado}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <Icones />
      <Gradiente posicao="bottom" />
    </Container>
  );
};

export default Produtos;
