import React from 'react';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation, tasks, addTask }) {
    return (
      <MainLayout>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button
              title="Go to About"
              onPress={() => navigation.navigate('About')}
          />
      </MainLayout>
    );
}

export default HomeScreen;