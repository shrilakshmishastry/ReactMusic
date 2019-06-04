import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const AlbumArt = ({
  url,
  onPress
}) => (

    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={{uri: url}}
      />

    </TouchableOpacity>

);

export default AlbumArt;

const { width, height } = Dimensions.get('window');
const imageSize = width ;

const styles = StyleSheet.create({

  image: {
    width: imageSize,
    height: imageSize,

  },
})