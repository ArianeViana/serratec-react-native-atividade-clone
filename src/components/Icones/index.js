import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleIcones } from "./styles";

const Icones = () => {
  const navigation = useNavigation();

  function openScreenFavoritos() {
    navigation.navigate("Favoritos");
  }

  function openScreenTelaInicial() {
    navigation.navigate("TelaInicial");
  }

  function openScreenProdutos() {
    navigation.navigate("Produtos");
  }

  function openScreenCarrinho() {
    navigation.navigate("Carrinho");
  }


  return (
    <StyleIcones>
      <AntDesign name="home" size={30} color="grey" onPress={openScreenTelaInicial} />
      <Feather
        name="shopping-bag"
        size={30}
        color="grey"
        onPress={openScreenProdutos}
      />
      <Feather
        name="star"
        size={30}
        color="grey"
        onPress={openScreenFavoritos}
      />
      <MaterialCommunityIcons name="cart-outline" size={30} color="grey" 
      onPress={openScreenCarrinho}/>
    </StyleIcones>
  );
};

export default Icones;
