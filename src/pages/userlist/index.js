import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Card from './card.js';
import Axios from 'axios';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Fetch
    // fetch('https://reqres.in/api/users')
    //   .then(res => res.json())
    //   .then(json => setUsers(json.data));
    //Axios
    //https://jsonplaceholder.typicode.com/users
   Axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
     setUsers(res.data),
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homeee Screen</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(item => (
          <Card style = {styles.card}
            key={item.id}
            name ={item.name}
            email={item.email}
            address={ item.address.street}
            phone= {item.phone}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  }, 
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
});

