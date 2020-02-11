import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const NavigatorStack = createStackNavigator();

import SignIn from '../pages/InitialScreens/SignIn';

const MyNavigatorStack = () => (
    <NavigatorStack.Navigator>
        <NavigatorStack.Screen name={'SignIn'} component={SignIn} />
    </NavigatorStack.Navigator>
)

export default MyNavigatorStack;