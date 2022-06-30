import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleIcones } from "./styles";

const Icones = () => {
  const navigation = useNavigation();

  function openScreenFavoritos() {
    navigation.navigate("Favoritos");
  }

  function openScreenHome() {
    navigation.navigate("Home");
  }

  function openScreenCadastroDeProdutos() {
    navigation.navigate("CadastroProdutos");
  }

  return (
    <StyleIcones>
      <AntDesign name="home" size={30} color="grey" onPress={openScreenHome} />
      <Feather
        name="shopping-bag"
        size={30}
        color="grey"
        onPress={openScreenCadastroDeProdutos}
      />
      <Feather
        name="star"
        size={30}
        color="grey"
        onPress={openScreenFavoritos}
      />
      <MaterialCommunityIcons name="cart-outline" size={30} color="grey" />
    </StyleIcones>
  );
};

export default Icones;
