import { createAppContainerr } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FirstScreen from '../screens/firstpage';
import SignIn from '../screens/Signin';
import SignUp from '../screens/Signup';


const MealsNavigator = createStackNavigator({
 Screen: FirstScreen,
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  },
});

export default createAppContainer(MealsNavigator);