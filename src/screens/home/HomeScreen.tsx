import React from "react";
import { View, FlatList, Text } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
import MockData from "./mock/MockData";
import CardItem from "./components/card-item/CardItem";
/**
 * ? Shared Imports
 */
import { SCREENS } from "@shared-constants";
import { TouchableOpacity } from "react-native-gesture-handler";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const handleItemPress = () => {
    NavigationService.push(SCREENS.DETAIL);
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const List = () => (
    <FlatList
      className="flex-1"
      data={MockData}
      renderItem={({ item }) => (
        <CardItem data={item} onPress={handleItemPress} />
      )}
    />
  );

  const Welcome = () => {
    return (
      <View className="px-4 pt-8 pb-8 flex flex-row justify-between">
        <Text className="text-4xl font-bold text-black">Feeds</Text>
        <TouchableOpacity
          onPress={() => {
            NavigationService.push(SCREENS.NEWFEED_STACK);
            console.log("ok");
          }}
        >
          <Icon name="plus" type={IconType.AntDesign} size={24} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView className="h-full">
      <Welcome />
      <List />
    </SafeAreaView>
  );
};

export default HomeScreen;
