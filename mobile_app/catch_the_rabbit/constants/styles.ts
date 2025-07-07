import { StyleSheet } from 'react-native';
import { color } from './color';
import { fonts } from './fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: color.button.background,
    padding: 15,
    borderRadius: 50,
    color: color.button.text,
  },
  link: {
    fontSize: fonts.size.big,
    color: color.link.text,
  },
  input: {
    fontSize: fonts.size.big,
    borderColor: color.button.background,
    borderWidth: 2,
    borderRadius: 50,
  },
  list: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: color.list.border,
  },
  listOption: {
    fontSize: fonts.size.big,
  },
});
