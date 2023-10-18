import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const Home = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.title}>Home Sweet Home</Text>
      </View>
      <View style={styles.details} >
      <View style={styles.row}>
        <View style={styles.cell}>
          <View style={{display:'flex',flexDirection:'row'}}>
        <Text style={styles.text}>22</Text>
        <View style={{height:9,width:9}}>
         <Image source={require('../../assets/Ellipse 5.svg')} style={{flex:1}}></Image>
         </View>
         <Text style={styles.text}>C</Text>
         </View>
        <Text style={styles.text}>Avg House Temp</Text>
        </View>
        <View style={styles.cell}>
        <View style={{display:'flex',flexDirection:'row'}}>
        <Text style={styles.text}>60</Text>
        <View style={{height:9,width:9}}>
         <Image source={require('../../assets/Ellipse 5.svg')} style={{flex:1}}></Image>
         </View>
         <Text style={styles.text}>F</Text>
         </View>
        <Text style={styles.text}>Outside Temp</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
        <Text style={styles.text}>60%</Text>
        <Text style={styles.text}>PPP</Text>
        </View>
        <View style={styles.cell}>
        <Text style={styles.text}>3</Text>
        <Text style={styles.text}>Devices</Text>
        </View>
      </View>
      </View>
      <View style={{ flex: 1}} > 
      <View >
      <Text style={styles.smallTitle}>Rooms</Text>
      </View>
         <View style={styles.roomBlock}>
         <View style={styles.roomItems}><Text style={styles.text}>Master Bedroom</Text></View>
        <View style={styles.roomItems}><Text style={styles.text} >Bedroom</Text></View>
         </View>
         <View style={styles.roomBlock}>
         <View style={styles.roomItems}><Text style={styles.text}>Kids Room</Text></View>
        <View style={styles.roomItems}><Text style={styles.text}>Drawing Room</Text></View>
         </View>
      </View>
      <View style={{flex: 1}}> 
      <View >
      <Text style={styles.smallTitle}>Routines</Text>
      </View>
      <View style={styles.routines}>
         <View style={styles.routinesItems1}>
          <View style={{height:'60%',width:'40%'}}>
         <Image source={require('../../assets/sunrise 1.svg')} style={styles.imageBackground}></Image>
         </View>
         <View><Text style={styles.text}>Kids Room</Text></View>
         </View>
        <View style={styles.routinesItems2}>
           <View style={{height:'60%',width:'40%'}}>
         <Image source={require('../../assets/Vector.svg')} style={styles.imageBackground}></Image>
         </View>
         <View><Text style={{color:'#FDA43C'}}>OUT</Text></View>
        </View>
         </View>
      </View>
    {/* -------------------------- */}
      <View style={{flex: 1}} >
      <View >
      <Text style={styles.smallTitle}>Device in Use</Text>
      </View>
      <View style={styles.deviceItems}>
      <View style={styles.deviceImage}>
         <Image source={require('../../assets/lamp 1.svg')} style={styles.imageBackground}></Image>
         </View>
         <View style={styles.deviceImage}>
         <Image source={require('../../assets/light-bulb 1.svg')} style={styles.imageBackground}></Image>
         </View>
         <View style={styles.deviceImage}>
         <Image source={require('../../assets/air-conditioner 1.svg')} style={styles.imageBackground}></Image>
         </View>
         <View style={styles.deviceImage}>
         <Image source={require('../../assets/Group.svg')} style={styles.imageBackground}></Image>
         </View>
      </View>
      <View style={styles.routines}>
           
      </View>
      </View>
    </View>
  );
};
  export default Home
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          fontFamily:'Roboto', 
          backgroundImage: 'linear-gradient(180deg, #CB9191 0%, #000 99.98%, #514E4E 99.99%, rgba(0, 0, 0, 0.00) 100%)',
          flexDirection: 'column',
        },
    topContainer:{
      color:'white',
      fontSize:25,
      lineHeight:'normal',
    },
    info:{
      flex:0.5,
      
    },
    text:{
       color:'black',
       fontFamily:'Roboto',
       fontSize:'120%',
      fontWeight:150,
    },
    title:{
      color:'#fff',
      fontFamily:'Roboto',
      fontSize:'175%',
      fontWeight:200,
      lineHeight:'normal'
    },
    smallTitle:{
      color:'#FDA43C',
      fontFamily:'Roboto',
      fontSize:'120%',
      fontWeight:150,

    },
    details:{
      flex: 1.25,
      width:'75%',
      paddingTop:'10%',
      paddingBottom:'10%',
      marginLeft:'12%'
    },
    row: {
      flex: 1,
      flexDirection: 'row',
    },
    cell: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#EA9939',
      backgroundColor:'#FEB35B',
      justifyContent:'center',
      alignItems:'center'
    },
    roomBlock:{
      flex:1,
      flexDirection:'row',
      paddingLeft:'2%',
      paddingRight:'2%'
    },
    roomItems:{
     flex:1,
     margin:'1%',
      backgroundImage:'linear-gradient(90deg, #FFF 0%, #FDA43C 100%)',
      backgroundColor:'#FEB35B',
      borderRadius:'10%',
      justifyContent:'center',
      alignItems:'center'
    },
    routines:{
      flex:1,
      flexDirection:'row',
      paddingLeft:'2%',
      paddingRight:'2%'
    },
    routinesItems1:{
      flex:1,
      margin:'6%',
       backgroundColor:'#FEB35B',
       borderRadius:'10%',
       justifyContent:'center',
       alignItems:'center'
    },
    routinesItems2:{
      flex:1,
      margin:'6%',
       backgroundColor:'#3F3F3F',
       borderRadius:'10%',
       justifyContent:'center',
       alignItems:'center'
    },
    deviceItems:{
      flex:1,
      flexDirection:'row',
      marginTop:'5%',
      backgroundColor:"#FEB35B",
      marginLeft:'10%',
      backgroundImage:'linear-gradient(90deg, #FFF 0%, #FDA43C 100%)',
      borderTopLeftRadius:100,
      borderBottomLeftRadius:100
    },
    imageBackground: {
      flex: 1,

   
    },
    deviceImage:{
      height:50,
      width:60,
      marginTop:'2%',
      marginRight:'10%'
    }
  })