import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

import styles from './styles';

type BookProps = {
  id: number;
  title: string;
  author: string;
  url?: ImageSourcePropType;
};

const Book = ({ title, author, url }: BookProps) => {
  return (
    <View style={styles.container}>
      {url && <Image source={url} style={styles.cover} />}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
};

export default Book;
