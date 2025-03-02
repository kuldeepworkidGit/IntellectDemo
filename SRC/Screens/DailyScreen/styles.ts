import {StyleSheet} from 'react-native';
import {Spacing} from '../../Utils/Topology';
import Color from '../../Utils/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: Spacing.spacing_xl,
    paddingVertical: 45,
  },
  titleMargin: {
    marginVertical: Spacing.spacing_2xl,
  },
  adviseText: {
    fontSize: 13,
    color: Color.grey,
    textAlign: 'center',
    marginHorizontal: 50,
  },
  titleMarginM: {
    marginBottom: Spacing.spacing_2xl,
  },
  divider: {
    height: 2,
    backgroundColor: Color.grey,
    width: 50,
    marginVertical: Spacing.spacing_2xl,
    borderRadius: 99,
  },
  bottomContainer: {alignItems: 'center'},
  marginBottom: {marginBottom: Spacing.spacing_xl},
  quoteText: {
    fontWeight: '500',
    color: Color.primaryColor,
    fontSize: 13,
    textAlign: 'center',
    marginHorizontal: 50,
  },
});
export default styles;
