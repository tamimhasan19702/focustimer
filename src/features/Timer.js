import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { Countdown } from '../components/CountDown';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Timing } from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
  4 * ONE_SECOND_IN_MS,
  5 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onEnd={onEnd}
          onProgress={setProgress}
        />
        <View style={{ paddingTop: 20 }}>
          <Text
            style={{
              color: colors.white,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 15,
            }}>
            {' '}
            Focusing on:
          </Text>
          <Text
            style={{ color: colors.white, textAlign: 'center', fontSize: 14 }}>
            {focusSubject}
          </Text>
        </View>
      </View>

      <View style={{ paddingTop: 20 }}>
        <ProgressBar
          style={{ color: '#5e84e2', height: 10 }}
          progress={progress}
        />
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title={'start'} onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title={'pause'} onPress={() => setIsStarted(false)} />
        )}
      </View>

      <View style={styles.clearWrapper}>
        <RoundedButton
          size={75}
          title={'-'}
          onPress={() => {
            clearSubject();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDireaction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  timingWrapper: {
    flexDirection: 'row',
    flex: 0.1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  clearWrapper: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
