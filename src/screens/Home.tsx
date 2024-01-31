import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AddTask from '../components/AddTask/AddTask';
import Task from '../components/Task';
import {SPACING} from '../constants';
import useTasks from '../hook';
import {TasksContext} from '../context';

const HomeScreen: React.FC = () => {
  const {tasks, addTask} = useTasks();

  console.log('home -- tasks: ', tasks.length);

  return (
    <TasksContext.Provider value={{tasks, addTask}}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Your tasks</Text>
          <FlatList
            data={tasks}
            renderItem={({item}) => {
              return <Task title={item.text} />;
            }}
          />
        </View>

        <AddTask />
      </View>
    </TasksContext.Provider>
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
