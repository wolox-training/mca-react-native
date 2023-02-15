import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';
import { FONT_SIZES } from '@constants/fonts';

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
    fontSize: FONT_SIZES.regular,
    fontWeight: 'bold'
  },
  author: {
    fontSize: FONT_SIZES.small
  }
});

export default styles;
