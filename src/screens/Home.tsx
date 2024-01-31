import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddTask from '../components/AddTask/AddTask';
import Task from '../components/Task';
import {SPACING} from '../constants';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Your tasks</Text>
        <Task />
        <Task />
      </View>

      <AddTask />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: SPACING,
  },
  title: {
    fontSize: 24,
    paddingBottom: SPACING,
  },
  input: {
    height: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: SPACING / 2,
    marginBottom: SPACING,
  },
});

export default HomeScreen;
