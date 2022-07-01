import {
  ContainerLogin,
  Body,
  Header,
  Titulo,
  Botao,
  CliqueAqui,
  TextoCliqueAqui,
  TextoBotao,
  BotaoEntrar
} from "../Login/styles";
import Gradiente from "../../components/Gradiente";
import EntradaTexto from "../../components/EntradaTexto/index";
import InputEye from "./../../components/InputEye/index";
import CabecalhoLogo from "../../components/CabecalhoLogo";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  function openScreenTelaInicial() {
    navigation.navigate("TelaInicial");
  }

  function openScreenCadastroUsuario() {
    navigation.navigate("CadastroUsuario");
  }
  function openScreenRecuperaSenha() {
    navigation.navigate("RecuperarSenha");
  }

  return (
    <ContainerLogin>
      <Gradiente posicao="top" />
      <Header>
        <CabecalhoLogo />
      </Header>
      <Body>
        <Titulo>Login</Titulo>
        <EntradaTexto placeholder={"Digite seu login"} />
      </Body>
      <InputEye placeholder={"Digite sua senha"} />
      <CliqueAqui onPress={openScreenRecuperaSenha}>
        <TextoCliqueAqui>Esqueceu a senha? Clique aqui!</TextoCliqueAqui>
      </CliqueAqui>
      <BotaoEntrar>
        <Botao onPress={openScreenTelaInicial}>
          <TextoBotao>ENTRAR</TextoBotao>
        </Botao>
        <CliqueAqui>
          <TextoCliqueAqui onPress={openScreenCadastroUsuario}>
            Não possui cadastro? Cadastre-se aqui!
          </TextoCliqueAqui>
        </CliqueAqui>
      </BotaoEntrar>
      <Gradiente posicao="bottom" />
    </ContainerLogin>
  );
};

export default Login;
