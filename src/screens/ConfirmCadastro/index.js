import { Botao, Fundo, Texto, TextoBotao } from "./styles";
import GradienteTopo from "./../../components/GradienteTopo/index";
import GradienteRodape from "./../../components/GradienteRodape/index";
import CabecalhoLogo from "../../components/CabecalhoLogo"

const ConfirmCadastro = () => {
  return (
    <Fundo>
      <GradienteTopo />
      <CabecalhoLogo />
      <Texto>Usuário cadastrado com sucesso!</Texto>
      <Botao>
        <TextoBotao>Login</TextoBotao>
      </Botao>
      <GradienteRodape />
    </Fundo>
  );
};

export default ConfirmCadastro;
