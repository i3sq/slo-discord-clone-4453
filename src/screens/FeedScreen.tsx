
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const posts=[
  {id:'1',user:'أحمد',text:'مرحبا بكم في سلو'},
  {id:'2',user:'سارة',text:'التطبيق جميل ❤️'}
];

export default function FeedScreen(){

  return(
    <View style={{flex:1,backgroundColor:'#09090b',padding:12}}>

      <FlatList
        data={posts}
        keyExtractor={(i)=>i.id}
        renderItem={({item})=>(
          <View style={{
            backgroundColor:'#18181b',
            borderRadius:12,
            padding:12,
            marginBottom:10
          }}>

            <Text style={{color:'#5865F2',marginBottom:4}}>
              {item.user}
            </Text>

            <Text style={{color:'#fff',textAlign:'right'}}>
              {item.text}
            </Text>

          </View>
        )}
      />

    </View>
  )
}
