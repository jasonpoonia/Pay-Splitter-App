import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRight, Plus, Ban as Bank, CreditCard, Wallet } from 'lucide-react-native';

type AccountType = 'savings' | 'checking';

interface Account {
  id: string;
  name: string;
  type: AccountType;
  number: string;
}

export default function AccountSetup() {
  const router = useRouter();
  const [accounts, setAccounts] = useState<Account[]>([
    { id: '1', name: 'Main Savings', type: 'savings', number: '****1234' },
    { id: '2', name: 'Bills Account', type: 'checking', number: '****5678' },
    { id: '3', name: 'Spending', type: 'checking', number: '****9012' },
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Link Your Accounts</Text>
        <Text style={styles.subtitle}>
          Connect your bank accounts to enable automatic income splitting
        </Text>
      </View>

      <View style={styles.accountsList}>
        {accounts.map((account) => (
          <View key={account.id} style={styles.accountCard}>
            <View style={styles.accountIcon}>
              {account.type === 'savings' ? (
                <Bank size={24} color="#6366f1" />
              ) : (
                <CreditCard size={24} color="#6366f1" />
              )}
            </View>
            <View style={styles.accountInfo}>
              <Text style={styles.accountName}>{account.name}</Text>
              <Text style={styles.accountNumber}>{account.number}</Text>
            </View>
            <View style={styles.accountStatus}>
              <View style={styles.statusIndicator} />
              <Text style={styles.statusText}>Connected</Text>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.addAccountCard}>
          <Plus size={24} color="#6366f1" />
          <Text style={styles.addAccountText}>Add Another Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/onboarding/complete')}>
          <Text style={styles.buttonText}>Continue</Text>
          <ArrowRight size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
    paddingHorizontal: 24,
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
  accountsList: {
    paddingHorizontal: 24,
    gap: 16,
  },
  accountCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  accountIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountInfo: {
    flex: 1,
    marginLeft: 16,
  },
  accountName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  accountNumber: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  accountStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10b981',
  },
  statusText: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '500',
  },
  addAccountCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  addAccountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366f1',
  },
  footer: {
    padding: 24,
    marginTop: 20,
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