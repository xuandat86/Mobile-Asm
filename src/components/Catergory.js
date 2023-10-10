import react from "react";
import { View , Text,Dimensions,FlatList,TouchableOpacity} from "react-native";
import { DataBoook } from "../data/data";
import { H1,Books, BUTTON } from "./style";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export function Catergory(prors) {
    const navigation = useNavigation();
    return (
        <View style={{ width: width*0.95 }} className="mx-auto">
        <View>
        <TouchableOpacity className='w-[100%] h-[50px] bg-primary_sky rounded-xl mx-1 mb-3  ' >
        <H1 large className = 'text-center leading-[50px] font-bold bg-midnight   ' >Danh Mục Sách {prors.title}</H1>
   </TouchableOpacity>
   <View className = "w-full h-[0.5] bg-bubble-gum" />
           


          <FlatList
            numColumns={3}
            data={DataBoook}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Books
                classs={{width: width*0.308,borderColor:'black', margin: 2}}
                onPress={() => navigation.navigate('CartBoook', {item})}
                  title={item.title}
                  author={item.author}
                  url={item.url}
                />
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    )
}