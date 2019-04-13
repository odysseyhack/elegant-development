import React from "react";
import { Image } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
import NewAccount from '../screens/NewAccount';
import ViewAccount from '../screens/ViewAccount';
import Invest from '../screens/Invest';
import Pension from "../screens/Pension";
import Achievements from "../screens/Achievements";
import { HeaderScore } from '../components'

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    ViewAccount,
    Welcome,
    Login,
    Invest,
    SignUp,
    Forgot,
    Explore,
    Browse,
    Product,
    NewAccount,
    Pension,
    Achievements
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0, // for android
      },
      headerBackImage: <Image source={require('../assets/icons/back.png')} />,
      headerBackTitle: null,
      headerRight: <HeaderScore points={5} level={1} />,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: theme.sizes.base,
      },
    }
  });

export default createAppContainer(screens);
