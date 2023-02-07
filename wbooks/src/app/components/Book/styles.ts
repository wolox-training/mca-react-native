import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  cover: {
    backgroundColor: COLORS.deepSkyBlue,
    height: 60,
    marginRight: 15,
    width: 40
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  author: {
    fontSize: 15
  }
});

export default styles;
