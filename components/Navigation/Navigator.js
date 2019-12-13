import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import DashboardScreen from "../../components/Dashboard/Dashboard";
import ProfileScreen from "../../components/Profile/Profile";
import MapScreen from "../../components/Map/MapView";
//Screen in the Home tab
const DashboardContainer = createStackNavigator(
  {
    Home: DashboardScreen,
    MapView: MapScreen
  },
  {
    initialRouteName: "Home"
  }
);
//The Main Tab =>Home - Profile  add more tabs here..
const bottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: DashboardContainer,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-home"
            size={30}
            color={`${focused ? "#e90000" : "#575757"}`}
          />
        ),
        style: {
          backgroundColor: "red"
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Profile",
        tabBarIcon: ({ focused }) => (
          <Icon
            name="user-circle"
            size={30}
            color={`${focused ? "#e90000" : "#575757"}`}
          />
        )
      })
    }
  },
  {
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: "#e90000",
        inactiveTintColor: "#575757",
        style: {
          backgroundColor: "#f2f2f2",
          height: 60
        }
      }
    }
  }
);
//Getting the tab header title
bottomTab.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return {
    headerTitle
  };
};

//Root navigator
const AppNavigator = createStackNavigator(
  {
    Home: bottomTab
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);
export default createAppContainer(AppNavigator);
