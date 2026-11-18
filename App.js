import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.dev/films/')
    .then(resposta => resposta.json())
    .then(dados => setFilmes(dados))
    .catch(erro => console.log(erro))
  }, [])
  return (
    <View style={styles.container}>
      <Text>filmes:</Text>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
          </View>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
