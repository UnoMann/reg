import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { CheckBadgeIcon as Check_outline } from "react-native-heroicons/outline";
import { CheckBadgeIcon as Check_solid } from "react-native-heroicons/solid";
import { useState } from 'react';



export default function Task(props){

    let {name,date,complete} = props;
    let [completed_task,Setcompleted_task] = useState();

    const gg = () => {

        Setcompleted_task("da");
    }
   if(complete === 1){
      return(
         <TouchableOpacity className = "bg-red-200 rounded-xl border 2 flex-row" onPress={()=>{console.log('task')}} style={{width:wp(80),height:wp(20)}}>
         <View className=" w-5/6">
           <Text className="text-2xl" style={{paddingHorizontal:wp(2.49)}}>
             {name}
          </Text>
          <Text className="text-xl" style={{paddingHorizontal:wp(2.49)}}>
             {date}
          </Text>
          <Text className="text-xl" style={{paddingHorizontal:wp(2.49)}}>
             {completed_task}
          </Text>
         </View>
         <TouchableOpacity style = {{paddingLeft:wp(2),paddingVertical:wp(4)}} onPress={gg}>
                  <Check_solid size={wp(10)} color={'black'}/>
         </TouchableOpacity>
        </TouchableOpacity>
    )
   }else{
      return(
         <TouchableOpacity className = "bg-red-200 rounded-xl border 2 flex-row" onPress={()=>{console.log('task')}} style={{width:wp(80),height:wp(20)}}>
         <View className=" w-5/6">
           <Text className="text-2xl" style={{paddingHorizontal:wp(2.49)}}>
             {name}
          </Text>
          <Text className="text-xl" style={{paddingHorizontal:wp(2.49)}}>
             {date}
          </Text>
          <Text className="text-xl" style={{paddingHorizontal:wp(2.49)}}>
             {completed_task}
          </Text>
         </View>
         <TouchableOpacity style = {{paddingLeft:wp(2),paddingVertical:wp(4)}} onPress={gg}>
                  <Check_outline size={wp(10)} color={'black'}/>
         </TouchableOpacity>
        </TouchableOpacity>
    )
   }
    

}