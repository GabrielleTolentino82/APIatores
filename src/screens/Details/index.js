import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="leftcircle" size={35} color="white" />
      </TouchableOpacity>

      <Image
        resizeMode="stretch"
        style={styles.imageBanner}
        source={{ uri: `https://image.tmdb.org/t/p/original/${route.params?.imagem}` }}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.textBanner}>{route.params?.titulo}</Text>
        
        <Text style={styles.textTopic}>Descrição de alguns de seus trabalhos mais conhecidos:</Text>
        <Text style={styles.textInfo}>{route.params?.overview}</Text>
        
        <Text style={styles.textTopic}>Popularidade:</Text>
        <Text style={styles.textInfo}>{route.params?.popularity}</Text>
        
        <Text style={styles.textTopic}>Conhecido por:</Text>
        <Text style={styles.textInfo}>{route.params?.knownFor?.join(', ')}</Text>
        
        <Text style={styles.textTopic}>Gênero:</Text>
        <Text style={styles.textInfo}>{route.params?.gender === 1 ? 'Feminino' : 'Masculino'}</Text>
      </View>
    </View>
  );
}
