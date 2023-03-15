import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";

const ColorGenerator = () => {
  const [newColor, setNewColor] = useState([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  };

  console.log(newColor);
  return (
    <View style={[styles.mainContainer]}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          setNewColor([...newColor, randomColor()]);
        }}>
        <Text style={styles.textStyle}> Generate Random Color </Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(key) => key}
        data={newColor}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <View style={styles.imageContainer}>
              <View
                style={{
                  backgroundColor: item,
                  height: 100,
                  borderRadius: 5,
                  margintop: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80%",
                }}>
                <Text style={styles.textStyle}>{item}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ColorGenerator;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 80,
  },
  buttonStyle: {
    backgroundColor: "#00b0ff",
    position: "relative",
    overflow: "hidden",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
  },
  imageContainer: {
    marginVertical: 10,
    paddingHorizontal: 30,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
});
