import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRight, Wallet, Briefcase, CreditCard } from 'lucide-react-native';

export default function AllocationSetup() {
  const router = useRouter();
  const [allocations, setAllocations] = useState({
    savings: '40',
    bills: '30',
    spending: '30',
  });

  const updateAllocation = (key: keyof typeof allocations, value: string) => {
    const numValue = parseInt(value) || 0;
    if (numValue > 100) return;
    
    setAllocations(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const total = Object.values(allocations).reduce((sum, val) => sum + (parseInt(val) || 0), 0);
  const isValid = total === 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Set Your Allocations</Text>
        <Text style={styles.subtitle}>
          How would you like to split your income? The total must equal 100%.
        </Text>
      </View>

      <View style={styles.allocations}>
        <View style={[styles.allocationCard, { backgroundColor: '#10b981' }]}>
          <View style={styles.cardHeader}>
            <Wallet size={24} color="#ffffff" />
            <Text style={styles.cardTitle}>Savings</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={allocations.savings}
            onChangeText={(value) => updateAllocation('savings', value)}
            maxLength={3}
          />
          <Text style={styles.percentageLabel}>%</Text>
        </View>

        <View style={[styles.allocationCard, { backgroundColor: '#ef4444' }]}>
          <View style={styles.cardHeader}>
            <Briefcase size={24} color="#ffffff" />
            <Text style={styles.cardTitle}>Bills</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={allocations.bills}
            onChangeText={(value) => updateAllocation('bills', value)}
            maxLength={3}
          />
          <Text style={styles.percentageLabel}>%</Text>
        </View>

        <View style={[styles.allocationCard, { backgroundColor: '#f59e0b' }]}>
          <View style={styles.cardHeader}>
            <CreditCard size={24} color="#ffffff" />
            <Text style={styles.cardTitle}>Spending</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={allocations.spending}
            onChangeText={(value) => updateAllocation('spending', value)}
            maxLength={3}
          />
          <Text style={styles.percentageLabel}>%</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={[styles.totalValue, !isValid && styles.invalidTotal]}>
            {total}%
          </Text>
        </View>
        {!isValid && (
          <Text style={styles.errorText}>
            Total must equal 100%
          </Text>
        )}
        <TouchableOpacity
          style={[styles.button, !isValid && styles.buttonDisabled]}
          disabled={!isValid}
          onPress={() => router.push('/onboarding/accounts')}>
          <Text style={styles.buttonText}>Continue</Text>
          <ArrowRight size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 24,
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
  },
  allocations: {
    gap: 20,
  },
  allocationCard: {
    padding: 24,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  input: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    width: 80,
    textAlign: 'right',
  },
  percentageLabel: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    opacity: 0.8,
  },
  footer: {
    marginTop: 'auto',
    gap: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  totalLabel: {
    fontSize: 18,
    color: '#1e293b',
    fontWeight: '600',
  },
  totalValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#10b981',
  },
  invalidTotal: {
    color: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 14,
    textAlign: 'center',
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
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});