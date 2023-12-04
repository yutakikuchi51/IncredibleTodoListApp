import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export default function ToDoForm ({ addTask }) {

  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksData = require('../data/tasks.json');
    setTasks(tasksData.tasks); 
  }, []);

    const handleAddTask = () => {
      if (tasks.length > 0) {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        const selectedTask = tasks[randomIndex];
        setTaskText(selectedTask);
      }
    };

    return (
      <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={taskText}
          placeholder="Add new task..."
          onChangeText={(text) => setTaskText(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Generate Random Task" onPress={handleAddTask} />
        <Button title="Add Task" onPress={() => addTask(taskText)} />
      </View>
    </View>
  );
}      

const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
    container: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    buttonContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-around',
      width: '100%', 
    },
});
  