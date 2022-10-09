import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { post_data } from "../../data/post";
import { Divider } from "react-native-elements";

//https://img.icons8.com/ios-filled/100/FA5252/like--v1.png

const Post = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {post_data?.map((post, index) => (
        <View key={index} style={{ marginBottom: 30 }}>
          {/* divider between stories and post */}
          <Divider width={0.1} orientation="vertical" />
          {/* POST HEADER */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 5,
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{ uri: post.profile_picture }}
                style={styles.story}
              />
              <Text
                style={{ color: "white", marginLeft: 5, fontWeight: "700" }}
              >
                {post.user}
              </Text>
            </View>
            <Text style={{ color: "white", fontWeight: "900", marginEnd: 5 }}>
              ...
            </Text>
          </View>
          {/* POST IMAGE */}
          <View style={{ width: "100%", height: 400 }}>
            <Image
              source={{ uri: post.imageUrl }}
              style={{ height: "100%", resizeMode: "cover" }}
            />
          </View>
          {/* POST FOOTER */}
          <View
            style={{
              marginLeft: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              {/* like */}
              <TouchableOpacity>
                <Image
                  style={styles.footerIcon}
                  source={{
                    uri: "https://img.icons8.com/ios/100/ffffff/hearts--v1.pngs",
                  }}
                />
              </TouchableOpacity>
              {/* comment  */}
              <TouchableOpacity>
                <Image
                  style={styles.footerIcon}
                  source={{
                    uri: "https://img.icons8.com/ios/100/ffffff/speech-bubble--v1.png",
                  }}
                />
              </TouchableOpacity>
              {/* share */}
              <TouchableOpacity>
                <Image
                  style={styles.footerIcon}
                  source={{
                    uri: "https://img.icons8.com/ios/100/ffffff/sent.png",
                  }}
                />
              </TouchableOpacity>
            </View>
            {/* save */}
            <View>
              <TouchableOpacity>
                <Image
                  style={styles.footerIcon}
                  source={{
                    uri: "https://img.icons8.com/ios/100/ffffff/bookmark-ribbon--v1.png",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* LIKES COUNTER */}
          <Text style={{ color: "white", marginLeft: 10 }}>
            {post.likes.toLocaleString("en")} likes
          </Text>
          {/* CAPTION */}
          <Text style={{ color: "white", marginLeft: 10, fontWeight: "600" }}>
            {post.user}
            <Text style={{ fontWeight: "300" }}> {post.caption}</Text>
          </Text>
          {/* COMMENTS shower */}
          <View>
            {!!post.comments.length && ( // disapear if there is no comment
              <Text
                style={{ color: "gray", marginLeft: 10, fontWeight: "600" }}
              >
                View{post.comments.length > 1 ? " all " : " "}
                {post.comments.length.toLocaleString("en")}
                {post.comments.length > 1 ? " comments" : " comment"}
              </Text>
            )}
          </View>
          {/* ACTUAL COMMENTS */}
          <>
            {post.comments.map((comment, index) => (
              <View key={index}>
                <Text
                  style={{
                    color: "white",
                    marginLeft: 30,
                    marginBottom: 5,
                    fontWeight: "600",
                  }}
                >
                  {comment.user}
                  <Text style={{ fontWeight: "300" }}> {comment.comment}</Text>
                </Text>
              </View>
            ))}
          </>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    margin: 7,
    width: 25,
    height: 25,
    fontWeight: 700,
    resizeMode: "contain",
  },
});

export default Post;
