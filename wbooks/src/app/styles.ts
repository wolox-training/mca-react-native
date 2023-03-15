import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';
import { SPACING } from '@constants/spacing';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: COLORS.aliceBlue
  },
  sectionContainer: {
    marginTop: SPACING.space35,
    paddingHorizontal: 20
  }
});

export default styles;
