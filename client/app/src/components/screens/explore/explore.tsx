import * as React from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  Animated,
  Image,
} from "react-native";
import { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { markers } from "../../../../data/cards";
import StarRating from "../../star-rating";
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Fontisto from 'react-native-vector-icons/Fontisto';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 95;
const CARD_WIDTH = 299;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export default function Explore() {
  const initialState = { markers };

  const [pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [state, setState] = React.useState(initialState);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);
  const _map = React.useRef(null);

  const interpolations = state.markers.map((marker: any, index: number) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp",
    });

    return { scale };
  });

  const _scrollView = React.useRef(null);

  // AIzaSyBiNw8zr07GQyQZpMx00iiNlBSPh07i3Tg;

  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setRegion({
            latitude: details?.geometry.location.lat,
            longitude: details?.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: "AIzaSyBiNw8zr07GQyQZpMx00iiNlBSPh07i3Tg",
          language: "en",
          components: "country:us",
          type: "establishment",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            position: "absolute",
            zIndex: 1,
            width: "90%",

            marginTop: Platform.OS === "ios" ? 100 : 20,
            // flexDirection: "row",
            alignSelf: "center",
            borderRadius: 10,
            padding: 10,
            shadowColor: "#ccc",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 10,
          },

          listView: {
            backgroundColor: "white",
            display: "flex",
            alignContent: "center",
            borderRadius: 5,
          },
        }}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          pinColor={"#6156B0"}
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
        <Marker
          coordinate={pin}
          draggable={true}
          pinColor={"#6156B0"}
          onDragStart={e => {
            console.log("Drag start", e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>Pizza Planet</Text>
          </Callout>
        </Marker>
        {/* <Circle center={pin} radius={1000} /> */}
      </MapView>
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true },
        )}
      >
        {state.markers.map((marker, index) => (
          <View style={styles.card} key={index}>
            <Image
              source={marker.image}
              style={styles.cardImage}
              resizeMethod="scale"
              width={56}
              height={95}
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>
                {marker.title}
              </Text>
              <Text numberOfLines={1} style={styles.cardDescription}>
                "{marker.description}"
              </Text>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Text style={styles.user}>{marker.user}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    position: "relative",
                    paddingLeft: 10,
                    marginLeft: 40,
                    // marginTop: 5,
                  }}
                >
                  <StarRating ratings={marker.rating} />
                </View>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  chipsScrollView: {
    position: "absolute",
    top: Platform.OS === "ios" ? 90 : 80,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 50,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    // padding: 10,
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
  cardImage: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
    position: "absolute",
    paddingRight: 10,
    alignSelf: "baseline",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  user: {
    fontSize: 12,
    flexDirection: "row",
    position: "relative",
    paddingLeft: 20,
    marginLeft: 40,
  },
  cardtitle: {
    fontSize: 18,
    color: "#100D0B",
    flexDirection: "row",
    position: "relative",
    paddingLeft: 20,
    marginLeft: 40,
    // marginTop: 5,
    fontWeight: "600",
  },
  cardDescription: {
    fontSize: 12,
    color: "#656360",
    fontStyle: "italic",
    flexDirection: "row",
    position: "relative",
    paddingLeft: 20,
    marginTop: 5,
    marginLeft: 40,
    // marginTop: 5,
    fontWeight: "500",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: "center",
    marginTop: 5,
  },
  signIn: {
    width: "100%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
