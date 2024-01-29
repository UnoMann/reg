import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FlatList, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { CheckBadgeIcon as Check_outline } from "react-native-heroicons/outline";
import { CheckBadgeIcon as Check_solid } from "react-native-heroicons/solid";
import { useState } from 'react';



export default function Reg_viev(props){

   let {name,date,complete} = props;
   const [input1, setInput1] = useState('');
   const [input2, setInput2] = useState('');
   const [input3, setInput3] = useState('');
   const [input4, setInput4] = useState('');
   const [input5, setInput5] = useState('');

         return (
            <View style={styles.container}>

               <Text className = "text-xl" style={{paddingBottom:wp(15)}}>
                  Регистрация
               </Text>

               <TextInput
               style={styles.input}
               value={input1}
               onChangeText={text => setInput1(text)}
               placeholder="ФИО"
               />
               <TextInput
               style={styles.input}
               value={input2}
               onChangeText={text => setInput2(text)}
               placeholder="Логин"
               />
               <TextInput
               style={styles.input}
               value={input3}
               onChangeText={text => setInput3(text)}
               placeholder="Пароль"
               />
               <TextInput
               style={styles.input}
               value={input4}
               onChangeText={text => setInput4(text)}
               placeholder="Номер"
               />
            </View>
         );
}
         
         const styles = StyleSheet.create({
         container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
         },
         input: {
            width: '80%',
            height: 70,
            borderWidth: 1,
            borderColor: 'gray',
            marginBottom: 60,
            padding: 10,
         },
         });