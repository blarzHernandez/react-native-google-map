import React, { Component } from "react";
import { Container, Content } from "native-base";

//Components
import SearchBar from "../SearchBar/SearchBar";
import MenuItem from "../Menu/Menu";

//Styles
import styles from "./styles";
class Dashboard extends Component {
  static navigationOptions = {
    headerTitle: "Find all Around Me!"
  };
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <SearchBar />
        <Content>
          <MenuItem navigation={navigation} />
        </Content>
      </Container>
    );
  }
}

export default Dashboard;
