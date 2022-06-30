import { InputContainer, WrapperInputEye } from "./styles"
import { Ionicons } from '@expo/vector-icons'; 
import colors from "../../Theme/colors";

const InputEye = ({ placeholder }) => {
  return (
    <WrapperInputEye>
      <InputContainer placeholder={placeholder} /> 
      <Ionicons 
        name="eye" 
        size={22} 
        color={colors.secondary}
        style={{
          position: "absolute",
          marginStart: 140,
          alignSelf: 'center',
        }}
      />
    </WrapperInputEye>
  )
}

export default InputEye;