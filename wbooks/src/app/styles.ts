import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';
import { FONT_SIZES } from '@constants/fonts';
import { SPACING } from '@constants/spacing';

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.aliceBlue
  },
  sectionTitle: {
    alignItems: 'center',
    backgroundColor: COLORS.deepSkyBlue,
    display: 'flex',
    flexDirection: 'row',
    height: 84,
    justifyContent: 'space-between',
    padding: 15
  },
  title: {
    color: COLORS.white,
    fontSize: FONT_SIZES.regular,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  sectionContainer: {
    backgroundColor: COLORS.aliceBlue,
    marginTop: SPACING.space35,
    paddingHorizontal: 20
  }
});

export default styles;
