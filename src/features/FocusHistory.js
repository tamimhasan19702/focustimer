import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.noItem}>**We haven't Focused on anything 😪</Text>;

  const renderItem = ({ item }) => (
    <Text style={styles.listItem}>-> {item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>**Things we have previously focused on: </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'start',
    paddingLeft: spacing.md,
    flex: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  listItem: {
    color: 'white',
    marginTop: 2,
    marginBottom: 2,
  },
  noItem: {
    color: 'white',
    paddingLeft: spacing.md,
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 20
  },
});
