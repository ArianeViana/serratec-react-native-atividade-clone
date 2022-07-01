import logo from "../../../assets/logo.jpeg";
import { AntDesign } from "@expo/vector-icons";
import {
  LogoRecuperarS,
  ContainerRecuperarS,
  TituloRecuperarS,
  BotaoRecuperarS,
  TextoBotaoRecuperarS,
  ContainerIcone,
} from "./styles";
import EntradaTexto from "./../../components/EntradaTexto/index";
import Gradiente from "../../components/Gradiente";
import { TouchableOpacity } from "react-native-web";

const RecuperarSenha = () => {
  return (
    <ContainerRecuperarS>
      <Gradiente posicao="top" />
      <TouchableOpacity>
        <AntDesign
          name="logout"
          size={25}
          color="#120a8f"
          style={{
            alignSelf: "flex-start",
            marginTop: "10px",
            padding: "40px",
          }}
        />
      </TouchableOpacity>
      <ContainerIcone>
        <LogoRecuperarS source={logo} />
        <TituloRecuperarS>Recuperar Senha</TituloRecuperarS>
        <EntradaTexto placeholder={"Digite seu CPF"} />
        <BotaoRecuperarS>
          <TextoBotaoRecuperarS>RECUPERAR</TextoBotaoRecuperarS>
        </BotaoRecuperarS>
      </ContainerIcone>
      <Gradiente posicao="bottom" />
    </ContainerRecuperarS>
  );
};
export default RecuperarSenha;
