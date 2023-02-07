import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

type BookProps = {
  title: string;
  author: string;
  url: any;
};

const Book = ({ title, author, url }: BookProps) => {
  return (
    <View style={styles.container}>
      <Image source={url} style={styles.cover} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
};

export default Book;
