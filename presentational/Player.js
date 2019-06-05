import React,{Component} from 'react';
import {View,Text,StatusBar} from 'react-native';
import HeaderIcon from './HeaderIcon.js';
import TrackDetails from './TrackDetails.js';
import AlbumArt from './AlbumArt.js';
import SeekBar from './SeekBar.js';
import Controls from './Controls.js';
import Video from 'react-native-video';

export default class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            paused:true,
            totalLength:1,
            currentPosition:0,
            selectedTrack:0,
            repeatOn:false,
            shuffleOn:false,
            isChanging:false
        };
    }
    setDuration(data){
//    console.log(totalLength);
    this.setState({
        totalLength:Math.floor(data.duration)
    });
    }
    setTime(data){
    this.setState({
        currentPosition:Math.floor(data.currentTime)
       });
    }
    seek(time){
        time= Math.floor(time);
        this.refs.audioElement && this.refs.audioElement.seek(0);
        this.setState({
            currentPosition:time,
            paused:false,
        });
    }
    onBack(){
        if(this.state.currentPosition<10 && this.state.selectedTrack>0){
            this.refs.audioElement && this.refs.audioElement.seek(0);
            this.setState({
                isChanging:true
            });
            setTimeout(()=>this.setState({
                currentPosition:0,
                paused:false,
                totalLength:1,
                isChanging:false,
                selectedTrack:this.state.selectedTrack-1,
            }),0);
        }else{
            this.refs.audioElement.seek(0);
            this.setState({
                currentPosition:0,
            });
        }
    }
    onForward(){
        if(this.state.selectedTrack<this.props.tracks.length-1){
            this.refs.audioElement && this.refs.audioElement.seek(0);
            this.setState({
                isChanging:true
            });
            setTimeout(()=>this.setState({
                currentPosition:0,
                totalLength:1,
                paused:false,
                isChanging:false,
                selectedTrack:this.state.selectedTrack+1,
            }),0);
        }
    }
    shuffleOn(){

    this.setState({
    shuffleOn:!this.state.shuffleOn,
    isChanging:false

    });

    }

    render(){
        if(this.state.shuffleOn){

            while(1){
            if(this.state.selectedTrack==0){

              const track =  this.props.tracks[this.state.selectedTrack+2];
                      const video =
                          (

                          <Video
                              source={{uri:track.audioUrl}}
                              ref="audioElement"

                              paused={this.state.paused}
                              resizeMode="cover"
                              repeat={this.state.repeatOn}
                                      // Repeat forever.
                              onLoadStart={this.loadStart} // Callback when video starts to load
                              onLoad={this.setDuration.bind(this)}    // Callback when video loads
                              onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
                              onEnd={this.onEnd}           // Callback when playback finishes
                              onError={this.videoError}    // Callback when video cannot be loaded
                              style={styles.audioElement}

                          />

                      );
                      return(
                          <View  style={styles.container}>
                              <StatusBar hidden={true} />
                              <HeaderIcon message="hello" />
                              <AlbumArt url={track.albumArtUrl} />
                              <TrackDetails title={track.title} artist={track.artist} />
                              <SeekBar
                                onSeek={this.seek.bind(this)}
                                        trackLength={this.state.totalLength}
                                        onSlidingStart={() => this.setState({paused: true})}
                                        currentPosition={this.state.currentPosition} />
                              <Controls
                                    onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
                                        repeatOn={this.state.repeatOn}
                                        shuffleOn={this.state.shuffleOn}
                                        forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
                                        onPressShuffle={this.shuffleOn.bind(this)}
                                        onPressPlay={() => this.setState({paused: false})}
                                        onPressPause={() => this.setState({paused: true})}
                                        onBack={this.onBack.bind(this)}
                                        onForward={this.onForward.bind(this)}
                                        paused={this.state.paused}

                                        />
                              {video}

                          </View>

                      );
            }else{

                const track =  this.props.tracks[this.props.tracks.length-this.state.selectedTrack];
                        const video =
                            (

                            <Video
                                source={{uri:track.audioUrl}}
                                ref="audioElement"

                                paused={this.state.paused}
                                resizeMode="cover"
                                repeat={this.state.repeatOn}
                                        // Repeat forever.
                                onLoadStart={this.loadStart} // Callback when video starts to load
                                onLoad={this.setDuration.bind(this)}    // Callback when video loads
                                onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
                                onEnd={this.onEnd}           // Callback when playback finishes
                                onError={this.videoError}    // Callback when video cannot be loaded
                                style={styles.audioElement}

                            />

                        );
                        return(
                            <View  style={styles.container}>
                                <StatusBar hidden={true} />
                                <HeaderIcon message="world" />
                                <AlbumArt url={track.albumArtUrl} />
                                <TrackDetails title={track.title} artist={track.artist} />
                                <SeekBar
                                  onSeek={this.seek.bind(this)}
                                          trackLength={this.state.totalLength}
                                          onSlidingStart={() => this.setState({paused: true})}
                                          currentPosition={this.state.currentPosition} />
                                <Controls
                                      onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
                                          repeatOn={this.state.repeatOn}
                                          shuffleOn={this.state.shuffleOn}
                                          forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
                                          onPressShuffle={this.shuffleOn.bind(this)}
                                          onPressPlay={() => this.setState({paused: false})}
                                          onPressPause={() => this.setState({paused: true})}
                                          onBack={this.onBack.bind(this)}
                                          onForward={this.onForward.bind(this)}
                                          paused={this.state.paused}/>
                                {video}

                            </View>

                        );


            }}

        }else{


        const track =  this.props.tracks[this.state.selectedTrack];
        const video = this.state.isChanging   ? null :
            (

            <Video
                source={{uri:track.audioUrl}}
                ref="audioElement"

                paused={this.state.paused}
                resizeMode="cover"
                repeat={this.state.repeatOn}
                        // Repeat forever.
                onLoadStart={this.loadStart} // Callback when video starts to load
                onLoad={this.setDuration.bind(this)}    // Callback when video loads
                onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
                onEnd={this.onEnd}           // Callback when playback finishes
                onError={this.videoError}    // Callback when video cannot be loaded
                style={styles.audioElement}

            />

        );
        return(
            <View  style={styles.container}>
                <StatusBar hidden={true} />
                <HeaderIcon message="Playing From Charts" />
                <AlbumArt url={track.albumArtUrl} />
                <TrackDetails title={track.title} artist={track.artist} />
                <SeekBar
                  onSeek={this.seek.bind(this)}
                          trackLength={this.state.totalLength}
                          onSlidingStart={() => this.setState({paused: true})}
                          currentPosition={this.state.currentPosition} />
                <Controls
                      onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
                          repeatOn={this.state.repeatOn}
                          shuffleOn={this.state.shuffleOn}
                          forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
                          onPressShuffle={this.shuffleOn.bind(this)}
                          onPressPlay={() => this.setState({paused: false})}
                          onPressPause={() => this.setState({paused: true})}
                          onBack={this.onBack.bind(this)}
                          onForward={this.onForward.bind(this)}
                          paused={this.state.paused}/>
                {video}
            </View>

        );

    }}
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};