import React from 'react';
import {View,StyleSheet,Text,} from 'react-native';
import{Button,Input} from 'react-native-elements';



export default function SignUp(){
    return(
     <View>
         <Text style={styles.text}>Sign Up</Text>
         <Text style={styles.subline}>Welcome to Meat Up</Text>
         <Text style={styles.head}> Your Email </Text>

         <View style={styles.input}><Input

placeholder='Email Adress'
  style={styles.input}

/>
</View>
<Text style={styles.head}> Your Password </Text>
 
<View style={styles.input}><Input
placeholder='Your Password'
 
style={styles.input}

/></View>
<Text style={styles.head}>  Re-enter your Password </Text>
<View style={styles.input}><Input

placeholder=' Re-enter Password'
style={styles.input}

/></View>
<View style={styles.rm}>


</View>
<View >
<Button
  title="Sign Up"
  buttonStyle={styles.button}/>
</View>



<View style={styles.rowdirec}>
    
    <Button
  title="Sign Up with Facebook"
  buttonStyle={styles.button1}/>

<Button
  title="Sign Up with Google"
  buttonStyle={styles.button2}/>

        
    </View>   
</View>


    )
}

const styles = StyleSheet.create({
    ztext:{
        marginTop:65,
        marginLeft:17,  
        fontSize:36,
        fontWeight:'bold',
    },
    subline:{
        fontSize:16,
        marginLeft:17,
        marginTop:10,
        marginBottom:25,
    },
    screen:{
        flex:1
      },
      rowdirec:{
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:"baseline"
      },
      row:{
          flexDirection:'row',
          marginTop:15,
          marginLeft:30,
      },
      input:{
         
          marginLeft:17,
          width:380,
          marginRight:50
  
      },
      rm:{
        width:200,
        marginLeft:20
      },
          
    
      spl:{
          color:'#dc4F0f',
          paddingLeft:5
      },
    
      head:{
          fontSize:18,
          marginTop:10,
          marginLeft:17,
      },
      button:{
          marginTop:20,
          marginHorizontal:4,
          height:55,
          width:400,
          backgroundColor:'#dc4f0f',
          borderRadius:7,
          
         

        },
        gofac:{
            marginTop:20,
            width:132,
            height:90,
            marginLeft:5,
            backgroundColor:'#aaaaaa',
            justifyContent:'space-around'
            
  
        }, button1:{
            marginTop:60,
           
            height:100,
            width:150,
            backgroundColor:'#b3b1b1',
            borderRadius:7,
            marginRight:50,
            marginLeft:30,
            
            
    
          },
          button2:{
            
           
            height:100,
            width:150,
            backgroundColor:'#b3b1b1',
            borderRadius:7,
            marginRight:25
            
        
    
          },
          textb:{
              alignContent:'center',
              color:'white',
              paddingTop:15,
              paddingLeft:160,
              fontSize:18
          }
    
});