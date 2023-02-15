import React from 'react';
import { SafeAreaView, ScrollView, View, StatusBar } from 'react-native';

import Book from './components/Book';
import styles from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View>
            <View style={styles.sectionContainer}>
              <Book title={'A little bird told me'} author={'Timothy Cross'} id={0} />
              <Book title={'A little bird told me'} author={'Timothy Cross'} id={1} />
              <Book title={'A little bird told me'} author={'Timothy Cross'} id={2} />
              <Book title={'A little bird told me'} author={'Timothy Cross'} id={3} />
              <Book title={'A little bird told me'} author={'Timothy Cross'} id={4} />
              <Book title={'A little bird told me'} author={'Timothy Cross'} id={5} />
              <Book title={'A little bird told me'} author={'Timothy Cross'} id={6} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
