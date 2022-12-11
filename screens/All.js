import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NativeBaseProvider, FlatList, Box,ScrollView, Divider, Image, Spinner } from 'native-base';
import { services } from '../services/services';
import moment from 'moment';
import axios from 'axios';

export default function HomeScreen() {
  const [newsData, setNewsData] = useState([])
  useEffect(() => {
      services('general')
          .then(data => {
            
              setNewsData(data)
          })
          .catch(error => {
              console.log("try again: ",error)
          })
  }, [])

  return (
    <NativeBaseProvider>
      
        <View style={styles.container}>
           <Text style={styles.text}>top  stories</Text>
        </View>


          {newsData.length >1 ? (

<FlatList 
data={newsData} 

renderItem={({
  item}) => (<Box 
    _text={{ fontWeight: "bold",
            color: "rgb(0,208,255)"}} 
            px='5' py='2' rounded="md" my='0.4' bg= "rgba(1,1,1,0.9)">
    <Image
      height={200}
      width={300}
      resizeMode={'contain'}
      borderRadius={100}
      source={{
        uri: item.urlToImage ? item.urlToImage : 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg',
    }}
      alt='article image'

    />
    {item.title}
    <Text style={styles.publish}>{moment(item.publishedAt).format('LLL')}</Text>
    
    <Text style={styles.newsDescipt}>{item.description}</Text>
   
      </Box>
      )} 
      showsVerticalScrollIndicator={false}
      />
     



          ): (
          <View style={styles.Spinner}>
          <Spinner color= 'black'/>
          </View>
          )
         
          }

   
      
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
  },
  newsDescipt:{
    color:'#f7f500',
    marginTop:10
  },
  publish:{
    color: "white"
  },
  Spinner:{
    display:'flex',
    justifyContent:'center',
    alignContent: 'center',
    padding:20,
    height: 800
  }

})

{/* 
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
            </View> */}