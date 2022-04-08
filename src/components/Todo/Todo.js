import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useEffect,useCallback,useState} from 'react'

import styles from './Styles'
const Todo = ({item,todos,setTodos,completeTodo}) => {
   

   

   

//    useEffect(()=>{
//     console.log(item);
//    },[item.done])
 
    

   
    
  return (
    <TouchableOpacity onPress={()=>completeTodo(item.id)} style={[styles.todo,item.done&&{backgroundColor:'#3C4B52'}]}>
      <Text style={[styles.text,item.done&&{textDecorationLine:'line-through',color:'#102027'}]}>{item.todo}</Text>
    </TouchableOpacity>
  )
}

export default Todo

