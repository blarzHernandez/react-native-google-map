import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import styles from "./styles";
export default class Search extends Component {
  render() {
    return (
      <SearchBar
        placeholder="Search..."
        value={null}
        round
        platform="android"
        containerStyle={styles.searchContainer}
      />
    );
  }
}
