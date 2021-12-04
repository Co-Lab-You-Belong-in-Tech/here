import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { SharedElement } from "react-native-shared-element";
import StarRating from "./star-rating";

const CARD_HEIGHT = 95;
const CARD_WIDTH = 299;

const styles = StyleSheet.create({
  locationCard: {
    elevation: 10,
    display: "flex",
    backgroundColor: "#FFF",
    borderRadius: 6,
    alignContent: "center",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },

  locationImage: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
    position: "absolute",
    marginTop: 10,
    marginLeft: 10,
    alignSelf: "baseline",
  },
  locationContent: {
    padding: 10,
    marginLeft: 5,
    marginTop: 2,
  },
  user: {
    fontSize: 12,
    flexDirection: "row",
    position: "relative",
    paddingLeft: 20,
    marginLeft: 40,
  },
  locationTitle: {
    fontSize: 18,
    color: "#100D0B",
    flexDirection: "row",
    position: "relative",
    paddingLeft: 20,
    marginLeft: 40,
    fontWeight: "600",
  },
  locationDescription: {
    fontSize: 12,
    color: "#656360",
    fontStyle: "italic",
    flexDirection: "row",
    position: "relative",
    paddingLeft: 20,
    marginTop: 5,
    marginLeft: 40,
    fontWeight: "500",
  },
});

export interface Location {
  id: number;
  title: string;
  description: string;
  user: string;
  image: number;
  rating: number;
  reviews?: number;
}

interface LocationProps {
  location: Location;
}

export default ({ location }: LocationProps) => {
  const [opacity, setOpacity] = React.useState(1);
  const { navigate, isFocused } = useNavigation();
  const hasFocus = isFocused();
  React.useEffect(() => {
    if (hasFocus) {
      setOpacity(1);
    }
  }, [hasFocus]);
  return (
    <View key={location.id} style={styles.locationCard}>
      <TouchableWithoutFeedback
        onPress={() => {
          setOpacity(0);
          navigate("LocationInfo", { location });
        }}
      >
        <View>
          <SharedElement id={location.id.toString()}>
            <Image
              style={[styles.locationImage, { opacity }]}
              resizeMethod="scale"
              source={location.image}
              borderRadius={4}
              width={55}
              height={75}
            />
          </SharedElement>
          <View style={styles.locationContent}>
            <Text numberOfLines={1} style={styles.locationTitle}>
              {location.title}
            </Text>
            <Text numberOfLines={1} style={styles.locationDescription}>
              "{location.description}"
            </Text>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Text style={styles.user}>{location.user}</Text>
              <View
                style={{
                  flexDirection: "row",
                  position: "relative",
                  paddingLeft: 10,
                  marginLeft: 40,
                }}
              >
                <StarRating ratings={location.rating} />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
