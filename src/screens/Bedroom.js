import { StyleSheet, Text, View, Image, TouchableOpacity,Alert} from 'react-native'
import React, { useState } from 'react'
import DropDown from './components/DropDown';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons/faFan'
const Bedroom = () => {
  const [count, setCount] = useState(0);
  const onPress = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  console.log(count)
  return (

    <View style={styles.container}>
      <View style={styles.dropDown}>
        <DropDown />
      </View>
      {/* ------------------------------ */}
      <View style={styles.fanIcon}>
        <View style={{ height: 195, width: 375 }}>
          <Image source={require('../../assets/Fan.png')} style={{ flex: 1 }}></Image>
        </View>
      </View>

      {/* -----------------middle container--------------------- */}
      <View style={styles.middleContiner}>
        <View>
          <Text style={styles.headingText}>Black Ceiling Fan</Text>
        </View>
        <View style={styles.controller} >
          <View style={{ height: 24, width: 24 }}>
            <Image source={require('../../assets/wind 2.svg')} style={{ flex: 1 }}></Image>
          </View>
          <Text style={styles.headingText}>20</Text>
          <View style={{ height: 24, width: 24 }}>
            <Image source={require('../../assets/wind 1.svg')} style={{ flex: 1 }}></Image>
          </View>
        </View>
      </View>
      {/* ----------------Down container--------------- */}
      <View style={styles.downContiner}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.buttonIcon}>
            <Image source={require('../../assets/Button.png')} style={{ flex: 1 }}></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Bedroom

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #EAA9A9 0%, #000 99.98%, #514E4E 99.99%, rgba(0, 0, 0, 0.00) 100%);'
  },
  headingText: {
    color: '#FDA43C',
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 400,
  },
  controller: {
    flex: 0.5,
    height: 77,
    width: 245,
    backgroundImage: 'linear-gradient(90deg, rgba(253, 164, 60, 0.09) 0%, rgba(253, 164, 60, 0.09) 100%)',
    borderRadius: 100,
    margin: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  dropDown: {
    flex: 0.1,
    marginLeft: '50%',
    marginTop: '10%',
    marginRight: '10%'

  },
  fanIcon: {
    flex: 1,
    marginTop: '10%'
  },
  middleContiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  downContiner: {
    flex: 1,
  },
  buttonIcon: {
    height: 228,
    width: 228,
    marginLeft: '20%'
  }
})