import styled from "styled-components/native";
import colors from "../../Theme/colors";

export const InputContainer = styled.TextInput`
  width: 60%;
  height: 35px;
  background-color: ${colors.tertiary};
  border: 1px solid ${colors.primary};
  border-radius: 10px;
  padding-left: 5px;
  box-shadow: 0px 5px 5px #2f4f4f;
`;

export const WrapperInputEye = styled.View`
    flex-direction: row;
    justify-content: center;
    /* position: relative; */
`;
