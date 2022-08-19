import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])


  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  const { Height } = Dimensions.get('window');


  return (
    <View style={styles.container}>


      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tasks</Text>

        <View style={styles.items}>
            {/* All the todos/task */}

            {
              taskItems.map((item, index) =>{
                  return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>

                  <Task  text={item} />

                </TouchableOpacity>
                  )
              })
            }

            {/* <Task text={'first task'} />
            <Task text={'second task'} /> */}


        </View>

        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>

            <TextInput style={styles.input} placeholder='Add tasks' value={task}  onChangeText={text => setTask(text)}/>

            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>

        </KeyboardAvoidingView>


      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    // height: 500
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position:'absolute',
    bottom: -600,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addText: {},

});
