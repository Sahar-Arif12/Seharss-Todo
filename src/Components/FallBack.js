import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const FallBack = () => {
  return (
    <View style={{ alignItems: 'center' }}>
       
      <Image
        source={require('../../assets/to-do-list.png')}
        style={{ height: 200, width: 200 }}
      />
       <Text style={{fontSize: 20, fontStyle :"normal",fontWeight:'lightbold'}}>Start Adding Your Tasks </Text>

      
    </View>
  );
}

export default FallBack;

const styles = StyleSheet.create({});
