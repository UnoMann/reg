import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,FlatList } from 'react-native';
import { test_styles } from './styles';
import Buttonium from "./Button";
import Task from './components/Task_component';
import Reg_viev from './components/Registrate_component';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios, {isCancel, AxiosError} from 'axios';

let data_from_server = [
    {"name":"from app1",
  "header":"from app2",
  "description":"from app3",
  "date_of_creation":"from app4",
  "owner":1,
  "completed":1}
]

// const axioss = require("axios");
// const url = "http://10.10.0.118:1337"

// axios.post(url+"/tasks", {
//   "name": "from app1",
//   "header": "from app2",
//   "description": "from app3",
//   "date_of_creation": "from app4",
//   "owner": 1,
//   "completed": 1
// }).then(response => {
//   console.log("Ответ сервера: ",response.data);
// }).catch(error => {
//   console.error("Ошибка при отправке запроса: ", error)
// });


// axios.get(url+"/tasks").then(response => {
//   console.log("Ответ сервера: ",response.data);
//   data_from_server = response.data.tasks;
// }).catch(error => {
//   console.error("Ошибка при отправке запроса: ", error)
// });


export default function App() {
  return (
    <SafeAreaView className = "w-full h-full" style={{paddingTop:hp(6)}}>
      <StatusBar style='auto' />
      <Reg_viev/>

    </SafeAreaView>
  );
}


