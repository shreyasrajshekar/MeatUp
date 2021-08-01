import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import {Button,Input} from 'react-native-elements';

export default function Cart() {
    return(
       
        
        <View >
            <View style={styles.rowdirec}>
        
        <Image source={require('../assets/hamburger1.png')} style={styles.ham} />
        </View>
        <View style={styles.row}>
        <Text style={styles.text}>
        Your Cart
        </Text>
        <Image source={require('../assets/cartdel.png')} style={styles.del} />
        </View>
        
        <View style={styles.border}>
            <View style={styles.row}>
        <Image source={require('../assets/mutton-curry-cut.jpg')} style={styles.image} />
        <Text style={styles.subtext}>Mutton curry cut MRP:345</Text>
        <Image source={require('../assets/cancel.png')} style={styles.cancel} />
        
        </View>
        
        
        </View>
        <View style={styles.border}>
            <View style={styles.row}>
        <Image source={require('../assets/mutton-curry-cut.jpg')} style={styles.image} />
        <Text style={styles.subtext}>Mutton curry cut MRP:345</Text>
        <Image source={require('../assets/cancel.png')} style={styles.cancel} />
        
        </View>
        
        
        </View><View style={styles.border}>
            <View style={styles.row}>
        <Image source={require('../assets/mutton-curry-cut.jpg')} style={styles.image} />
        <Text style={styles.subtext}>Mutton curry cut MRP:345</Text>
        <Image source={require('../assets/cancel.png')} style={styles.cancel} />
        
        </View>
        
        
        </View>
        <View><Text style={styles.left}>Cart total - 1340</Text></View>
        </View>
        )}
        const styles = StyleSheet.create({
            cart:{
                height:42,
                width:48,
                marginLeft:370, 
                marginRight:150 
            },
            left:{
                marginEnd:20
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
                    width: 100,
                    height: 80,
                    borderRadius:10,  
                    borderWidth: 1,
                    borderColor: '#dc4F0f',
                    marginTop:10
                    
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
                marginLeft:20,  
                fontSize:18,
                width:'30%',
               
                
            },
            button12:{
                borderRadius:7,
                height:43,
                width:115,
                backgroundColor:'#dc4f0f',
                marginTop:10,
                marginLeft:'67%'
            },
            del:{
                height:33,
                width:38,
                marginLeft:175, 
                marginTop:30
                 
                
            }, 
            cancel:{
                height:25,
                width:25,
                marginLeft:75,
                marginTop:10
                 
                
            }, 
            sub1:{
                marginLeft:130,
                marginTop:'0%'
            }
        
        })