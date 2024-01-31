import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SPACING} from '../../constants';
import Button from '../Button';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  return (
    <View>
      <Text style={styles.title}>Add new task</Text>

      <Text style={styles.label}>
        Name <Text style={styles.red}>*</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setTaskName}
        value={taskName}
      />
      <Button text="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  red: {
    color: 'red',
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
    paddingHorizontal: SPACING / 2,
    fontSize: 16,
  },
  label: {
    fontSize: 12,
    paddingBottom: SPACING / 4,
  },
});

export default AddTask;
