import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.aliceblue
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
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  sectionContainer: {
    backgroundColor: COLORS.aliceblue,
    marginTop: 35,
    paddingHorizontal: 20
  }
});

export default styles;
