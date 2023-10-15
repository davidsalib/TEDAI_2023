import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardItemProps {
  style?: CustomStyleProp;
  data: any;
  onPress: () => void;
}

const CardItem: React.FC<ICardItemProps> = ({ data, onPress }) => {
  const { name } = data;

  return (
    <TouchableOpacity
      className="border-b items-center flex-row border-neutral-200 py-4 px-4 gap-4"
      onPress={onPress}
    >
      <View className="w-12 h-12 bg-neutral-200 rounded-md" />
      <Text className="text-lg font-medium text-black">{name}</Text>
    </TouchableOpacity>
  );
};

export default CardItem;
