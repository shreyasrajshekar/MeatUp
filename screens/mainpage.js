import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import {Button,Input} from 'react-native-elements';


export default function Main() {
    return(
       
        <ScrollView>
        <View >
            <View style={styles.rowdirec}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
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
            <Text style={styles.text}>
                Offers
            </Text>
        </View>
        <View style={styles.row}>
        <Image source={require('../assets/cutchichi.jpg')} style={styles.offers} />
        <Image source={require('../assets/fidh.jpg')} style={styles.offers} />
        <Image source={require('../assets/kabab.jpg')} style={styles.offers} />
        </View>
        <View><Text style={styles.spl}>View more</Text></View>

        <View>
            <Text style={styles.text}>
               Best Sellers
            </Text>
        </View>
        <View style={styles.row}>
        <Image source={require('../assets/mutton-curry-cut.jpg')} style={styles.best} />
        <Image source={require('../assets/fidhi.jpg')} style={styles.best} />
       < Image source={require('../assets/chichi1.jpg')} style={styles.best} />
        </View>
        <View><Text style={styles.spl}>View more</Text></View>
        <View>
        <Text style={styles.text}>
               Evening Special's
            </Text>
        </View>
        <View style={styles.row}><Image source={require('../assets/kebab.jpg')} style={styles.best} />
        <Image source={require('../assets/kabab.jpg')} style={styles.best} />
        <Image source={require('../assets/chickenstrip.jpg')} style={styles.best} />
        </View>
        <View><Text style={styles.spl}>View more</Text></View>
        
        </View>
         
          </ScrollView>




    );
}
const styles = StyleSheet.create({
  
    logo:{
        
        width:182,
        height:74,
       marginLeft:110,
       marginTop:20,
        
        
        
       
        
        
    },cart:{
        height:42,
        width:48,
        marginLeft:300, 
        marginRight:150 ,
        marginTop:40,

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
        marginRight:100 ,
        marginTop:40,
        
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
        marginLeft:'75%',
        marginTop:15,
         fontSize:15
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
          offers:{
            height:66,
            width:74,
            marginLeft:40,
                width: 80,
                height: 80,
                borderRadius:10,  
                borderWidth: 1,
                borderColor: '#dc4F0f', 
                marginTop:10
                
              },
              best:{
                height:66,
                width:74,
                marginLeft:30,
                    width: 90,
                    height: 90,
                    borderRadius:10,  
                    borderWidth: 1,
                    borderColor: '#dc4F0f', 
                    marginTop:10
                    
                  },
    
    row:{
        flexDirection:'row',
    },
    names:{
        marginLeft:40,
    },
    names1:{
        marginLeft:36,
    },
    names2:{
        marginLeft:49,
    },
     names3:{
        marginLeft:49,
    }, text:{
        marginTop:15,
        marginLeft:20,  
        fontSize:26,
        fontWeight:'bold',
    },
})
