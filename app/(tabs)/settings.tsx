import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Bell, Shield, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

export default function SettingsScreen() {
  const settingsSections = [
    {
      title: 'Notifications',
      icon: Bell,
      color: '#6366f1',
      options: [
        {
          name: 'Income Received',
          description: 'Get notified when income is received',
          type: 'switch',
          value: true,
        },
        {
          name: 'Split Complete',
          description: 'Get notified when auto-split is complete',
          type: 'switch',
          value: true,
        },
      ],
    },
    {
      title: 'Security',
      icon: Shield,
      color: '#10b981',
      options: [
        {
          name: 'Two-Factor Authentication',
          description: 'Add an extra layer of security',
          type: 'switch',
          value: false,
        },
      ],
    },
    {
      title: 'Support',
      icon: HelpCircle,
      color: '#f59e0b',
      options: [
        {
          name: 'Help Center',
          description: 'Get help with your account',
          type: 'button',
        },
        {
          name: 'Contact Support',
          description: 'Reach out to our support team',
          type: 'button',
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.profile}>
        <View style={styles.profileImage}>
          <Text style={styles.profileInitials}>JD</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
        </View>
      </View>

      {settingsSections.map((section, index) => {
        const IconComponent = section.icon;
        return (
          <View key={index} style={styles.section}>
            <View style={styles.sectionHeader}>
              <IconComponent size={20} color={section.color} />
              <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>

            {section.options.map((option, optionIndex) => (
              <View key={optionIndex} style={styles.option}>
                <View style={styles.optionInfo}>
                  <Text style={styles.optionName}>{option.name}</Text>
                  <Text style={styles.optionDescription}>{option.description}</Text>
                </View>
                {option.type === 'switch' ? (
                  <Switch value={option.value} onValueChange={() => {}} />
                ) : (
                  <TouchableOpacity>
                    <Text style={styles.buttonText}>View</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        );
      })}

      <TouchableOpacity style={styles.logoutButton}>
        <LogOut size={20} color="#ef4444" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
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
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  profileEmail: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  section: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginLeft: 8,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  optionInfo: {
    flex: 1,
  },
  optionName: {
    fontSize: 16,
    color: '#1e293b',
  },
  optionDescription: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  buttonText: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '600',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    marginTop: 20,
    marginBottom: 40,
  },
  logoutText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});