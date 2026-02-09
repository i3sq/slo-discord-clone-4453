
import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

const servers = ['SLO','DEV','GAMES','CHAT','AI'];

export default function ServersDrawer() {

  return (
    <View style={{flex:1,paddingTop:40}}>

      <FlatList
        data={servers}
        keyExtractor={(i)=>i}
        renderItem={({item})=>(
          <TouchableOpacity
            style={{
              width:60,
              height:60,
              backgroundColor:'#18181b',
              borderRadius:30,
              justifyContent:'center',
              alignItems:'center',
              marginBottom:12,
              alignSelf:'center'
            }}
          >
            <Text style={{color:'white',fontWeight:'bold'}}>
              {item[0]}
            </Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}
