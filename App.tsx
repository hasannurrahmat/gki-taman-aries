import {SafeAreaView, StyleSheet} from 'react-native';
import Webview from './src/components/Webview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Webview />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
