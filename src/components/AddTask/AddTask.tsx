import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SPACING} from '../../constants';
import {TasksContext} from '../../context';
import Button from '../Button';

const AddTask = () => {
  const {tasks, addTask} = useContext(TasksContext);
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState<string | null>('');
  console.log('addTask -- tasks: ', tasks.length);

  return (
    <View>
      <Text style={styles.title}>Add new task</Text>

      <Text style={styles.label}>
        Name <Text style={styles.error}>*</Text>
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, !!error && styles.inputError]}
          onChangeText={v => {
            if (error) {
              setError(null);
            }
            setTaskName(v);
          }}
          value={taskName}
        />
        {!!error && <Text style={styles.error}>{error}</Text>}
      </View>
      <Button
        title="Add"
        onPress={() => {
          if (!taskName) {
            setError('The task name is required');
          }
          addTask(taskName);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  title: {
    fontSize: 24,
    paddingBottom: SPACING,
  },
  inputContainer: {
    marginBottom: SPACING,
  },
  input: {
    height: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: SPACING / 2,
    paddingHorizontal: SPACING / 2,
    fontSize: 16,
    marginBottom: SPACING / 4,
  },
  inputError: {
    borderColor: 'red',
  },
  label: {
    fontSize: 12,
    paddingBottom: SPACING / 4,
  },
});

export default AddTask;
