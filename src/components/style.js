import styled from "styled-components";
import { Color } from "../../assets/colors/Colors";
import { View, Text, Pressable, Dimensions, TouchableOpacity, Animated, Easing ,Image, ImageBackground, StatusBar, SafeAreaView,

} from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

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


const Background = ({ children, url }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={url} style={{ flex: 1, width: '100%', height: '100%' }}>
        {children}
      </ImageBackground>
    </View>
  );
};

const Input = ({ children, title, placeholder,isCheck }) => {
  return (
    <View className = "items-start  justify-start my-[1.5vh]  ">
    <Text className="font-medium mb-2">{title}</Text>
    <TextInput className="w-full rounded-2xl border-b-0  border-b-transparent relative  "  
    underlineColor="transparent" placeholder={placeholder} 
    secureTextEntry = 'true'
    />
    {children}
    </View>
  )
}

const BUTTON = ({ children, title }) => {
  return (
    <View className = "items-start  justify-start my-[1.5vh]  ">
    <Text className="font-medium mb-2">{title}</Text>
    <TextInput className="w-full rounded-2xl border-b-0  border-b-transparent relative  "  
    underlineColor="transparent" placeholder={placeholder} 
    secureTextEntry = 'true'
    />
    {children}
    </View>
  )


}






export { H1, Container,Background ,Input};
