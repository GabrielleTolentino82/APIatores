import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#141a29',
    padding: 20,
  },
  imageBanner: {
    width: '30%',
    height: 400,  
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center', 
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
  infoContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  textTopic: {
    fontSize: 20,
    color: "white",
    fontWeight: 'bold',
    marginTop: 10,
  },
  textInfo: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
});

export default styles;
