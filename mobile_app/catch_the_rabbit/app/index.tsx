import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href='/singlePhoto'>Pomiar małego stosu</Link>
      <Link href='/multiPhoto'>Pomiar dużego stosu</Link>
      <Link href='/guide'>Instrukcja</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
