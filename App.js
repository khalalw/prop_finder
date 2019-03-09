import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { SearchPage } from "./app/SearchPage";
import { MainNavigator } from "./Navigator";

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu",
// });

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: "Welcome",
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigate("Profile", { name: "Jane" })}
//       />
//     );
//   }
// }

// class SearchPage extends Component {
//   static navigationOptions = {
//     title: "Property Finder",
//   };
//   render() {
//     // const navigate = this.props.navigation;
//     return <Text style={styles.description}>Search for houses to buy!</Text>;
//   }
// }

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#656565",
    marginTop: 65,
  },
});
