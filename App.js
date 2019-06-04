/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import HeaderIcon from './presentational/HeaderIcon.js';
import {Col,Row,Grid} from 'react-native-easy-grid';
import TrackDetails from './presentational/TrackDetails.js';
import AlbumArt from './presentational/AlbumArt.js';
import SeekBar from './presentational/SeekBar.js';
import Controls from './presentational/Controls.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

       <Grid>

          <Row>
           <HeaderIcon message="Playing from charts"/>
          </Row>
           <Row size={7}>
            <AlbumArt   url="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg" />
           </Row>
            <Row size={2}>
            <TrackDetails title="Stressed Out"
                      artist="Twenty One Pilots" />
            </Row>
            <Row >
             <SeekBar trackLength={204} currentPosition={105} />
           </Row>
           <Row style={{padding:20}}>
            <Controls/>
           </Row>
       </Grid>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
