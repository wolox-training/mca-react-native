import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

type BookProps = {
  title: string;
  author: string;
  url: any;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24
  }
});

const Book = ({ title, author, url }: BookProps) => {
  return (
    <View style={styles.container}>
      <Image source={url} />
      <Text>{title}</Text>
      <Text>{author}</Text>
    </View>
  );
};

export default Book;
