
// import React from 'react';
// import { StyleSheet, Text, View, Button,TextInput,SafeAreaView} from 'react-native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';

// function Login({ navigation }) {
//   const [username, setUserName] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   return (
//     <View >
      
//       <h4>Username:</h4>
//       <TextInput
//         style={styles.input}
//         onChangeText={setUserName}
//         placeholder='username'
//         value={username}
//       />
//       <h4>Password:</h4>
//        <TextInput
//         style={styles.input}
//         onChangeText={setPassword}
//         placeholder='password'
//         value={password}
//       />
//       <a>Forgot Password?</a>
//       <h4 id='or'>Or</h4>
//       <Button
//         title="Login"
//         onPress={() => navigation.navigate('Home')}
//       />
//       <Text style={styles.titleText}>Don't have Account<a href='#'>Create Acccount</a></Text>
//     </View>
//   );
// }

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     marginBottom:12,
//     padding: 10,
//   },
//   smallText: {
//     color: '#000000',
//   },
 
// });


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const Home = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
  export default Home
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
      },
      smallText: {
          color: "#000000"
      }
  })