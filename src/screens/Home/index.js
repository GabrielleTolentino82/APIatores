import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import BannerMovies from '../../components/bannerFilmes';
import CardMovies from '../../components/cardMovies';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeIndex() {
  const [actors, setActors] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchActors() {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/person/day?api_key=973aad00912585657c8de8584fdf4f27&language=pt-BR&page=1');
        const data = await response.json();
        setActors(data.results);
      } catch (error) {
        console.log('Erro ao Buscar Atores', error);
      }
    }
    fetchActors();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <BannerMovies />

      <View style={{ width: "90%" }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={actors}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {
              titulo: item.name,
              imagem: item.profile_path,
              overview: item.known_for[0]?.overview || 'Sem descrição disponível',
              popularity: item.popularity,
              knownFor: item.known_for.map(film => film.title || film.name),
              gender: item.gender,
            })}>
              <CardMovies
                titulo={item.name}
                imagem={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                popularity={`Popularidade: ${item.popularity}`}
                knownFor={item.known_for.map(film => film.title || film.name)}
                gender={item.gender}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
  },
});
