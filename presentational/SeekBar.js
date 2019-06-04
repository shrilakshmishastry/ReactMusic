import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
const Slider = require('@react-native-community/slider');
import {Col,Row,Grid} from 'react-native-easy-grid';

const pad = (n,width,z=0)=>{
    n = n+'';
    return n.length  >= width ? n: new Array(width-n.length+1).join(z)+n;
}

const minutesAndSeconds = (position)=>([
    pad(Math.floor(position/60),2),
    pad(position%60,2),
]);

const SeekBar = ({
trackLength,
currentPosition,
onSeek,
onSlidingStart

})=>{
const elapsed = minutesAndSeconds(currentPosition);
const remaining = minutesAndSeconds(trackLength-currentPosition);
return(
    <Grid>
        <Row>
            <Col>
            <Text style={styles.text}>
                {elapsed[0]+":"+elapsed[1]}
            </Text>
            </Col>
            <Col >
            </Col>

        <Col>
        <Slider
                maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
                onSlidingStart={onSlidingStart}
                onSlidingComplete={onSeek}
                value={currentPosition}

                minimumTrackTintColor='#fff'
                maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
                thumbStyle={styles.thumb}
                trackStyle={styles.track}/>
         </Col>
         <Col>
         </Col>
           <Col>
                     <Text style={[styles.text,{width:40}]}>
                         {trackLength>1 && "-"+remaining[0]+":"+remaining[1]}
                     </Text>

                 </Col>
       </Row>
    </Grid>


);
}


const styles = StyleSheet.create({

  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign:'center',
  }
});

export default SeekBar;