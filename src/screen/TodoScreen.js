import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import FallBack from '../Components/FallBack';


console.log(Date.now().toString())
const TodoScreen = () => {
    //init local states
    const[todo,setTodo]=useState("")
    const[todolist,setTodoList]=useState([])
    const[editedTodo,setEditedTodo]=useState(null)

 const handleAddTodo=()=>{


  if(todo===""){
    return ;
  }
//structure of todo 
    setTodoList([...todolist,{id:Date.now().toString(),title: todo}])
    setTodo("")

 }

 const handleDeleteTodo=(id)=>{
    //updated list

    const updatedTodoList=todolist.filter((todo)=>todo.id!=id)

    setTodoList(updatedTodoList)
    
 
 }

 const handleEditTodo=(todo)=>{
  setEditedTodo(todo)
  setTodo(todo.title)

 }
 const handleUpdateTodo = () => {
  const updatedTodos = todolist.map((item) => {
      if (item.id === editedTodo.id) {
          return { ...item, title: todo }
      }
      return item
  });
  setTodoList(updatedTodos)
  setEditedTodo(null)
  setTodo("")
}
//Render todos
  const renderTodos = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor: "#DCDCDC",
        borderRadius: 13,
        paddingHorizontal: 15, // Adjusted padding
        paddingVertical: 10,   // Adjusted padding
        marginBottom: 12,
        backgroundColor: "#9400D3",
        flexDirection:"row",
        alignItems:'center',
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.8,
        shadowRadius: 5,
      }}>
    
        <Text style={{
          color: "#FFFFFF",
          fontWeight:"600",
          fontSize: 15,
          flex:1
        }}>{item.title}</Text><IconButton icon="pencil" iconColor='#DCDCDC' onPress={()=>handleEditTodo(item)}/>
        <IconButton icon="trash-can" iconColor='#DCDCDC'onPress={()=>handleDeleteTodo(item.id)}/>
        
      </View>
    );
  }

  return (
    <View style={{ marginHorizontal: 16, marginTop: 16 }}>
      {/*add your task input field*/}
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#9400D3",
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 16,
          marginBottom: 16 
        }}
        placeholder ='Add your Task'
      
        value={todo}
        onChangeText={(userText)=>setTodo(userText)}
      />
      {
        editedTodo ?  <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: "#9400D3",
          borderRadius: 6,
          marginTop: 6, 
          paddingHorizontal: 16,
          paddingVertical: 12,
          marginBottom:14 
        }}
        onPress={()=>handleUpdateTodo()}
      >
        <Text style={{
          color: "#FFFFFF",
          fontWeight: 'bold',
          fontSize: 20
        }}>Save</Text>
      </TouchableOpacity> : (<TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: "#9400D3",
          borderRadius: 6,
          marginTop: 6, 
          paddingHorizontal: 16,
          paddingVertical: 12,
          marginBottom:14 
        }}
        onPress={()=>handleAddTodo()}
      >
        <Text style={{
          color: "#FFFFFF",
          fontWeight: 'bold',
          fontSize: 20
        }}>Add</Text>
      </TouchableOpacity>)
      }
      
      
    
      {/* Render Todo List */}
      <FlatList
        data={todolist}
        renderItem={renderTodos}
        keyExtractor={(item) => item.id}
      />
      {
        todolist.length<=0 && <FallBack/>
      }
    
    </View>
  );
}

export default TodoScreen;

const styles = StyleSheet.create({});
