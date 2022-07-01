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
// import logo from "../../../assets/logo.jpeg";
import Gradiente from "../../components/Gradiente";
import EntradaTexto from "../../components/EntradaTexto/index";
import InputEye from "./../../components/InputEye/index";
import CabecalhoLogo from "../../components/CabecalhoLogo";

const Login = () => {
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
      <CliqueAqui>
        <TextoCliqueAqui>Esqueceu a senha? Clique aqui!</TextoCliqueAqui>
      </CliqueAqui>
      <BotaoEntrar>
        <Botao>
          <TextoBotao>ENTRAR</TextoBotao>
        </Botao>
        <CliqueAqui>
          <TextoCliqueAqui>
            Não possui cadastro? Cadastre-se aqui!
          </TextoCliqueAqui>
        </CliqueAqui>
      </BotaoEntrar>
      <Gradiente posicao="bottom" />
    </ContainerLogin>
  );
};

export default Login;
