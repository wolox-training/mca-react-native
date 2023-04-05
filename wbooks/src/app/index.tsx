import { BOOKS_MOCK } from '@constants/mockBooks';
import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';

import Book from './components/Book';
import styles from './styles';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <FlatList
            data={BOOKS_MOCK}
            renderItem={({ item }) => (
              <Book id={item.id} title={item.title} author={item.author} url={item.imageUrl} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
