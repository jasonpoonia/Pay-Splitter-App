import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ban as Bank, CreditCard, Wallet, Plus } from 'lucide-react-native';

export default function AccountsScreen() {
  const accounts = [
    {
      id: 1,
      name: 'Main Savings',
      type: 'Savings Account',
      balance: 2320.00,
      icon: Bank,
      color: '#10b981',
    },
    {
      id: 2,
      name: 'Bills Account',
      type: 'Checking Account',
      balance: 1740.00,
      icon: CreditCard,
      color: '#ef4444',
    },
    {
      id: 3,
      name: 'Spending Account',
      type: 'Checking Account',
      balance: 1740.00,
      icon: Wallet,
      color: '#f59e0b',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Linked Accounts</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.accountsList}>
        {accounts.map((account) => {
          const IconComponent = account.icon;
          return (
            <TouchableOpacity key={account.id} style={styles.accountCard}>
              <View style={[styles.iconContainer, { backgroundColor: account.color }]}>
                <IconComponent size={24} color="#ffffff" />
              </View>
              <View style={styles.accountInfo}>
                <Text style={styles.accountName}>{account.name}</Text>
                <Text style={styles.accountType}>{account.type}</Text>
              </View>
              <View style={styles.balanceContainer}>
                <Text style={styles.balanceAmount}>${account.balance.toFixed(2)}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>About Auto-Split</Text>
        <Text style={styles.infoText}>
          Your income is automatically split according to your allocation preferences when it arrives in
          your main account. Adjust your preferences in the Allocations tab.
        </Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
  },
  addButton: {
    backgroundColor: '#6366f1',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountsList: {
    padding: 20,
  },
  accountCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
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
  accountType: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  balanceContainer: {
    alignItems: 'flex-end',
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
  },
  infoSection: {
    padding: 20,
    backgroundColor: '#ffffff',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
});