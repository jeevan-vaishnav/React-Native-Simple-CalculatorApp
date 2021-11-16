import React from "react";

import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Text,
  Platform,
} from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{ ...styles.buttons, ...props.style }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  buttons: {
    fontSize: 28,
    textAlign: "center",
    padding: 20,

    ...Platform.select({
      ios: {},
      android: {
        backgroundColor: "yellow",
      },
      web: {
        backgroundColor: "black",
      },
    }),
  },
});
