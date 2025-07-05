import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Link style={styles.link} href='/singlePhoto'>
          Pomiar małego stosu
        </Link>
      </View>
      <View style={styles.button}>
        <Link style={styles.link} href='/multiPhoto'>
          Pomiar dużego stosu
        </Link>
      </View>
      <View style={styles.button}>
        <Link style={styles.link} href='/guide'>
          Instrukcja
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 50,
    color: 'white',
  },
  link: {
    fontSize: 25,
    color: 'white',
  },
});
