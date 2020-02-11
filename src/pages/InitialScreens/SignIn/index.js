import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

export default function SignIn() {

    const lol = useSelector(state => state);
    console.log(lol)
  return (
    <View>
        <Text>SignIn</Text>
    </View>
  );
}
