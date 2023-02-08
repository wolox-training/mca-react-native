import { COMMENTS_MOCK } from '@constants/mockComments';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  FlatList,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import bell from './assets/bell.png';
import search from './assets/search.png';
import Book from './components/Book';
import styles from './styles';

const App = () => {
  const onPress = () => {
    console.log('Hola');
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View>
            <View style={styles.sectionTitle}>
              <TouchableOpacity onPress={onPress}>
                <Image source={bell} />
              </TouchableOpacity>
              <Text style={styles.title}>Library</Text>
              <TouchableOpacity onPress={onPress}>
                <Image source={search} />
              </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
              <FlatList
                data={COMMENTS_MOCK}
                renderItem={({ item }) => <Book title={item.text} author={item.author} url={item.url} />}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
