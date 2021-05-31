import React from "react";
import {
    StyleSheet, 
    View,
    Image,
    Dimensions
} from  "react-native";
import {
    withTheme,
    ProgressBar,
    Title,
    IconButton,
    Headline,
} from "react-native-paper";

function UnlockPremium(props) {
    const {theme, onCancelLoading, progress} = props;
    return (
        <View style={styles.container}>
            <View>
                <View style={{position: "relative"}}>
                    <Image 
                        source={require('../assets/trump_512x512.png')}
                        style={{
                            width: Dimensions.get('window').width - 32, 
                            height: Dimensions.get('window').width - 32,
                            marginBottom: 16,
                            borderRadius: theme.roundness
                        }} 
                    />
                    <View style={{
                        position: "absolute", 
                        right:0, 
                        borderTopRightRadius: theme.roundness,
                        borderBottomRightRadius: theme.roundness,  
                        backgroundColor: "black",
                        opacity: 0.8, 
                        height: Dimensions.get('window').width - 32, 
                        width: (1.0 - progress) * Dimensions.get('window').width - 32
                    }}/>
                </View>
                <Headline 
                    style={{marginTop: 8, textAlign: "center"}}
                >
                        {progress * 100}%
                </Headline>
            </View>
            <View style={{alignItems: "center"}}>
                <IconButton 
                    icon="close-circle"
                    size={80}
                    onPress={onCancelLoading}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: "#121212",
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        flex: 1,
        display: "flex",
        justifyContent: "space-between"
    },
});

export default withTheme(UnlockPremium);