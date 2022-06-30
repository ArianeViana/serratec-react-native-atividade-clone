import React from 'react';
import { View, Text } from 'react-native';
import { Tela, Logout, Botao, CaixaTexto, Container, TextoBotao, Imagem, Topo, Titulo, SeleImagem, Pacote, TextoCaixa } from './styles';
import { AntDesign, Feather, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Icones from "./../../components/Icones/index";

import { useNavigation } from '@react-navigation/native';
import Gradiente from '../../components/Gradiente';
// import { Container } from './styles';


const AlterarProduto = () => {

  const navigation = useNavigation();

  const TelaLogout = () => {
    navigation.navigate("Login")
  }

  return (
    <Container>
      <Gradiente posicao='top' />
      <Topo>
        <Logout><AntDesign name="logout" size={24} color="black" onPress={TelaLogout} /></Logout>
        <Titulo>Alterar Produto</Titulo>
        <Imagem source={require("../../../assets/logo.jpeg")} />
      </Topo>
      <Pacote>
        <CaixaTexto>
          <TextoCaixa>Produto 1</TextoCaixa>
        </CaixaTexto>
        <CaixaTexto>
          <TextoCaixa>25,00</TextoCaixa>
        </CaixaTexto>
        <CaixaTexto>
          <TextoCaixa>10</TextoCaixa>
        </CaixaTexto>
        <CaixaTexto>
          <TextoCaixa>Imagem1.png</TextoCaixa>
        </CaixaTexto>
        <SeleImagem>Selecionar imagem <AntDesign name="upload" size={18} color="#000080" /></SeleImagem>
      </Pacote>
      <Botao>
        <TextoBotao>ALTERAR</TextoBotao>
      </Botao>
      <Icones />
      <Gradiente posicao='bottom' />

    </Container>
  )
}

export default AlterarProduto;