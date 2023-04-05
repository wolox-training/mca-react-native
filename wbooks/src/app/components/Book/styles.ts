import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';
import { FONT_SIZES } from '@constants/fonts';
import { SPACING } from '@constants/spacing';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    marginTop: SPACING.space10,
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  cover: {
    height: 60,
    marginRight: SPACING.space15,
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
