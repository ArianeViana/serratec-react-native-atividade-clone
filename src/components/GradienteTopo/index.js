import { LinearGradient } from "expo-linear-gradient";

const GradienteTopo = () => {
  return (
    <LinearGradient
      colors={["#cbffff", "transparent"]}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "30%",
      }}
    />
  );
};

export default GradienteTopo
