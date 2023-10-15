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
    <View className="pt-8">
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
            NavigationService.push(SCREENS.NEWFEED_STACK);
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
