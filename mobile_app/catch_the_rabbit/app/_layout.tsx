import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen name='singlePhoto' />
      <Stack.Screen name='multiPhoto' />
      <Stack.Screen name='guide' />
      <Stack.Screen name='+not-found' />
    </Stack>
  );
}
