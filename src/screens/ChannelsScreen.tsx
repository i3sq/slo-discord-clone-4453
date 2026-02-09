
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const channels = ['عام','دردشة','تصميم','برمجة','ألعاب'];

export default function ChannelsScreen({navigation}:any) {

  return (
    <View style={{flex:1,flexDirection:'row-reverse',backgroundColor:'#09090b'}}>

      <View style={{width:90,backgroundColor:'#111827'}} />

      <View style={{flex:1,padding:12}}>

        <Text style={{color:'#fff',fontSize:20,marginBottom:12}}>
          القنوات
        </Text>

        <FlatList
          data={channels}
          keyExtractor={(i)=>i}
          renderItem={({item})=>(
            <TouchableOpacity
              onPress={()=>navigation.navigate('Chat',{name:item})}
              style={{
                padding:10,
                borderRadius:8,
                marginBottom:6
              }}
            >
              <Text style={{color:'#d4d4d8',textAlign:'right'}}>
                # {item}
              </Text>
            </TouchableOpacity>
          )}
        />

      </View>

    </View>
  );
}
