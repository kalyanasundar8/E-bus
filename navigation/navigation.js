import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Signin from '../signin/signin';
import Signup from '../signup/signup';

const screens = {
    signin: {
        screen: Signin
    },
    signup: {
        screen: Signup
    }
}

const Navigation = createStackNavigator(screens);

export default createAppContainer(Navigation);