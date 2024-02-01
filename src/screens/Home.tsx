import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Task from '../components/Task';
import {SPACING} from '../constants';
import {EditModeContext, TasksContext} from '../context';
import {useEditingItem, useTasks} from '../hook';
import AddTask from '../components/AddTask';

const HomeScreen: React.FC = () => {
  const tasksData = useTasks();
  const editingItem = useEditingItem();

  return (
    <TasksContext.Provider value={tasksData}>
      <EditModeContext.Provider value={editingItem}>
        <View style={styles.container}>
          <View style={styles.internalContainer}>
            <Text style={styles.title}>Your tasks</Text>
            <FlatList
              data={tasksData.tasks}
              renderItem={({item, index}) => {
                return (
                  <Task
                    title={item.text}
                    onEdit={() => {
                      editingItem.setIndex(index);
                    }}
                    onDelete={() => {
                      tasksData.deleteTask(index);
                    }}
                  />
                );
              }}
            />
          </View>

          <AddTask />
        </View>
      </EditModeContext.Provider>
    </TasksContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: SPACING,
  },
  internalContainer: {
    flex: 1,
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
