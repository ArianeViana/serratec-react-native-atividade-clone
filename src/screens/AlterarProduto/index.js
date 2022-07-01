import React from 'react';
import { Logout, Botao, CaixaTexto, Container, TextoBotao, Imagem, Topo, Titulo, SeleImagem, Pacote, TextoCaixa } from './styles';
import { AntDesign } from '@expo/vector-icons';
import Icones from "./../../components/Icones/index";
import { useNavigation } from '@react-navigation/native';
import Gradiente from '../../components/Gradiente';


const AlterarProduto = () => {

  const navigation = useNavigation();

  const TelaLogout = () => {
    navigation.navigate("Login")
  }

  const AlterarProduto = () => {
    navigation.navigate("AlterarProduto")
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
      <Botao onPress={AlterarProduto}>
        <TextoBotao>ALTERAR</TextoBotao>
      </Botao>
      <Icones />
      <Gradiente posicao='bottom' />

    </Container>
  )
}

export default AlterarProduto;