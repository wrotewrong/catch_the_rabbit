import { View, Text, StyleSheet } from 'react-native';

export default function SinglePhotoScreen() {
  return (
    <View style={styles.container}>
      <Text>Wykonaj pojedyncze zdjęcie</Text>
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
