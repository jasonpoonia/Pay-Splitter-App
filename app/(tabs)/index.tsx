import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react-native';

export default function HomeScreen() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [5000, 5200, 5400, 5300, 5600, 5800],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back, John</Text>
        <Text style={styles.subtitle}>Your financial overview</Text>
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <View style={styles.balanceRow}>
          <DollarSign size={24} color="#1e293b" />
          <Text style={styles.balanceAmount}>5,800.00</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Income Trend</Text>
        <LineChart
          data={chartData}
          width={350}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(99, 102, 241, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#6366f1',
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.splitSection}>
        <Text style={styles.sectionTitle}>Current Split</Text>
        <View style={styles.splitCards}>
          <View style={styles.splitCard}>
            <View style={styles.splitCardHeader}>
              <Text style={styles.splitCardTitle}>Savings</Text>
              <ArrowUpRight size={20} color="#10b981" />
            </View>
            <Text style={styles.splitCardAmount}>40%</Text>
            <Text style={styles.splitCardValue}>$2,320.00</Text>
          </View>

          <View style={styles.splitCard}>
            <View style={styles.splitCardHeader}>
              <Text style={styles.splitCardTitle}>Bills</Text>
              <ArrowDownRight size={20} color="#ef4444" />
            </View>
            <Text style={styles.splitCardAmount}>30%</Text>
            <Text style={styles.splitCardValue}>$1,740.00</Text>
          </View>

          <View style={styles.splitCard}>
            <View style={styles.splitCardHeader}>
              <Text style={styles.splitCardTitle}>Spending</Text>
              <ArrowDownRight size={20} color="#f59e0b" />
            </View>
            <Text style={styles.splitCardAmount}>30%</Text>
            <Text style={styles.splitCardValue}>$1,740.00</Text>
          </View>
        </View>
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
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  balanceCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1e293b',
    marginLeft: 8,
  },
  chartContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 20,
    borderRadius: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  splitSection: {
    padding: 20,
  },
  splitCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  splitCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    width: '31%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  splitCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  splitCardTitle: {
    fontSize: 14,
    color: '#64748b',
  },
  splitCardAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
    marginTop: 8,
  },
  splitCardValue: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
});