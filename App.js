import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const TestComponent = () => {
  const [shouldThrowError, setShouldThrowError] = useState(false);

  const throwError = () => {
    setShouldThrowError(true);
  };

  if (shouldThrowError) {
    throw new Error('テスト用のエラーが発生しました');
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="例外を発生させる" onPress={throwError} />
      <StatusBar style="auto" />
    </View>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <TestComponent />
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
