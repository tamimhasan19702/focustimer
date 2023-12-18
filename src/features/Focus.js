import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ addText }) => {
  const [text, setText] = useState(null);
  return (
    <View style={styles.container}>

    <View style={{paddingLeft: 10,}}>
          <Text style={{color: "white", fontSize: 30}}>What would you like to Focus on? 🥱</Text>
    </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to foucs on"
          onChangeText={setText}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addText(text)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: 20,
  },
  inputContainer: {
    padding: spacing.md,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
