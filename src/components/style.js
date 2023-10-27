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

const Input = ({ children, title, placeholder,isCheck = false ,isStyle,onChangeText,changeText }) => {
  return (
    <View className = "items-start  justify-start my-[1.5vh]  ">
    <Text className="font-medium mb-2"
    style = {{...isStyle}}
    >{title}</Text>
    <TextInput className="w-full rounded-2xl border-b-0  border-b-transparent relative  "  
    underlineColor="transparent" placeholder={placeholder} 
    secureTextEntry = {isCheck}
    onChangeText={onChangeText}
    value={changeText}
    />
    {children}
    </View>
  )
}

const BUTTON = ({ children,style1,onPresss}) => {
  return (
    <TouchableOpacity className='w-[40%] h-[50px] bg-primary_sky rounded-xl m-auto ' style = {{...style1}}  onPress={onPresss}>
     {children}
   </TouchableOpacity>
  )
}
const BtnBackOf = ({onPress,isClass}) => {
  return (
    <TouchableOpacity className="w-[50px] h-[50px] bg-purple absolute top-[5vh] left-2  justify-center rounded-lg items-center" onPress={onPress} style={{right:0}} >
    <Icon name="angle-left" color={'white'} size={25} />
   </TouchableOpacity>
  )
}

const BtnBackRight = ({onPress,isClass}) => {
  return (
    <TouchableOpacity className="w-[50px] h-[50px] bg-purple  justify-center rounded-lg items-center" 
    style = {({...isClass})}
    onPress={onPress}  >
    <Icon  name="list" color={'white'} size={25}  />

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

const Books = ({title,author,url,onPress,classs}) => {
  return (
    <Pressable className = 'flex-col items-center' style = {{height : height *0.2, width: width/2.5, ...classs}}
    onPress={onPress}
    >
    <Image className = " h-[70%]"  
    resizeMode="contain"
    source={url} />
    <H1   heavy  className = "text-primary_black text-[18px] text-center">{title}</H1>
    <H1 small  heavy  className = "text-metal">{author}</H1>
  </Pressable>
  )
}
// onRouter 
const ViewHeader = ({content}) => {
  return (

    <View
      className={
        "w-full h-[25%] bg-white box-border rounded-bl-[23vw] rounded-br-[23vw] "
      }
      style={{
        elevation: 4,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: .7,
        shadowRadius: 4,
        ...content
      }}
    >
      <View className="w-[60vw] h-[20vh] object-contain relative ">
        <Image
          className="w-full h-full"
          source={require("../../assets/images/bgr_left.png")}
        />
        <Image
          source={require("../../assets/images/user.png")}
          className="absolute top-10 right-10"
        />
      </View>
      <H1
        heavy
        className="text-primary_sky ml-40px] absolute bottom-2 left-[70px] text-[18px]"
      >
        Nguyễn Văn Dũng
      </H1>
    </View>
 
  )
}

//
const DetailUser = (props) => {
  return (
    <Pressable className = "bg-white shadow-metal p-4 rounded-xl flex-row  " style = {{ elevation :4  , 
      shadowColor: 'rgba(0, 0, 0, 0.2)',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 1,
  shadowRadius: 4,

  }}> 
      <Text className="font-bold text-[20px] w-3/6">ID: <Text className="font-medium text-midnight">{props.id}</Text></Text>
      <View className= 'flex-row justify-around w-3/6'>
      <Icon name="search" size={25} onPress={props.search} />
      <Icon name="edit" size={25}  color={'green'} onPress={props.update}  />
      <Icon name="trash" size={25}  color={'red'} 
        onPress={props.transh} 
      />
      </View>
     </Pressable>
  )
}
const DetailOrder = (props) => {
  return (
    <Pressable className = "bg-white shadow-metal p-4 rounded-xl flex-row  " style = {{ elevation :4  , 
      shadowColor: 'rgba(0, 0, 0, 0.2)',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 1,
  shadowRadius: 4,

  }}> 
      <Text className="font-bold text-[20px] w-3/6">Mã Phiếu: <Text className="font-medium text-midnight">{props.id}</Text></Text>
      <View className= 'flex-row justify-around w-3/6'>
      <Icon name="search" size={25} onPress={props.search} />
      <Icon name="edit" size={25}  color={'green'} onPress={props.update}  />
      <Icon name="trash" size={25}  color={'red'} 
        onPress={props.transh} 
      />
      </View>
     </Pressable>
  )
}

const Item = (props) => {
  return (
    <TouchableOpacity style={{
      width: width * 0.4,
      height: height * 0.18,
      elevation: 4,
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 4,
      margin: 10
    }}
    
     className="bg-white flex-col justify-around rounded-2xl"
     onPress={props.onPress}
     >
      <Image className="w-full h-2/3" resizeMode="contain" source={props.img} />
      <Text className="text-center text-primary_black font-bold ">{props.title}</Text>
    </TouchableOpacity>
  );
}

const CreateDate = ({data}) => (
  <View className={"flex-1 items-center justify-center w-full h-full bg-primary_sky" }>
  <View className="w-11/12 h-11/12 mx-auto flex-row flex-wrap ">
    {data.map((item, index) => (
      <Item title={item.title} img={item.img} key={index} onPress={item.onPress} />
    ))}
  </View>
</View>
)

// LIST BOOKS

const ListBookCol = ({data,onPress}) => (
  <FlatList
  numColumns={2}
  data={data}
  showsHorizontalScrollIndicator={false}
  renderItem={({ item, index }) => {
    return (
      <Books
      onPress={onPress}
        title={item.title}
        author={item.author}
        url={item.url}

      />
    );
  }}
  keyExtractor={(item) => item.id.toString()}
/>
)


export { H1, Container,Background ,Input,BUTTON,BtnBackOf, Slider,BtnBackRight, Header, Books,ViewHeader,DetailUser,DetailOrder,CreateDate};
         