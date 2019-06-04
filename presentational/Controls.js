import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {Icon} from 'native-base';
const Controls = ({
    paused,
    shuffleOn,
    repeatOn,
    onPressPlay,
    onPressPause,
    onBack,
    onForward,
    onPressShuffle,
    onPressRepeat,
    forwardDisabled,

}) =>{
return(
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
            <Icon style={[styles.secondaryControl,shuffleOn?[]:styles.off,{color:'white'}]} type="MaterialIcons" name="shuffle" />
        </TouchableOpacity>
        <View style={{width:40}} />
        <TouchableOpacity onPress={onBack}>
            <Icon style={{color:'white'}} type="MaterialIcons" name="skip-previous" />
        </TouchableOpacity>
        <View style={{width:20}} />
        {
            !paused?
            <TouchableOpacity onPress={onPressPause}>
                <View style={styles.playButton}>
                    <Icon style={{color:'white'}} type="MaterialIcons" name="pause-circle-outline" />
                </View>
            </TouchableOpacity>:
            <TouchableOpacity onPress={onPressPlay}>
                <View style={styles.playButton}>
                    <Icon style={{color:'white'}} type="MaterialIcons" name="play-circle-outline"/>
                </View>
            </TouchableOpacity>
        }
        <View style={{width:20}} />
        <TouchableOpacity onPress={onForward} disabled={forwardDisabled}>
            <Icon  style={[forwardDisabled && {opacity:0.3},{color:'white'}]} type="MaterialIcons" name="skip-next" />
        </TouchableOpacity>
        <View style={{width:40}} />
        <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat} >
            <Icon style={[styles.secondaryControl,repeatOn?[]:styles.off, {color:'white'}]} type="MaterialIcons" name="repeat" />
        </TouchableOpacity>
    </View>
);
}

const styles =  StyleSheet.create({
    container:{
    flexDirection:'row',
     alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
    },
    playButton: {
        height: 72,
        width: 72,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 72 / 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      secondaryControl: {
        height: 18,
        width: 18,
      },
      off: {
        opacity: 0.30,
      }
})

export default Controls;