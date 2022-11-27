import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';
import { services } from '../services/services';
import axios from 'axios';

export default function HomeScreen() {
  const [newsData, setNewsData] = useState([])
  useEffect(() => {
      services('general')
          .then(data => {
            console.log(data)
              setNewsData(data)
          })
          .catch(error => {
              console.log("try again: ",error)
          })
  }, [])
  return (
    <NativeBaseProvider>
    <View >
        <View style={styles.container}>
           <Text style={styles.text}>All News Catagories</Text>
        </View>

            <View>
              <View style={styles.flex}>
                  <Text style={styles.title}>Title</Text>
                  <Text style={styles.date}>Date</Text>
              </View>
              <View style={styles.description}>
                  <Text style={styles.title} >Description</Text>
              </View>
            </View>
            <Divider bg='#61e4fa' my='3'/>
            <View>
              <View style={styles.flex}>
                  <Text style={styles.title}>Title</Text>
                  <Text style={styles.date}>Date</Text>
              </View>
              <View style={styles.description}>
                  <Text style={styles.title} >Description</Text>
              </View>
            </View>
            <Divider bg='#61e4fa' my="3"/>
            <View>
            <View style={styles.flex}>
                  <Text style={styles.title}>Title</Text>
                  <Text style={styles.date}>Date</Text>
              </View>
              <View style={styles.description}>
                  <Text style={styles.title} >Description</Text>
              </View>
            </View>
            <Divider bg='#61e4fa' my="3"/>
            <View>
            <View style={styles.flex}>
                  <Text style={styles.title}>Title</Text>
                  <Text style={styles.date}>Date</Text>
              </View>
              <View style={styles.description}>
                  <Text style={styles.title} >Description</Text>
              </View>
            </View>
    </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  
  container:{
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'rgba(1,1,1,0.9))',
    border: '#f7f500'
    
  },
  text:{
    fontSize:24,
    color: '#f7f500',
    fontFamily:'Cyberpunk',
    textShadow: 'rgb(0,208,255) 2px 3px 0px'
  },
  flex:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
  },
  title:{
    fontSize:19,
  },
  date:{
    fontSize:19,
  },
  description:{
    padding:20,
  }

})