import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navigator from '../navigation/Navigator';
import google from '../assets/gg.png';

const SignIn = props => {
    return (
        <View >

                <Text>Sign In</Text>
            </View>
            )
}
            export default SignIn;


// const SignIn = props => {

//     return(
//         <View>
//             <Text style={styles.text}>Sign In</Text>
//     <Text style={styles.subline}>Welcome, we missed you!</Text>
//     <Text style={styles.head}> Your Email </Text>
//     <View style={styles.input}><Input
// placeholder='Email'
//  onTextInput="userid"
// Inputstyle={styles.input}

// /></View>
// <Text style={styles.head}> Password </Text>

// <View 
// style={styles.input}>
// <Input
// placeholder='Password'

// style={styles.input}

// />
// </View>
// <View style={styles.rowdirec}>

// <Text style={styles.spl1}>Forgot Password</Text>
// </View>
// <View >
// <Button
//   title="Sign In"
//   buttonStyle={styles.button}
//   onPress={() => {
//       props.navigation.navigate({routeName:'Main'})
//   }}/>
// </View>
// <View style={styles.row}>
// <Text>Don't have an account</Text><Text style={styles.spl}>Sign Up</Text>
// </View>
// <View style={styles.rowdirec}>

// <View style={styles.SignIn}> 
// <Text>
// Sign in with google</Text>
// <Button
//   icon={
//       <Icon
//       name="google"
//       size={24}
//       color="white" 
//       />
//     }
//     buttonStyle={styles.button1}
// />
//     </View>
// <View style={styles.SignIn}> 

// <Text>
// Sign in with facebook</Text>
// <Button
//   icon={
//       <Icon
//       name="facebook"
//       size={24}
//       color="white" 
//       />
//     }
//     buttonStyle={styles.button1}
// />
//     </View>
// </View>
//    </View>    
//     )




// }
const styles= StyleSheet.create({
                        text: {
                        marginTop: 65,
                    marginLeft: 17,
                    fontSize: 36,
                    fontWeight: 'bold',
    },
                    SignIn: {
                        marginTop: 50,
                    fontSize: 24
    },
                    subline: {
                        fontSize: 16,
                    marginLeft: 17,
                    marginTop: 10,
                    marginBottom: 25,
    },
                    spl1: {
                        marginLeft: 250,
                    color: '#dc4F0f',
    },
                    screen: {
                        flex: 1
    },
                    rowdirec: {
                        flexDirection: 'row',
                    justifyContent: 'space-around',

    },
                    row: {
                        flexDirection: 'row',
                    marginTop: 15,
                    marginLeft: 30,
    },
                    input: {

                        marginLeft: 17,
                    width: 380,
                    marginRight: 50,


    },
                    rm: {
                        width: 200,
                    marginLeft: 20
    },


                    spl: {
                        color: '#dc4F0f',
                    paddingLeft: 5
    },

                    head: {
                        fontSize: 18,
                    marginTop: 10,
                    marginLeft: 17,
    },
                    button: {
                        marginTop: 20,
                    marginHorizontal: 4,
                    height: 55,
                    width: 375,
                    backgroundColor: '#dc4f0f',
                    borderRadius: 7,
                    marginLeft: 10,



    },
                    gofac: {
                        marginTop: 20,
                    width: 132,
                    height: 90,
                    marginLeft: 5,
                    backgroundColor: '#aaaaaa',
                    justifyContent: 'space-around'


    }, button1: {
                        marginTop: 10,

                    height: 40,
                    width: 85,
                    backgroundColor: '#b3b1b1',
                    borderRadius: 7,
                    marginRight: 20,
                    marginLeft: 20,





    },
                    button2: {

                        marginTop: 60,
                    height: 100,
                    width: 150,
                    backgroundColor: '#b3b1b1',
                    borderRadius: 7,
                    marginRight: 25




    },


});
