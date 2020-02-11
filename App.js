import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigations from './src/navigations/RootNavigations';

import store from './src/store';

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <RootNavigations />
      </NavigationContainer>
    </Provider>
  );
}
