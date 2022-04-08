import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import styles from './Styles'
const AddTodo = ({todos,setTodos}) => {
const [text,setText]=useState()

const handleOnChange=(text)=>{
  setText(text)
}



const addTodo=()=>{
  if(text){
    setTodos([...todos,{id:new Date().valueOf(),todo:text,done:false}])
  }

  setText('')
  
}
  return (
    <View style={styles.container}>
      <TextInput value={text} onChangeText={(text)=>handleOnChange(text)} placeholder='Yapilacak' style={styles.input}/>
      <TouchableOpacity onPress={addTodo} style={styles.btn}>
          <Text style={styles.btnText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddTodo

