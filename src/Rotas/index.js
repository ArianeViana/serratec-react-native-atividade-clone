import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroProdutos from "./../screens/CadastroDeProdutos/index";
import Favoritos from "./../screens/Favoritos/index";
import ConfirmCadastro from "./../screens/ConfirmCadastro/index";
import AlterarProduto from "../screens/AlterarProduto";
import AlterarCategoria from "../screens/AlterarCategoria";
import CadastroCategoria from "./../screens/CadastroDeCategoria/index";
import Produtos from "./../screens/Produtos/index";
import Login from "./../screens/Login/index";
import TelaInicial from "./../screens/TelaInicial/index";
import SenhaAlterada from "./../screens/SenhaAlterada/index";
import RecuperarSenha from "./../screens/RecuperarSenha/index";
import CriarSenha from "./../screens/CriarSenha/index";
import CompraEfetuada from "./../screens/CompraEfetuada/index";
import CadastroUsuario from "./../screens/CadastroUsuario/index";

const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TelaInicial"
        component={TelaInicial}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RecuperarSenha"
        component={RecuperarSenha}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Produtos"
        component={Produtos}
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
        name="SenhaAlterada"
        component={SenhaAlterada}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CriarSenha"
        component={CriarSenha}
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
      <Stack.Screen
        name="CompraEfetuada"
        component={CompraEfetuada}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CadastroUsuario"
        component={CadastroUsuario}
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
        name="CadastroCategoria"
        component={CadastroCategoria}
        options={{
          headerShown: false,
        }}
      />
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
    </Stack.Navigator>
  );
};

export default Rotas;
