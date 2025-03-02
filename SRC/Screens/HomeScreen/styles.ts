import {StyleSheet} from 'react-native';
import {Spacing} from '../../Utils/Topology';
import Color from '../../Utils/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.spacing_xl,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: Spacing.spacing_xl,
  },
  mainContainer: {
    borderWidth: 1,
    borderRadius: 30,
    padding: Spacing.spacing_xl,
    borderColor: Color.grey,
  },
});
export default styles;
