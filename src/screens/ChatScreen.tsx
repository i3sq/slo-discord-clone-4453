
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import MessageItem from '../components/MessageItem';

export default function ChatScreen({route}:any) {

  const {name} = route.params;

  const [messages,setMessages] = useState([
    {id:'1',user:'أحمد',text:'أهلا 👋'},
    {id:'2',user:'محمد',text:'كيف الحال؟'}
  ]);

  const [text,setText] = useState('');

  return (
    <View style={{flex:1,backgroundColor:'#09090b'}}>

      <View style={{
        height:55,
        backgroundColor:'#18181b',
        justifyContent:'center',
        paddingHorizontal:12
      }}>
        <Text style={{color:'#fff',fontSize:18}}>
          # {name}
        </Text>
      </View>

      <FlatList
        data={messages}
        inverted
        keyExtractor={(i)=>i.id}
        renderItem={({item})=>(
          <MessageItem user={item.user} text={item.text} />
        )}
      />

      <View style={{
        flexDirection:'row-reverse',
        backgroundColor:'#18181b',
        padding:8
      }}>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="اكتب رسالة..."
          placeholderTextColor="#777"
          style={{
            flex:1,
            color:'#fff',
            textAlign:'right',
            padding:6
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor:'#5865F2',
            borderRadius:8,
            padding:10,
            marginLeft:6
          }}
        >
          <Text style={{color:'#fff'}}>إرسال</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
