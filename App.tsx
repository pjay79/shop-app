import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
// @ts-ignore
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

const signUpConfig = {
  header: 'Shop App',
  hideAllDefaults: true,
  defaultCountryCode: '61',
  signUpFields: [
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },
    {
      label: 'Phone Number',
      key: 'phone_number',
      required: true,
      displayOrder: 3,
      type: 'string'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 4,
      type: 'string'
    }
  ]
};

const usernameAttributes = 'My user name';

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App, {
  signUpConfig,
  usernameAttributes
});
