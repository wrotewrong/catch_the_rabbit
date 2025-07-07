import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import { styles } from '@/constants/styles';

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
