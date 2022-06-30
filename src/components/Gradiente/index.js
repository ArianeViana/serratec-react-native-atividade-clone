import { LinearGradient } from "expo-linear-gradient";

const Gradiente = (props) => {
 
  if (props.posicao == "top") {
    return (
      <LinearGradient
        colors={["#cbffff", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "30%",
          zIndex: -1,
        }}
      />
    );
  } else{
    return (
      <LinearGradient
        colors={["transparent", "#cbffff"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "30%",
          zIndex: -1,
        }}
      />
    );
  }
};

export default Gradiente;
