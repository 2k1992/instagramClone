import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default NewPostScreen;
