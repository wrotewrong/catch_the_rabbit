import { View, Text, StyleSheet } from 'react-native';

export default function MultiPhotoScreen() {
  return (
    <View style={styles.container}>
      <Text>Wybierz zdjęcia do pomiaru</Text>
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
