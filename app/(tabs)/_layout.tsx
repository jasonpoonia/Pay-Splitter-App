import { Tabs } from 'expo-router';
import { Chrome as Home, ChartPie as PieChart, Wallet, Settings } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6366f1',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#e2e8f0',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Overview',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="allocations"
        options={{
          title: 'Allocations',
          tabBarIcon: ({ color, size }) => <PieChart size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: 'Accounts',
          tabBarIcon: ({ color, size }) => <Wallet size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}