import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Check } from 'lucide-react-native';

export default function OnboardingComplete() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.successIcon}>
          <Check size={48} color="#ffffff" />
        </View>
        <Text style={styles.title}>You're All Set!</Text>
        <Text style={styles.message}>
          Your accounts are connected and your allocations are set up. We'll automatically split your income according to your preferences.
        </Text>

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop' }}
          style={styles.illustration}
        />

        <View style={styles.features}>
          <Text style={styles.feature}>✓ Automatic income splitting</Text>
          <Text style={styles.feature}>✓ Real-time balance tracking</Text>
          <Text style={styles.feature}>✓ Smart savings management</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/(tabs)')}>
        <Text style={styles.buttonText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 24,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    marginTop: 60,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#10b981',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  illustration: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 40,
  },
  features: {
    width: '100%',
    gap: 16,
  },
  feature: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#6366f1',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});