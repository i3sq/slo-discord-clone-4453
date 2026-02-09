
import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen(){

  return(
    <View style={{
      flex:1,
      backgroundColor:'#09090b',
      justifyContent:'center',
      alignItems:'center'
    }}>

      <Text style={{color:'#fff',fontSize:22}}>
        حسابي
      </Text>

      <Text style={{color:'#777',marginTop:6}}>
        قريباً
      </Text>

    </View>
  )
}
