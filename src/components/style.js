import styled from "styled-components";
import { Color } from "../../assets/colors/Colors";
import { View, Text, Pressable, Dimensions, TouchableOpacity, Animated, Easing ,Image, ImageBackground, StatusBar, SafeAreaView,

} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");
const H1 = styled.Text`
  font-size: 99px;
  color: ${Color.primary_white};
  ${({title,large,small}) => {
    switch (true) {
      case title: 
        return ` font-size: 35px;`
        break;
        case large: 
        return ` font-size: 20px;`
        break;
        case small: 
        return ` font-size: 13px;`
        break;  
    }
  }}
  
  ${({bold,heavy,v_small}) => {
    switch (true) {
      case bold: 
        return `font-weight: 800`
        break;
        case heavy: 
        return `font-weight: 700`
        break;
        case v_small: 
        return `font-weight: 400`
        break;

  }}}`


const P1 = styled.Text`
  font-size: 22px;
  color: black;
`;
const Container = styled.View`
   width: 85%;
   height:100%;
   display: flex;
`;

const IconImage = styled.View`
   width: 40px;
   height: 40px;
`

const Background = ({ children, url }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={url} style={{ flex: 1, width: '100%', height: '100%' }}>
        {children}
      </ImageBackground>
      
    </View>
  );
};

const Input = ({ children, title, placeholder,isCheck = false ,isStyle,onChangeText }) => {
  return (
    <View className = "items-start  justify-start my-[1.5vh]  ">
    <Text className="font-medium mb-2"
    style = {{...isStyle}}
    >{title}</Text>
    <TextInput className="w-full rounded-2xl border-b-0  border-b-transparent relative  "  
    underlineColor="transparent" placeholder={placeholder} 
    secureTextEntry = {isCheck}
    onChangeText={onChangeText}
    />
    {children}
    </View>
  )
}

const BUTTON = ({ children,style1,onPresss}) => {
  return (
    <TouchableOpacity className='w-[40%] h-[50px] bg-primary_sky rounded-xl m-auto ' style = {{...style1}} onPress={onPresss}>
     {children}
   </TouchableOpacity>
  )
}
const BtnBackOf = ({onPress,isClass}) => {
  return (
    <TouchableOpacity className="w-[50px] h-[50px] bg-purple absolute top-[5vh] left-2  justify-center rounded-lg items-center" onPress={onPress} style={{right:0}} >
    <Icon name="rocket" color={'white'} size={25} />
   </TouchableOpacity>
  )
}

const BtnBackRight = ({onPress,isClass}) => {
  return (
    <TouchableOpacity className="w-[50px] h-[50px] bg-purple  justify-center rounded-lg items-center" onPress={onPress}  >
    <Icon name="list" color={'white'} size={25} />

   </TouchableOpacity>
  )
}
const Slider = ({title,content,img}) => {
  return (
    <View
    className="  mx-auto rounded-lg items-center flex justify-center "
    style={{ width: width - width * 0.1,height: '100%'}}
  >
    <View className="w-full h-full p-[10px] flex items-center flex-row">
      <View style={{ width: width / 2, justifyContent: "space-around" }}>
        <BUTTON style1={{ backgroundColor: Color.primary_white ,width: '70%' }}>
          <Text className="text-primary_black text-center leading-[50px] font-bold">
            {title}
          </Text>
        </BUTTON>
        <H1
          large
          className="text-[20px] text-center my-5 text-primary_black font-medium"
        >
             {content}
        </H1>
      </View>
      {/* bOOKS */}
      <View style={{ width:'40%' ,height: '80%'}}>
        <Image 
        className = "w-full h-full"
          source={img}
          resizeMode="contain"
        />
      </View>
    </View>
  </View>
  )
} 

const Header = ({width,onPress}) => {
return (
    <View className="flex flex-row items-center w-[90%] mx-auto">
  <View
    style={{ width: width - width * 0.3, height: "100%", position: "relative" }}
    className="mx-auto"
  >
    <TextInput
      className="w-full rounded-2xl border-b-0  border-b-transparent   "
      underlineColor="transparent"
      placeholder="search value"
    />
    <Icon
      name="search"
      size={30}
      className="absolute top-0 right-0"
      style={{ position: "absolute", right: 20, top: "20%"   }}
      isClass={{ right: 0 }}
    />
  </View>
  <BtnBackRight onPress={onPress} />
      </View>
)
}

const Books = ({title,author,url,onPress}) => {
  return (
    <Pressable className = 'flex-col items-center' style = {{height : height *0.2, width: width/2.5}}
    onPress={onPress}
    >
    <Image className = " h-[70%]"  
    resizeMode="contain"
    source={url} />
    <H1   heavy  className = "text-primary_black text-[18px]">{title}</H1>
    <H1 small  heavy  className = "text-metal">{author}</H1>
  </Pressable>
  )
}


// onRouter 
 



export { H1, Container,Background ,Input,BUTTON,BtnBackOf, Slider,BtnBackRight, Header, Books};
