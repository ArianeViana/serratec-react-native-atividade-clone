import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Rotas from './src/Rotas/index';
import CadastroUsuario from "./src/screens/CadastroUsuario";


export default function App() {
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
    // <CadastroUsuario></CadastroUsuario>
  )
}


