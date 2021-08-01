import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import {Button,Input} from 'react-native-elements';

export default function End() {
    return(
       
        
        <View >
            <View style={styles.rowdirec}>
        
        <Image source={require('../assets/hamburger1.png')} style={styles.ham} />
        </View>
        <View style ={styles.center}><Image source={require('../assets/confeti.png')} style={styles.image} /></View>
        <View style={styles.center}><Text style={styles.Text}>Order Completed!!</Text>
        <Text style={styles.subtext}>Order No- 9953223</Text></View>
        <View><Text style={styles.Text}>Grand Total - 2150</Text></View>
        <View style={styles.button1}>
       <Button
  title="Continue Shopping"
  buttonStyle={styles.button123} onPress={() => {}}/>
         
       
     </View>
      <View >
      <Button
  title="Order Details"
  buttonStyle={styles.button12}/>
        </View>
</View>
    )}

    const styles = StyleSheet.create({cart:{
        height:42,
        width:48,
        marginLeft:370, 
        marginRight:150 
    },
    Text:{
        fontSize:22,
        marginTop:20,
        marginLeft:20

    },button12:{
        borderRadius:11,
        paddingVertical:18,
        paddingHorizontal:5,
        backgroundColor:'#aaaaaa',
        marginTop:10,
        margin:10
      },
    button123:{
      borderRadius:11,
      paddingVertical:18,
      paddingHorizontal:5,
      backgroundColor:'#dc4f0f',
      marginTop:10,
      margin:10
    },
    left:{
        marginEnd:20
    },
    center:{
        alignItems:'center',
justifyContent:'center',
},
    button:{
        height:43,
        width:49,
       color:"#ffffff",
        marginLeft:270, 
    },
    ham:{
        height:42,
        width:48,
        marginLeft:390, 
        marginRight:100 
        
    }, 
    rowdirec:{
        flexDirection:'row',
        justifyContent:'space-around',
        
       
    },
    input:{
         
        marginLeft:17,
        width:200,
        marginRight:250,
        marginTop:50,
        

    },
    spl:{
        color:'#dc4F0f',
       marginRight:20,
        marginTop:3,
         fontSize:20,
         
    },
    image:{
        
        marginLeft:10,
            width: 280,
            height: 280,
            borderRadius:10,  
            borderWidth: 1,
            borderColor: '#dc4F0f',
            marginTop:50,
            alignItems:'center',
            
            
          },
          item:{
            height:186,
            width:'90%',
            width: '90%',
            height: 186,
            borderRadius:10,  
            borderWidth: 1,
            borderColor: '#dc4F0f', 
            marginTop:30,
            marginLeft:20,
            zIndex:-99
               
                
              },
              border:{
                
                marginLeft:20,
                    width: 360,
                    height: 100,
                    borderRadius:10,  
                    borderWidth: 1,
                    borderColor: '#aaaaaa', 
                    marginTop:30
                    
                  },
    
    row:{
        flexDirection:'row',
    },
    names:{
        marginLeft:43,
    },
    names1:{
        marginLeft:40,
    },
    names2:{
        marginLeft:53,
    },
     names3:{
        marginLeft:52,
    }, text:{
        marginTop:30,
        marginLeft:20,  
        fontSize:28,
        fontWeight:'bold',
    },
    subtext:{
        marginTop:8,
        marginLeft:40,  
        fontSize:18,
        width:'30%',
       
    },
   
   

    })