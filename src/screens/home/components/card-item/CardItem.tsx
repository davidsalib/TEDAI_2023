import { SCREENS } from "@shared-constants";
import React from "react";
import { Image, StyleProp, Text, View, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as NavigationService from "react-navigation-helpers";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardItemProps {
  style?: CustomStyleProp;
  data: any;
  onPress: () => void;
}

const CardItem: React.FC<ICardItemProps> = ({ data, onPress }) => {
  const { name, thumbnailUrl, language, level } = data;

  return (
    <TouchableOpacity
      className="border-b items-center flex-row border-neutral-200 py-4 px-4 gap-4"
      onPress={() =>
        NavigationService.navigate(SCREENS.FEED_STACK, {
          screen: SCREENS.FEED_DETAILS,
          params: { feedName: name, thumbnailUrl: thumbnailUrl },
        })
      }
    >
      <Image
        source={{ uri: thumbnailUrl }}
        className="w-16 h-16 bg-neutral-200 rounded-md border border-neutral-400"
      />
      <View>
        <Text className="text-lg font-medium text-black">{name}</Text>
        <Text className="text-md text-black">
          {language} | {level}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;
