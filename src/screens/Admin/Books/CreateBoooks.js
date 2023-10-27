import React, { useEffect, useRef, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import {
  BUTTON,
  BtnBackOf,
  H1,
  Input,
  ViewHeader,
} from "../../../components/style";
import { ScrollView } from "react-native-gesture-handler";
import {Empty, Regex,passLength } from "../../../validation/form_validation";
const {createBoook} = require("../../../api/books");

export default function CreateBooks({ navigation }) {
  const { width, height } = Dimensions.get("window");
  const [idBook, setBoook] = useState("");
  const [url, seturl] = useState("");
  const [nameBook, setName] = useState("");
  const [count, setCount] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [Caterory, setCaterory] = useState("");
  const Books = {
    id: idBook,
    photo: url,
    title: nameBook,
    author: author,
    price: count,
    deatail: content,
    category_id: Caterory,
  };
  const element = [
    {
      value: idBook,
      validation: [
        {
          validate: Empty,
          errorMessage: "Không được để trống ID",
        },
      ],
    },
    {
      value: url,
      validation: [
        {
          validate: Empty,
          errorMessage: "Không được để trống url",
        },
      ],
    },
    {
      value: nameBook,
      validation: [
        {
          validate: Empty,
          errorMessage: "Không được để trống tên sách",
        },
      ],
    },
    {
      value: count,
      validation: [
        {
          validate: Empty,
          errorMessage: "Vui lòng nhập số lượng sách ",
        },
      ],
    },
    {
      error: "password",
      value: author,
      validation: [
        {
          validate: Empty,
          errorMessage: "Không được để trống tác giả",
        },
      ],
    },
    {
      value: Caterory,
      validation: [
        {
          validate: Empty,
          errorMessage: "Vui lòng chọn thể loại sách",
        },
      ],
    },
  ];
  const validate = async () => {
    const error = [];
    for (const item of element) {
      for (const validate of item.validation) {
        if (!validate.validate(item.value)) {
          error.push(validate.errorMessage);
        }
      }
    }
    if (error.length > 0) {
      const notificalArror = error.join("\n");
      return alert(notificalArror);
    }
     const newBook = await createBoook(Books);
     if(newBook)alert("Succcess")

   
  };

  return (
    <View className="flex-1">
      <ViewHeader content={{ width: "100%" }} />
      <BtnBackOf onPress={() => navigation.goBack()} />
      {/*  */}
      <View
        className="mt-5 bg-white mx-auto rounded-2xl"
        style={{
          width: width * 0.95,
          height: height * 0.65,
          elevation: 4,
          shadowColor: "rgba(0, 0, 0, 0.55)",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.7,
          shadowRadius: 4,
        }}
      >
        <BUTTON style1={{ width: width * 0.7 }}>
          <Text className="text-center leading-[50px] text-white font-bold text-[18px]">
            Thông tin sách
          </Text>
        </BUTTON>
        <View className="w-5/6 h-4/5 mx-auto">
          <ScrollView className="w-full h-full">
            <Input
              title={"Mã Sách"}
              isStyle={{ color: "black" }}
              onChangeText={setBoook}
              changeText={idBook}
            />
            <Input
              title={"URL"}
              isStyle={{ color: "black" }}
              onChangeText={seturl}
              changeText={url}
            />
            <Input
              title={"Tên Sách"}
              isStyle={{ color: "black" }}
              onChangeText={setName}
              changeText={nameBook}
            />
            <Input
              title={"Giá Sách"}
              isStyle={{ color: "black" }}
              onChangeText={setCount}
              changeText={count}
            />
            <Input
              title={"Author"}
              isStyle={{ color: "black" }}
              onChangeText={setAuthor}
              changeText={author}
            />
            <Input
              title={"Content"}
              isStyle={{ color: "black" }}
              onChangeText={setContent}
              changeText={content}
            />
            <Input
              title={"Caterory"}
              isStyle={{ color: "black" }}
              onChangeText={setCaterory}
              changeText={Caterory}
            />
          </ScrollView>
          <BUTTON style1={{ width: width * 0.5, marginBottom: 5 }} onPresss={validate}>
            <Text className="text-center leading-[50px] text-white font-bold text-[18px]">
              Thêm
            </Text>
          </BUTTON>
        </View>
      </View>
    </View>
  );
}
