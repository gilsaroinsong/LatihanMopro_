import React, {useState} from 'react'
import {View,TextInput,Button,Text,StyleSheet} from 'react-native'
import axios from 'axios'

const InputData = ()=>{
  const [firstName,setfirstName] = useState();
  const [lastName,setlastName] = useState();
  const [email,setEmail] = useState();
 
   const Submit = ()=>{
    const dt = {
      firstName:firstName,
      lastName: lastName,
      email:email,
    }

    axios.post('http://10.0.2.2:3004/users', dt)
    .then(res=>{
        console.log(res)
    })

  }

  return(
    <View style={style.container}>
      <Text style={{fontWeight:'bold',fontSize:40,marginBottom:30}}>Registration</Text>
      <Text style={style.bio}>First Name</Text>
      <TextInput value={firstName} style={style.label} placeholder='masukan nama depan' onChangeText={e=>setfirstName(e)} />
      <Text style={style.bio}>Last Name</Text>
      <TextInput value={lastName} style={style.label} placeholder='masukan nama belakang' onChangeText={e=>setlastName(e)} />
      <Text style={style.bio}>Email</Text>
      <TextInput value={email} style={style.label} placeholder='input your email' onChangeText={e=>setEmail(e)} /> 
       <Button title='Save'onPress={Submit}/>
    </View>
  )
}

export default InputData

const style = StyleSheet.create({
  container:{
    padding:10,
  },
  bio:{
    fontWeight:'bold',
    fontSize:12
  },
  label:{
    borderColor: "grey",
    marginVertical:11,
    borderWidth:2,
    padding:5,
  }
})