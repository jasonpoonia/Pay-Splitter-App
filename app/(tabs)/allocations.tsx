import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Plus } from 'lucide-react-native';

export default function AllocationsScreen() {
  const pieData = [
    {
      name: 'Savings',
      population: 40,
      color: '#10b981',
      legendFontColor: '#64748b',
    },
    {
      name: 'Bills',
      population: 30,
      color: '#ef4444',
      legendFontColor: '#64748b',
    },
    {
      name: 'Spending',
      population: 30,
      color: '#f59e0b',
      legendFontColor: '#64748b',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Income Allocations</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.chartContainer}>
        <PieChart
          data={pieData}
          width={350}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      <View style={styles.allocationsList}>
        {pieData.map((allocation, index) => (
          <View key={index} style={styles.allocationCard}>
            <View style={styles.allocationHeader}>
              <View style={[styles.colorIndicator, { backgroundColor: allocation.color }]} />
              <Text style={styles.allocationName}>{allocation.name}</Text>
            </View>
            <View style={styles.allocationDetails}>
              <Text style={styles.allocationPercentage}>{allocation.population}%</Text>
              <Text style={styles.allocationAmount}>
                ${((5800 * allocation.population) / 100).toFixed(2)}
              </Text>
            </View>
          </View>
        ))}
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
  chartContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  allocationsList: {
    padding: 20,
  },
  allocationCard: {
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
  allocationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  allocationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  allocationDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  allocationPercentage: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
  },
  allocationAmount: {
    fontSize: 20,
    color: '#64748b',
  },
});