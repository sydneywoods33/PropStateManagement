import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <View>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.taskItem}>
          {task}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    textDecorationLine: 'none',
    color: 'gray',
    marginBottom: 5, 
  },
});

export default ToDoList;
