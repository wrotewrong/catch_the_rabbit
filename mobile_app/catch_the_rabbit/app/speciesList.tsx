import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function speciesList() {
  const options = ['DB', 'MD', 'SO'];

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <Pressable
          key={option}
          onPress={() =>
            router.push({
              pathname: '/singlePhoto',
              params: { pickedSpecies: option },
            })
          }
          style={styles.list}
        >
          <Text style={styles.listOption}>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  listOption: {
    fontSize: 25,
  },
});
