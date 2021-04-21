import React, {Component} from 'react';
import axios from 'axios'
import {View,ScrollView,Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'


let helperArray = require('./user.json')
class List extends Component {

constructor(props){
  super(props);
    this.state = {
    allUsers: helperArray,
    usersFiltered:helperArray,
  };
}

// componentDidMount() {
//   axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(res => {
//       const persons = res.data;
//       this.setState({ persons });
//     })
// }



//// to search
searchUser(textToSearch){
  // alert(textToSearch)
  this.setState({
   usersFiltered: this.state.allUsers.filter(i=> 
    i.name.toUpperCase().includes(textToSearch.toUpperCase()),
    )
  })
}

render() {
      return (
        <ScrollView>
          <View>
          <TextInput label="Username" placeholder="Masukan username anda" onChangeText={text=>{this.searchUser(text)}}  />
          </View>
            {
             this.state.usersFiltered.map((items, index)=>(     
                <View style={styles.container}>
                      <TouchableOpacity onPress={ 
                        ()=>{
                          alert(`${items.name}. ${items.alamat}`)
                        }
                      }>
                        <Text style= {styles.text}>{items.name}</Text>
                      </TouchableOpacity>
                  </View>  
              ))
            }
        </ScrollView>
      )
    }
}

export default List;

const styles = StyleSheet.create({
  text:{
    marginHorizontal:20,
    marginVertical:10,
    borderColor:"#777",
    borderWidth:1,
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:20
  },
})
