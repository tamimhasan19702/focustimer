import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import React, { useState } from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentText, SetCurrentText] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentText ? (
        <>
          <Focus addText={SetCurrentText} style={styles.focusField} />
          <FocusHistory history={history} style={styles.focusHistory} />
        </>
      ) : (
        <Timer
          focusSubject={currentText}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => {
            SetCurrentText(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 5 : 0,
    backgroundColor: colors.DarkBlue,
  },
});
