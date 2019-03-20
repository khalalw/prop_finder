"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from "react-native";

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
    country: "uk",
    pretty: "1",
    encoding: "json",
    listing_type: "buy",
    action: "search_listing",
    page: pageNumber,
  };
  data[key] = value;

  const queryString = Object.keys(data)
    .map(key => `${key}=${encodeURIComponent(data[key])}`)
    .join("&");

  return `https://api.nestoria.co.uk/api?${queryString}`;
}

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "london",
      isLoading: false,
    };
  }

  _onSearchTextChanged = event => {
    this.setState({ searchString: event.nativeEvent.text });
  };

  _executeQuery = query => {
    console.log(query);
    this.setState({ isLoading: true });
  };

  _onSearchPressed = () => {
    const query = urlForQueryAndPage("place_name", this.state.searchString, 1);
    this._executeQuery(query);
  };

  static navigationOptions = {
    title: "Property Finder",
  };

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;

    return (
      <View style={styles.container}>
        <Text style={styles.description}>Search for houses to buy!</Text>
        <Text style={styles.description}>
          Search by place-name or zip code.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search via name or postcode"
            value={this.state.searchString}
            onChange={this._onSearchTextChanged}
          />
          <Button onPress={this._onSearchPressed} color="#48BBEC" title="Go" />
        </View>
        <Image
          source={require("../resources/house.png")}
          style={styles.image}
        />
        {spinner}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#656565",
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center",
    flex: 1,
  },
  flowRight: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#48BBEC",
    borderRadius: 8,
    color: "#48BBEC",
  },
  image: {
    width: 217,
    height: 138,
  },
});
