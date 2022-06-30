import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroProdutos from './../screens/CadastroDeProdutos/index';
import Favoritos from './../screens/Favoritos/index';
import ConfirmCadastro from './../screens/ConfirmCadastro/index';
import AlterarProduto from "../screens/AlterarProduto";
import AlterarCategoria from "../screens/AlterarCategoria";



const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="AlterarCategoria"
      component={AlterarCategoria}
      options={{
        headerShown: false,
      }}
    />
      <Stack.Screen
      name="AlterarProduto"
      component={AlterarProduto}
      options={{
        headerShown: false,
      }}
    />
      <Stack.Screen
      name="CadastroProdutos"
      component={CadastroProdutos}
      options={{
        headerShown: false,
      }}
    />
      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="ConfirmCadastro"
        component={ConfirmCadastro}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Rotas;
