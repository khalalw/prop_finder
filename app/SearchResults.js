// `use strict`;

import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from "react-native";

export default class SearchResults extends Component {
  _keyExtractor = (item, index) => `${index}`;

  _renderItem = ({ item }) => {
    return (
      <TouchableHighlight underlayColor="#dddddd">
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.navigation.state.params.listings}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
