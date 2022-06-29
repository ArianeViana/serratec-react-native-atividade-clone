import { LinearGradient } from "expo-linear-gradient";

const GradienteRodape = () => {
  return (
    <LinearGradient
      colors={["transparent", "#cbffff"]}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "30%",
      }}
    />
  );
};

export default GradienteRodape;
