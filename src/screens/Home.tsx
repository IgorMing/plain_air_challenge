import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
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

      <Button text="Add" />
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
});

export default HomeScreen;
