import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import {Button,Input} from 'react-native-elements';

export default function Item() {
    return(
       
        <ScrollView>
        <View >
            <View style={styles.rowdirec}>
        <Image source={require('../assets/cart.png')} style={styles.cart} />
        <Image source={require('../assets/hamburger1.png')} style={styles.ham} />
        </View>
        
      
        
        
        <View style={styles.input}>
            

        <Input  placeholder='Search' />
        </View>
        <View style={styles.row}>
        <Image source={require('../assets/mutton.jpg') } style={styles.image} />
        
        <Image source={require('../assets/chickenfillet.jpg')} style={styles.image} />
        <Image source={require('../assets/fidhi.jpg')} style={styles.image} />
        <Image source={require('../assets/crab1.jpg')} style={styles.image} />
        </View>
        <View style={styles.row}>
            <Text style={styles.names}>
                Mutton
            </Text>
            <Text style={styles.names1}>
                Chicken
            </Text>
            <Text style={styles.names2}>
                Fish
            </Text>
            <Text style={styles.names3}>
                Special's
            </Text>
        </View>
        <View>
        <Image source={require('../assets/mutton-curry-cut.jpg')} style={styles.item} />
        </View>
        <Text style={styles.text}>
        Mutton curry cut
        </Text>
        <View style={styles.subtext}><Text>with bones small pieces which are perfect for curry</Text></View>
        <View style ={styles.row}><Text style={styles.subtext}>500g 15pc  approx.</Text>
        <Text style={styles.spl}>MRP : 345Rs</Text>
        </View>
         <View>
         <Button
  title="Add to Cart"
  buttonStyle={styles.button12}/>
         </View>
         <View>
        <Image source={require('../assets/cutchichi.jpg')} style={styles.item} />
        </View>
        <Text style={styles.text}>
        Chicken Biriyani cut
        </Text>
        <View style={styles.subtext}><Text> boneless small pieces which are perfect for biriyani</Text></View>
        <View style ={styles.row}><Text style={styles.subtext}>500g 30pc  approx.</Text>
        <Text style={styles.spl}>MRP : 200Rs</Text>
        </View>
         <View>
         <Button
  title="Add to Cart"
  buttonStyle={styles.button12}/>
         </View>
        </View>
        </ScrollView>
        )}
        const styles = StyleSheet.create({
            cart:{
                height:42,
                width:48,
                marginLeft:370, 
                marginRight:150 
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
                marginLeft:50, 
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
                height:30,
                width:50,
                marginLeft:40,
                    width: 50,
                    height: 50,
                    borderRadius:10,  
                    borderWidth: 1,
                    borderColor: '#dc4F0f', 
                    
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
                      best:{
                        height:66,
                        width:74,
                        marginLeft:30,
                            width: 90,
                            height: 90,
                            borderRadius:10,  
                            borderWidth: 1,
                            borderColor: '#0250a3', 
                            marginTop:10
                            
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
                marginTop:15,
                marginLeft:20,  
                fontSize:24,
                fontWeight:'bold',
            },
            subtext:{
                marginTop:8,
                marginLeft:20,  
                fontSize:15,
                width:'63%',
               
                
            },
            button12:{
                borderRadius:7,
                height:43,
                width:115,
                backgroundColor:'#dc4f0f',
                marginTop:10,
                marginLeft:'67%'
            },
        })
        