import { View, Text, StyleSheet } from 'react-native';

export default function GuideScreen() {
  return (
    <View style={styles.container}>
      <Text>Instrukcja</Text>
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
