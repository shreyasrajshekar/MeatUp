import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import GreyButton from '../components/greybutton';
import Redbutton from '../components/redbutton';
import { Button } from 'react-native-elements';
import {SignIn} from './Signin';
import Navigator from '../navigation/Navigator';



const Screen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button title="Go to Meals!" onPress={() => {
          props.navigation.navigate({routeName: 'CategoryMeals'});
      }} />
    </View>
  );
};

export default FirstScreen;
// export default function FirstScreen(props)  {
//   return (
//     <View style={styles.screen}>
         
//                 <Text style={styles.text}>Sign In</Text>
//                 <Text style={styles.subline}>Welcome, we missed you!</Text>
//                 <Text style={styles.head}> Your Email </Text>
              
          
//             </View>
//             )
   
// }

 

//       <Image source={require('../assets/chicken.jpg')} style={styles.image} />
      // <View style={styles.button1}>
      //   <Button
      //     title="Sign In"
      //     buttonStyle={styles.button123} onPress={() => {
      //       props.navigation.navigate({ routeName: 'SignIn' })

      //     }} />


//       </View>
//       <View style={styles.button}>
//         <Button
//           title="Sign Up"
//           buttonStyle={styles.button12} />
//         <View>


//         </View>

//       </View>
//     </View>

//   );

// }


const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    paddingTop: 400,
    marginTop: 100,

  },
  button: {
    paddingTop: 10,
    marginLeft: 5,
    marginRight: 5





  },
  button1: {
    paddingTop: 30,
    marginLeft: 5,
    marginRight: 5


  },
  button12: {
    borderRadius: 11,
    paddingVertical: 18,
    paddingHorizontal: 5,
    backgroundColor: '#aaaaaa',
    marginTop: 10,
  },
  button123: {
    borderRadius: 11,
    paddingVertical: 18,
    paddingHorizontal: 5,
    backgroundColor: '#dc4f0f',
    marginTop: 10,
  },
});
