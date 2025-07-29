import { Link } from 'expo-router';
import { View } from 'react-native';
import { styles } from '../constants/styles';

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
