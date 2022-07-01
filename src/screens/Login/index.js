import {
  ContainerLogin,
  Logo,
  Titulo,
  Botao,
  CliqueAqui,
  TextoCliqueAqui,
  Espacamento,
  TextoBotao,
} from "../Login/styles";
import logo from "../../../assets/logo.jpeg";
import Gradiente from "../../components/Gradiente";
import EntradaTexto from "../../components/EntradaTexto/index";
import InputEye from "./../../components/InputEye/index";

const Login = () => {
  return (
    <ContainerLogin>
      <Gradiente posicao="top" />
      <Logo source={logo} />
      <Titulo>Login</Titulo>
      <EntradaTexto placeholder={"Digite seu login"} />
      <Espacamento height={20} />
      <InputEye placeholder={"Digite sua senha"} />
      <CliqueAqui>
        <TextoCliqueAqui>Esqueceu a senha? Clique aqui!</TextoCliqueAqui>
      </CliqueAqui>
      <Botao>
        <TextoBotao>ENTRAR</TextoBotao>
      </Botao>
      <CliqueAqui>
        <TextoCliqueAqui>
          Não possui cadastro? Cadastre-se aqui!
        </TextoCliqueAqui>
      </CliqueAqui>
      <Gradiente posicao="bottom" />
    </ContainerLogin>
  );
};

export default Login;