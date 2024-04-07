import {SafeAreaView, StyleSheet} from 'react-native';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Webview from './src/components/Webview';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

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
