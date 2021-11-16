import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Button from "./components/button";

const App = () => {
  let [result, setResult] = useState(0);
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        keyboardType="number-pad"
        autoFocus={true}
        value={num1}
        onChangeText={(val) => setNum1(val)}
      />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        keyboardType="number-pad"
        autoFocus={false}
        value={num2}
        onChangeText={(val) => setNum2(val)}
      />
      <View style={styles.btnContainer}>
        <Button
          style={{ color: "red" }}
          title="+"
          color="red"
          onPress={() => {
            const val = parseFloat(num1);
            const val2 = parseFloat(num2);
            setResult(val + val2);
          }}
        />
        <Button
          style={{ color: "green" }}
          title="-"
          onPress={() => {
            const val = parseFloat(num1);
            const val2 = parseFloat(num2);
            setResult(val - val2);
          }}
        />
        <Button
          title="x"
          style={{ color: "blue" }}
          onPress={() => {
            const val = parseFloat(num1);
            const val2 = parseFloat(num2);
            setResult(val * val2);
          }}
        />
        <Button
          title="/"
          style={{ color: "purple" }}
          onPress={() => {
            const val = parseFloat(num1);
            const val2 = parseFloat(num2);
            setResult(val / val2);
            if (val2 < 0) {
              setResult(0);
            } else {
              setResult(val / val2);
            }
          }}
        />
      </View>

      <Text style={styles.text}>Result : {result}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  btnContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  input: {
    width: "90%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    padding: 5,
    fontSize: 22,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
  },
});
