import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import { styles } from '../constants/styles';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Coś poszło nie tak!' }} />
      <View style={styles.container}>
        <Link href='/'>Powrót do strony głównej</Link>
      </View>
    </>
  );
}
