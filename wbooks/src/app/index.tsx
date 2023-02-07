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
              <Book title={'A little bird told me'} author={'Timothy Cross'} url={0} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
