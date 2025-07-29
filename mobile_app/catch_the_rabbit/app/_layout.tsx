import { Stack } from 'expo-router';
import { color } from '../constants/color';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: color.appHeader.background,
          },
          headerTintColor: color.appHeader.text,
        }}
      >
        <Stack.Screen name='index' />
        <Stack.Screen name='singlePhoto' />
        <Stack.Screen name='multiPhoto' />
        <Stack.Screen name='guide' />
        <Stack.Screen name='productsList' />
        <Stack.Screen name='speciesList' />
        <Stack.Screen name='+not-found' />
      </Stack>
    </Provider>
  );
}
