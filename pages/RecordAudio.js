import React, {PureComponent} from "react";
import {
    StyleSheet, 
    View, 
} from  "react-native";
import { withRouter } from "react-router-native";
import { IconButton, withTheme, Text, Colors } from "react-native-paper";
import AudioRecorderPlayer, {
     AVEncoderAudioQualityIOSType,
     AVEncodingOption,
     AudioEncoderAndroidType,
     AudioSet,
     AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';

function msToString (s) {
    let ms = String(s % 1000).slice(0, 2);
    let secs = String(Math.floor((s - ms) / 1000));
    if (secs.length == 1) {
        secs = "0" + secs;
    }
    if (ms.length == 1) {
        ms = "0" + ms;
    }
  
    return secs + ':' + ms;
  }

class RecordAudio extends PureComponent {

    constructor(props) {
        super(props);
        this.audioRecorderPlayer = new AudioRecorderPlayer();
        this.state = { 
            isRecording: false, 
            timeElapsed: "00:00", 
            micBars: 0, 
            audio: null 
        };
    }

    startRecording = async () => {
        const path = 'hello.m4a';
        const audioSet = {
            AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
            AudioSourceAndroid: AudioSourceAndroidType.MIC,
            AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
            AVNumberOfChannelsKeyIOS: 2,
            AVFormatIDKeyIOS: AVEncodingOption.aac,
        };
        console.log(this.audioRecorderPlayer);
        const uri = await this.audioRecorderPlayer.startRecorder(path, audioSet);
        this.audioRecorderPlayer.addRecordBackListener((e) => {
            console.log("HERE");
            this.setState({
                recordSecs: e.current_position,
                timeElapsed: this.audioRecorderPlayer.mmssss(
                    Math.floor(e.current_position),
                ),
            });
        });
        this.setState({isRecording: true, audio: null});
    }

    stopRecording = () => {
        this.setState({isRecording: false, audio: "smth"});
    }

    displayMicBars = () => {
        const {micBars} = this.state;
        const {theme} = this.props;
        const bars = [];
        for (let i = 1; i < 11; i++) {
          bars.push(
              <View
                style={{
                  height: 80,
                  width: "6%",
                  marginRight: 8,
                  backgroundColor: micBars >= i ? theme.colors.primary : theme.colors.surface,
                }}
              ></View>,
          );
        }
        return bars;
      };

    startConversion = () => {
        const {history } = this.props;
        history.push("/convert-audio");
    }

    render() {
        const {isRecording, timeElapsed, audio} = this.state;
        const {theme} = this.props;
        return (
            <View style={styles.container}>
                <View style={{marginTop: 32}}>
                    <Text style={{fontSize: 50}}>{timeElapsed}</Text>
                </View>
                <View style={{display: "flex", flexDirection: "row"}}>
                    {this.displayMicBars()}
                </View>
                <View style={{display: "flex", alignItems: "center", flexDirection:"row"}}>
                    <IconButton
                        icon="harddisk"
                        size={48}
                    />
                    <IconButton
                        icon={isRecording ? "stop-circle" : "microphone"}
                        size={80}
                        color={theme.colors.primary}
                        onPress={isRecording ? this.stopRecording : this.startRecording}
                        animated 
                    />
                    <IconButton
                        icon="check"
                        size={48}
                        onPress={this.startConversion}
                        disabled={!audio}
                        color={audio ? theme.colors.primary: null}
                    />
                </View>
            </View>
        );
    }
}

export default withRouter(withTheme(RecordAudio));

const styles = StyleSheet.create({
    container: { 
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#121212",
        paddingTop: 16,
        paddingBottom: 16,
        flex: 1,
    },
});