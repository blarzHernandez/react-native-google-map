import React, { Component } from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";

class ReviewStars extends Component {
  FullStar = key => (
    <Icon color="#FFC300" key={key} type="ionicon" name="ios-star" size={12} />
  );

  HalfStar = key => (
    <Icon
      color="#FFC300"
      key={key}
      type="ionicon"
      name="md-star-half"
      size={12}
    />
  );

  EmptyStar = key => (
    <Icon
      color="#FFC300"
      key={key}
      type="ionicon"
      name="ios-star-outline"
      size={12}
    />
  );
  render() {
    const { stars } = this.props;
    let starReviews = [];
    for (let i = 1; i <= 5; i++) {
      let star = this.FullStar(i);
      if (i > stars) {
        star = this.EmptyStar(i);
      }
      starReviews.push(star);
    }
    return <View style={{ flex: 1, flexDirection: "row" }}>{starReviews}</View>;
  }
}

export default ReviewStars;
