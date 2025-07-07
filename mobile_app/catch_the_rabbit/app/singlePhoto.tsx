import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { styles } from '@/constants/styles';

export default function SinglePhotoScreen() {
  const [length, setChangeLength] = React.useState('');
  const [species, setSpecies] = React.useState('Wybierz gatunek');
  const [product, setProduct] = React.useState('Wybierz sortyment');
  const { pickedSpecies, pickedProduct } = useLocalSearchParams<{
    pickedSpecies?: string | string[];
    pickedProduct?: string | string[];
  }>();

  React.useEffect(() => {
    if (pickedSpecies) {
      setSpecies(
        Array.isArray(pickedSpecies) ? pickedSpecies[0] : pickedSpecies
      );
    }
    if (pickedProduct) {
      setProduct(
        Array.isArray(pickedProduct) ? pickedProduct[0] : pickedProduct
      );
    }
  }, [pickedSpecies, pickedProduct]);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Link href='/speciesList' asChild>
          <Pressable>
            <Text style={styles.link}>{species}</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles.button}>
        <Link href='/productsList' asChild>
          <Pressable>
            <Text style={styles.link}>{product}</Text>
          </Pressable>
        </Link>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setChangeLength}
        value={length}
        placeholder='wprowadź długość (cm)'
        keyboardType='numeric'
      />
      <View style={styles.button}>
        <Text style={styles.link}>Wykonaj pojedyncze zdjęcie</Text>
      </View>
    </View>
  );
}
