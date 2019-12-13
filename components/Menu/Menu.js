import React, { Component } from "react";
import { Text, View } from "native-base";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles";

class Menu extends Component {
  /**
   *  @param {String} name Icon name
   *  @param {String} text place name
   *  @param {Number} size Icon size
   *  @param {String} color Icon color
   *  @param {String} type Icon type
   *  @param {String} placeType Place type to look up
   
   */
  getItem = (name, text, size, color, type, placeType) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate("MapView", {
          placeType: placeType,
          placeName: text
        })
      }
    >
      <View style={styles.iconStyle}>
        <Icon
          name={name}
          size={size}
          reverse
          color={color}
          type={type}
          raised
        />
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          {this.getItem("beer", "Beers", 40, "#f50", "font-awesome", "bar")}
          {this.getItem("bank", "Bank", 40, "#031068", "font-awesome", "bank")}
          {this.getItem(
            "coffee",
            "Coffee",
            40,
            "#300423",
            "font-awesome",
            "cafe"
          )}
          {this.getItem("md-fitness", "Gym", 40, "#0B6CFB", "ionicon", "gym")}
          {this.getItem(
            "bus",
            "Bus Station",
            40,
            "#056C6B",
            "font-awesome",
            "bus_station"
          )}
          {this.getItem(
            "hotel",
            "Hotel",
            40,
            "#0A23A6",
            "font-awesome",
            "book_store"
          )}
          {this.getItem(
            "local-pharmacy",
            "Pharmacy",
            40,
            "#f50",
            "materialicons",
            "pharmacy"
          )}
          {this.getItem("movie", "Movie", 40, "#000000", "materialicons")}
          {this.getItem("favorite", "Favorities", 40, "#f66", "materialicons")}
        </View>
      </View>
    );
  }
}

export default Menu;
