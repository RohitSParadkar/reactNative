import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigator from './DrawerNavigator'
const Parent = () => {
  return (
    <View style={styles.container}>
      <DrawerNavigator/>
    </View>
  )
}

export default Parent

const styles = StyleSheet.create({
 container:{
    flex: 1,

 }

})