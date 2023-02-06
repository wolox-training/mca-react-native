import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

type BookProps = {
  title: string;
  author: string;
  url: any;
};

const Book = ({ title, author, url }: BookProps) => {
  return (
    <View style={styles.container}>
      <Image source={url} />
      <Text>{title}</Text>
      <Text>{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24
  }
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  //   textAlign: 'center'
  // },
  // label: {
  //   marginBottom: 10,
  //   fontSize: 24
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark
  // }
});

export default Book;
