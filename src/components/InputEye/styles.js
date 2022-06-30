import styled from 'styled-components/native';
import colors from '../../Theme/colors';

export const InputContainer = styled.TextInput`
    width: 60%;
    height: 35px;
    background-color: ${colors.tertiary};
    border: 2px solid ${colors.primary};
    border-radius: 5px;
    padding-left: 5px;
`;

export const WrapperInputEye = styled.View`
    flex-direction: row;
`;