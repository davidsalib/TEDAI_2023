import React, { useMemo } from "react";
import { View, FlatList, Image, Text, Touchable } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import createStyles from "./HomeScreen.style";
import MockData from "./mock/MockData";
import CardItem from "./components/card-item/CardItem";
/**
 * ? Shared Imports
 */
import { SCREENS } from "@shared-constants";
import fonts from "@fonts";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const handleItemPress = () => {
    NavigationService.push(SCREENS.DETAIL);
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const List = () => (
    <View>
      <FlatList
        data={MockData}
        renderItem={({ item }) => (
          <CardItem data={item} onPress={handleItemPress} />
        )}
      />
    </View>
  );

  const Welcome = () => {
    return (
      <View className="px-4 flex flex-row justify-between">
        <Text className="text-4xl font-bold text-black">Feeds</Text>
        <TouchableOpacity
          onPress={() => {
            NavigationService.push(SCREENS.NEWFEED_TOPIC);
            console.log("ok");
          }}
        >
          <Icon name="plus" type={IconType.AntDesign} />
        </TouchableOpacity>
      </View>
    );
  };

  const Content = () => (
    <View className="py-8">
      <Welcome />
      <List />
    </View>
  );

  return (
    <SafeAreaView>
      <Content />
    </SafeAreaView>
  );
};

export default HomeScreen;
