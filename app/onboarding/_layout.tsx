import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="allocations" />
      <Stack.Screen name="accounts" />
      <Stack.Screen name="complete" />
    </Stack>
  );
}