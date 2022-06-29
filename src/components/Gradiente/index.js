import { LinearGradient } from "expo-linear-gradient";

const Gradiente = (props) => {
 
  if (props.posicao == "top") {
    return (
      <LinearGradient
        colors={[props.cor1, props.cor2]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "30%",
        }}
      />
    );
  } else{
    return (
      <LinearGradient
        colors={[props.cor1, props.cor2]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "30%",
        }}
      />
    );
  }
};

export default Gradiente;
