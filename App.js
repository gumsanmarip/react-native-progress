import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {


  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput 
          placeholder='Course Goal' 
          style={{borderBottomColor: 'black', borderWidth: 1}}
        />
        <Button title="ADD" />
      </View>
    </View>
  );
}

