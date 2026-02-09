
import React from 'react';
import { View, Text } from 'react-native';

export default function MessageItem({user,text}:any){

  return(
    <View style={{
      flexDirection:'row-reverse',
      padding:8
    }}>

      <View style={{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'#5865F2',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:8
      }}>
        <Text style={{color:'#fff'}}>
          {user[0]}
        </Text>
      </View>

      <View style={{flex:1}}>

        <Text style={{color:'#5865F2',fontSize:13}}>
          {user}
        </Text>

        <Text style={{color:'#fff',textAlign:'right'}}>
          {text}
        </Text>

      </View>

    </View>
  )
}
