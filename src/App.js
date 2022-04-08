import {StyleSheet, Text, View,FlatList} from 'react-native';
import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo/Todo';

const App = () => {
  const [todos,setTodos]=useState([])


  const renderTodo=({item})=><Todo completeTodo={completeTodo} todos={todos} setTodos={setTodos} item={item}/>

  const completeTodo=(id)=>{
    let list=todos;
   
    list.forEach(item=>{
        if(item.id===id){
            item.done=true
        }
    })
   

    setTodos([...list])

}
  useEffect(()=>{
  
  },[todos.length])


  return (
    <View style={styles.container}>
      <Header count={todos.length} />
      <FlatList
      data={todos}
      keyExtractor={item=>item.id}
      renderItem={renderTodo}
      
      />
      <AddTodo todos={todos} setTodos={setTodos}/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    paddingHorizontal: 30,
    justifyContent:'space-between'
  },
});
