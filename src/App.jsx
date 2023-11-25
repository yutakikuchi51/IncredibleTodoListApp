/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {SafeAreaView,} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ])

  const addTask = (taskText) => {
    // Implement the logic to add a new task
    setTasks([...tasks, taskText]);
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} tasks={tasks} addTask={addTask} />}
        </Stack.Screen>
        <Stack.Screen name="About" component={AboutScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
