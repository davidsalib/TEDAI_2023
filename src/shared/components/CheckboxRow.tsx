import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

const CheckboxRow = ({
  title,
  subtitle,
  imageURL,
  onPress,
  isSelected,
}: {
  title: string;
  subtitle?: string;
  imageURL?: string;
  onPress: () => any;
  isSelected: boolean;
}) => {
  return (
    <TouchableOpacity
      className="flex-row items-center gap-x-4 py-4 border-b border-neutral-200"
      onPress={onPress}
    >
      <View className="flex-row items-center flex-1">
        {imageURL && (
          <Image
            source={{ uri: imageURL }}
            className="w-16 h-16 mr-4 rounded-full"
          />
        )}
        <View>
          <Text className="text-lg text-black">{title}</Text>
          {subtitle && (
            <Text className="text-sm text-neutral-500">{subtitle}</Text>
          )}
        </View>
      </View>
      <View
        className={`w-6 h-6 rounded-md border-2 items-center justify-center ${
          isSelected ? "border-black bg-black" : "border-neutral-500"
        }`}
      >
        {isSelected && (
          <Icon
            type={IconType.Feather}
            name="check"
            size={14}
            className="text-white"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CheckboxRow;
