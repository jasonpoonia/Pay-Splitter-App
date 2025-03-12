import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRight } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&auto=format&fit=crop' }}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Splitter</Text>
          <Text style={styles.subtitle}>
            Smart income management for a better financial future
          </Text>
          <View style={styles.features}>
            <Text style={styles.feature}>• Automated income splitting</Text>
            <Text style={styles.feature}>• Intelligent savings allocation</Text>
            <Text style={styles.feature}>• Real-time balance tracking</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/onboarding/allocations')}>
          <Text style={styles.buttonText}>Get Started</Text>
          <ArrowRight size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  backgroundImage: {
    position: 'absolute',
    width,
    height: '100%',
    opacity: 0.7,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'space-between',
    padding: 24,
    paddingBottom: 48,
  },
  content: {
    marginTop: '40%',
  },
  title: {
    fontSize: 42,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    opacity: 0.9,
    marginBottom: 32,
    lineHeight: 26,
  },
  features: {
    marginTop: 32,
  },
  feature: {
    fontSize: 18,
    color: '#ffffff',
    opacity: 0.9,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#6366f1',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});