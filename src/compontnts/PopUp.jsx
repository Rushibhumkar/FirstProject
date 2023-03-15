import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";

const PopUp = () => {

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      <Button title="button" onPress={handleModal} />
      <Modal isVisible={isModalVisible}>
        <View style={styles.center}
         onPress={handleModal}
        >
          <Text style={styles.Text}>Hello!</Text>
          <Button title="Hide modal" onPress={handleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color:'black',
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  Text:{
    color: 'black',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  center:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
  }
});

export default PopUp;
