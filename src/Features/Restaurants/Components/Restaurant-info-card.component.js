import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "Some Icon",
    photos = [
      "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/10/32/15/W6FoUgXyRnaFTQjc1Nkw_0S9A2630.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={StyleSheet.card}>
      <Card.Cover
        key={name}
        style={StyleSheet.cover}
        source={{ uri: photos[0] }}
      />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 0, backgroundColor: "white" }, ///might need to change the padding.
  title: { padding: 16, fontWeight: "bold" },
});
