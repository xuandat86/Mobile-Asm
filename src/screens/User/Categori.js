import react from "react";
import { View ,Text,Image,ImageBackground,StatusBar,Dimensions} from "react-native";

const CATEGORI = () => {
    return (
        <View>
        <View className="w-full h-[17%] my-2">
   <View
className=" bg-metal opacity-[0.8] mx-auto rounded-lg items-center flex justify-center "
style={{ width: '90%',height: '100%'}}
>
<FlatList
  ref={SlideRef}
horizontal
showsHorizontalScrollIndicator={false}
alwaysBounceHorizontal={false}
className={" w-[90%]   mx-auto "}
data={booksDT}
ItemSeparatorComponent={() => {
return <View className="w-[20px]" />;
}}
renderItem={() => {
return (
   <Slider
     title={"Kinh Doanh"}
     content={"Nghĩ Giàu Làm Giàu Napoleon Hill"}
     img={require("../../../assets/images/imgBooks/image1.png")}
   />
);
}}
keyExtractor={(item) => item}
onScroll={onScroll}
/>
<View className="items-center justify-center flex-row ">
{booksDT.map((item, index) => {
return (
 <View
   className=" mx-3"
   style={{
     backgroundColor: index == index1 ? "blue" : "gray",
     width: index == index1 ? 25 : 10,
     height: 10,
     borderRadius: 10,
   }}
 ></View>
);
})}
</View>



 </View>
  </View>
   {/* FARAGMRT  */}
   <View style={{ width: width * 0.9 }} className="mx-auto">
     {/* Top 5 mượn nhiều */}
     <View>
       <H1 large heavy className="text-primary_black">
         Top 5 mượn nhiều
       </H1>
       <FlatList
         horizontal
         showsHorizontalScrollIndicator={false}
         data={DataBoook}
         renderItem={({ item }) => {
           return (
             <Books
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

     {/* Tất cả */}
     <View>
       <H1 large heavy className="text-primary_black">
         Tất cả các cuốn sách
       </H1>
       <FlatList
         numColumns={2}
         data={DataBoook}
         showsHorizontalScrollIndicator={false}
         renderItem={({ item, index }) => {
           return (
             <Books
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
        </View> 
    )
}
