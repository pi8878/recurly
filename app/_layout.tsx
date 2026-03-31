// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { Stack } from 'expo-router';
// import '@/global.css';


// export default function RootLayout() {
//   return <Stack/>;
// }

// // export default function RootLayout() {
// //   return (
// //     <Stack>
// //       {/* This is your Landing Page (app/index.tsx) */}
// //       <Stack.Screen name="index" options={{ headerShown: false }} /> 
      
// //       {/* This is your Tab Group (app/(tabs)/) */}
// //       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
// //       {/* Add your other groups/screens here */}
// //       <Stack.Screen name="(auth)" options={{ headerShown: false }} />
// //     </Stack>
// //   );
// }

import { Stack } from 'expo-router';
import '@/global.css';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
    </Stack>
  );
}