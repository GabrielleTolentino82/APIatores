import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#141a29',
    padding: 20,
    alignItems: 'center', // Centraliza os itens no eixo principal
    justifyContent: 'center', // Centraliza os itens no eixo transversal
  },
  imageBanner: {
    width: 300, // Largura fixa
    height: 300, // Altura igual à largura para manter a imagem quadrada
    borderRadius: 20, // Arredondamento dos cantos
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textBanner: {
    fontSize: 30,
    color: "white",
    fontWeight: 'bold',
    marginBottom: 10,
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(25,26,48,0.8)',
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: "center",
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
  },
  textOverview: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
    marginBottom: 10,
  },
  infoContainer: {
    marginTop: 20,
  },
  textInfo: {
    fontSize: 18,
    color: "white",
    marginTop: 5,
  },
});

export default styles;
