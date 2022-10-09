import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Header = ({ navigation }) => {
  return (
    // instagram-logo
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/icon-instagram.png")}
        />
      </TouchableOpacity>

      {/* icons next to instagram */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("NewPostScreen")}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/ios/100/ffffff/plus-2-math.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/ios/100/ffffff/hearts--v1.pngs",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          {/*  unread badge */}
          <View style={styles.unReadBadge}>
            <Text style={styles.unReadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/ios/100/ffffff/facebook-messenger--v1.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  icon: {
    width: 25,
    height: 25,
    style: "light-content",
    marginLeft: 10,
    fontWeight: 700,
    resizeMode: "contain",
  },
  unReadBadge: {
    backgroundColor: "#FF3250",
    borderRadius: 25,
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unReadBadgeText: {
    color: "white",
    fontWight: "600",
  },
});
export default Header;
