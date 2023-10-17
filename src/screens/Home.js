import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const Home = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.Text}>Home Sweet Home</Text>
      </View>
      <View >

      </View>
    </View>
  );
};
  export default Home
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          fontFamily:'Roboto'
      },
    topContainer:{
      color:'white',
      fontSize:25,
      lineHeight:'normal',
    },
    info:{
      flex:0.5,
      
    }
  })