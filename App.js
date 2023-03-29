import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

// Import components
import HomeScreen  from "./assets/components/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
    width: "100%",
    height: "100%",
  },
});
