import React from 'react';
import { View, Text } from 'react-native';
import { Logout, Botao, CaixaTexto, Container, TextoBotao, Imagem, Topo, Titulo, SeleImagem, Caixas } from './styles';
import { AntDesign, Feather, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';


import { TextoCaixa } from '../AlterarProduto/styles';
import { useNavigation } from '@react-navigation/native';

import Icones from '../../components/Icones';
import Gradiente from '../../components/Gradiente';
// import { Container } from './styles';

const AlterarCategoria = () => {

  const navigation = useNavigation();

  const TelaLogout = () => {
    navigation.navigate('Login')
  }

  return (
    <Container>
      <Gradiente posicao='top' />
      <Topo>
        <Logout><AntDesign name="logout" size={24} color="#120a8f" onPress={TelaLogout} /></Logout>
        <Titulo>Alterar Categoria</Titulo>
        <Imagem source={require("../../../assets/logo.jpeg")} />
      </Topo>
      <Caixas>
        <CaixaTexto>
          <TextoCaixa>Tec1</TextoCaixa>
        </CaixaTexto>
        <CaixaTexto>
          <TextoCaixa>Imagem5.png</TextoCaixa>
        </CaixaTexto>
        <SeleImagem>Selecionar imagem <AntDesign name="upload" size={18} color="#000080" /></SeleImagem>
      </Caixas>
      <Botao>
        <TextoBotao>ALTERAR</TextoBotao>
      </Botao>
      <Icones />
      <Gradiente posicao="bottom" />

    </Container>
  )
}

export default AlterarCategoria;