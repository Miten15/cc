import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "../Reusable/reusbale.style";
import { AntDesign } from "@expo/vector-icons";
import ReusableText from "./ReusableText";
import { COLORS, SIZES, TEXT } from "../../constants/theme";

const AppBar = ({  title,  icon, onPress, onPress1, top, left, right , color ,  }) => {
  return (
    <View style={styles.overlay(top, left, right, color)}>
      <View style={reusable.rowWithSpace("space-between")}>
        <TouchableOpacity style={styles.box} onPress={onPress}>
          <AntDesign name="left" size={26} />
        </TouchableOpacity>

        <ReusableText
          text={title}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity style={styles.box1} onPress={onPress1}>
          <AntDesign name={icon} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: (top, left, right, color) => ({
    position: "absolute",
    top: top,
    left: left,
    right: right,
    justifyContent: "center",
  }),
  box:  ({
   
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
  box1:  ({
    
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});
