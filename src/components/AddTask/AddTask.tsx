import React, {useContext, useEffect, useMemo, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SPACING} from '../../constants';
import {EditModeContext, TasksContext} from '../../context';
import {Task} from '../../types';
import Button from '../Button';

const AddTask = () => {
  const {addTask, editTask, tasks} = useContext(TasksContext);
  const {mode, index, setIndex} = useContext(EditModeContext);

  const task = useMemo<Task | null>(
    () => (index === null ? null : tasks[index]),
    [index, tasks],
  );

  const [taskName, setTaskName] = useState(task?.text ?? '');
  const [error, setError] = useState<string | null>('');

  useEffect(() => {
    setTaskName(index === null ? '' : tasks[index].text);
  }, [index, tasks]);

  return (
    <View>
      <Text style={styles.title}>
        {task === null ? 'Add new task' : `Edit '${taskName}'`}
      </Text>

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
        title={mode === 'add' ? 'Add' : 'Save'}
        onPress={() => {
          if (!taskName) {
            setError('The task name is required');
            return;
          }

          if (mode === 'add') {
            setTaskName('');
            addTask(taskName);
          } else {
            editTask({...task!, text: taskName}, index!);
            setIndex(null);
          }
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
