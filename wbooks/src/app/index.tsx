import { BOOKS_MOCK } from '@constants/mockBooks';
import React from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, Image } from 'react-native';

import Book from './components/Book';
import styles from './styles';

const App = () => {
  const onPress = () => {
    console.log('Hola');
  };
  return (
    <>
      <SafeAreaView>
        <View style={styles.sectionTitle}>
          <TouchableOpacity onPress={onPress}>
            <Image source={require('./assets/bell.png')} />
          </TouchableOpacity>
          <Text style={styles.title}>Library</Text>
          <TouchableOpacity onPress={onPress}>
            <Image source={require('./assets/search.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <FlatList
            data={BOOKS_MOCK}
            renderItem={({ item }) => <Book title={item.title} author={item.author} url={item.imageUrl} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
