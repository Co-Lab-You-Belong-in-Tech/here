import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const StarRating = (props: any) => {
  // This array will contain our star tags. We will include this
  // array between the view tag.
  let stars = [];
  // Loop 5 times
  for (var i = 1; i <= 5; i++) {
    // set the path to filled stars
    let name = "ios-star";
    // If ratings is lower, set the path to unfilled stars
    if (i > props.ratings) {
      name = "ios-star-outline";
    }

    stars.push(<Ionicons name={name} size={14} style={styles.star} key={i} />);
  }

  return (
    <View style={styles.container}>
      {stars}
      {/* <Text style={styles.text}>({props.reviews})</Text> */}
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    color: "#6156B0",
    marginHorizontal: 2,
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
    color: "#444",
  },
});
