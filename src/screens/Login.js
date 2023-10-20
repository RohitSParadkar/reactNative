import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Example from '../../assets/Example';
function Login({ navigation }) {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.button}>
        <Text style={styles.text}>Sign in with Facebook</Text>
      </LinearGradient>
      <Image source={require('../../assets/bgimage.png')} style={styles.imageBackground} />
      <View style={styles.loginContent}>
        <Text style={styles.textSample}>SAMPLE</Text>
        <Text style={styles.textIOT}>IOT APP</Text>
      </View>
      <View style={styles.loginBox}>
        <View style={{marginTop:'10%'}}>
        <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 20 }}>Sign In</Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setUserName}
            placeholder='Email ID'
            value={username}
          />
           {/* <Image source={require('./email.png')} style={styles.inputImage} /> */}
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            placeholder='Enter Password'
            value={password}
            secureTextEntry
          />
          {/* <Image source={require('./lock.png')} style={styles.inputImage} /> */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.account}>
          <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 13 }}>Don't have an account yet?</Text>
          <a style={{ color: '#FDA43C', fontFamily: 'Roboto', fontSize: 13 }} href='#'>Create an account</a>
        </View>
      </View>
      </View>
    </View>
  );
}

export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'50%',
    backgroundImage:'linear-gradient(180deg, rgba(240, 160, 115, 0.00) 0%, #CC7154 100%, #CC7154 100%)'
    
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '50%',
    position: 'absolute',
    backgroundImage: 'linear-gradient(180deg, rgba(240, 160, 115, 0.00) 0%, #CC7154 100%, #CC7154 100%)',
  },
  textSample: {
    color: 'black',
    fontSize: 33,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  textIOT: {
    color: 'black',
    fontSize: 60,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  loginContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    backgroundImage: 'linear-gradient(180deg, #CB9191 0%, #000 99.98%, #514E4E 99.99%, rgba(0, 0, 0, 0.00) 100%)',
    height: 414,
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  input: {
    height: 52,
    width: 301,
    borderWidth: 1,
    borderRadius: 8,
    margin:12,
    color: 'white',
    padding: 10,
    borderColor: '#FDA43C'
  },
  loginButton: {
    width: 297,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#FDA43C',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12
  },
  loginButtonText: {
    color: 'Black',
    fontSize: 18,
    fontFamily: 'Roboto',
  },
  account :{
    alignItems:'center',
    justifyContent:'center',
    marginTop:'2%'
  },
  inputImage: {
    width: 10, // Adjust the width and height of the image as needed
    height: 10,
    marginRight: 10,
  },

});

