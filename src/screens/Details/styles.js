import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#6959CD',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: 60,
    alignItems: 'flex-start',
  },
  imageBanner: {
    width: 550,
    height: 400,
    borderRadius: 10,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textBanner: {
    fontSize: 37,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  textTopic: {
    fontSize: 30,
    color: '#000',
    marginTop: 8,
    fontWeight: '600',
  },
  textInfo: {
    fontSize: 25,
    color: '#000',
    marginBottom: 10,
    lineHeight: 20,
  },
});

export default styles;
