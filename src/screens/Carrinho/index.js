import React from "react";
// import { ContainerGeral } from "../ConfirmCadastro/styles";
import {
  Texto,
  TextoBotao,
  Botao,
  Card0,
  Ver,
  styles,
  Cabecalho,
  Imagem,
  Container,
  ViewIcones,
} from "./styles";
import { FlatList, Text, View } from "react-native";
import Gradiente from "../../components/Gradiente";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icones from "./../../components/Icones";
import { useNavigation } from "@react-navigation/native";

const Carrinho = () => {
  const navigation = useNavigation();

  function openScreenLogOut() {
    navigation.navigate("Login");
  }

  function openScreenCompraEfetuada() {
    navigation.navigate("CompraEfetuada");
  }

  return (
    <Container>
      <Gradiente posicao="top" />
      <Cabecalho>
        <TouchableOpacity>
          <AntDesign
            name="logout"
            size={20}
            color="black"
            onPress={openScreenLogOut}
          />
        </TouchableOpacity>
        <Texto>Carrinho</Texto>
        <Imagem source={require("../../../assets/logo.jpeg")} />
      </Cabecalho>
      <Card0>
        <View style={styles.container}>
          <FlatList
            data={[
              { key: "Produto" },
              { key: "Produto 1" },
              { key: "Produto 4" },
              { key: "Produto 5" },
              { key: "Total da Compra" },
              { key: "Data da Compra" },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
          <FlatList
            data={[
              { key: " Quantidade" },
              { key: "        -  2  + " },
              { key: "        -  1  +" },
              { key: "        -  1  +" },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
          <FlatList
            data={[
              { key: "Preço Unitário " },
              { key: "      R$ 25,00" },
              { key: "    R$ 100,00" },
              { key: "      R$ 40,00" },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
          <FlatList
            data={[
              { key: "         Total" },
              { key: "       R$ 50,00" },
              { key: "     R$ 100,00" },
              { key: "       R$ 40,00" },
              { key: "       R$ 190,00" },
              { key: "    17/06/2022" },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
        </View>
      </Card0>
      <Ver>
        <Botao>
          <TextoBotao>
            ADICIONAR <br />
            MAIS ITENS
          </TextoBotao>
        </Botao>
        <Botao onPress={openScreenCompraEfetuada}>
          <TextoBotao>
            FECHAR <br />
            PEDIDO
          </TextoBotao>
        </Botao>
      </Ver>
      <Icones />
      <Gradiente posicao="bottom" />
    </Container>
  );
};

export default Carrinho;
