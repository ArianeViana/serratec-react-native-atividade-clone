import styled from 'styled-components/native';
import colors from '../../Theme/colors';

export const ContainerLogin = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${colors.tertiary} ;
    align-items: center;
    align-content: center;
`;

export const Logo = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-top:10px;
    align-content: center;
`;

export const Titulo = styled.Text`
    font-size: 20px;
    color: ${colors.secondary};
    margin: 50px;
    font-weight: 800;
    line-height: 22px;
`;

export const CliqueAqui =  styled.TouchableOpacity`
    padding: 10px;
`;

export const TextoCliqueAqui = styled.Text`
    color: ${colors.secondary};
    font-size: 11px;
    font-weight: 700;
    line-height: 12px;
`;

export const TextoNavegacao = styled.TouchableOpacity`
    color: ${colors.secondary};
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    padding: 10px;
    font-family: 'Roboto';
`;

export const Espacamento = styled.View`
    width: 100px;
    height: ${(props) => props.height || 5 };
`;

export const Botao= styled.TouchableOpacity`
    padding: 7px;
    box-sizing: border-box;
    height: 33px;
    width: 131px;
    background-color: ${colors.tertiary};
    border: 2px solid ${colors.primary};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 5px;
    align-self: center;
    margin-top: 20px;
`;

export const TextoBotao = styled.Text`
    color: ${colors.secondary};
    align-self: center;
    position: absolut;
    font-size: 12px;
    font-weight: 800;
    line-height: 15px;
`;