import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({ navigation }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <FormikPostUploader />
  </View>
);

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{ uri: "https://img.icons8.com/ios/100/ffffff/back--v1.png" }}
        style={{ width: 25, height: 20, fontWeight: "900" }}
      />
    </TouchableOpacity>

    <Text style={styles.headerText}>NewPost</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    marginRight: 25,
  },
});

export default AddNewPost;
