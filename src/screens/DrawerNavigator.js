import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './Login'
import Home from './Home'
import Bedroom from './Bedroom'
const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
  return (
    <View style={{flex:1}}>
    <Drawer.Navigator>
      <Drawer.Screen 
      name='Login'
       component={Login}
       options={{headerShown:true}}
       />
       <Drawer.Screen 
      name='Home'
       component={Home}
       options={{headerShown:true}}
       />
       <Drawer.Screen 
      name='Bedroom'
       component={Bedroom}
       options={{headerShown:true}}
       />
    </Drawer.Navigator>
</View>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})