
import {
  View,
  Dimensions,
} from "react-native";
import { BtnBackOf, CreateDate, H1 } from "../../components/style";

export default function ManegeUser({ navigation }) {
  const { width, height } = Dimensions.get("window");
  const data = [
    {
      img: require('../../../assets/Icons/manegerUser/image1.png'),
      title: 'Thêm User',
      onPress: () =>   {
        navigation.navigate('CreateUser');
      }
    },
    {
      img: require('../../../assets/Icons/manegerUser/edit.png'),
      title: 'EDIT USER',
      onPress: () =>   {
        navigation.navigate('add');
      }
      
    },
    
    {
      img: require('../../../assets/Icons/manegerUser/search.png'),
      title: 'Tìm kiếm User',
      onPress: () =>   {
        navigation.navigate('SearchingUser');
      }
    },
    {
      img: require('../../../assets/Icons/manegerUser/history.png'),
      title: 'Tra cứu lịch sử ',
      onPress: () =>   {
        navigation.navigate('SearchingUser');
      }
    },
    {
      img: require('../../../assets/Icons/management_user.png'),
      title: 'Danh sách User ',
      onPress: () =>   {
        navigation.navigate('ListUser');
      }
    }
    
  ]
  return (
   <View className = "flex-1">
   <CreateDate data={data} />
   <BtnBackOf onPress={() => navigation.goBack()} />
   </View>
   
  );
}


