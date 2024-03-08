import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "./reusbale.style";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableText,
  WidthSpacer,
} from "../../components/index";

const ReusableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <NetworkImage
        source={item.imageUrl}
        width={188}
        height={205}
        radius={12}
        style={styles.image}
      />
      <View style={styles.overlay}>
        <ReusableText
          text={item.title}
          family={"medium"}
          size={SIZES.medium}
          color={COLORS.white}
          align="left"
        />
        
      </View>
    </TouchableOpacity>
  );
};

export default ReusableTile;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // You can adjust the opacity of the overlay
    justifyContent: "flex-end",
  },
});
