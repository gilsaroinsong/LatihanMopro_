import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './pages/userlist/index'
import Registrasi from './pages/registrasi/index'
import List from './pages/searchJSON/index'
import InputData from './inputData/inputData.js'
const App = () => {
  return (
    <View>
       {/* <HomeScreen/> */}
       {/* <Registrasi/>  */}
      {/* <List/> */}
      <InputData/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
