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
    Subheading,
} from "react-native-paper";

function UnlockPremium(props) {
    const {theme} = props;
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={require('../assets/trump_512x512.png')}
                    style={{
                        width: Dimensions.get('window').width - 32, 
                        height: Dimensions.get('window').width - 32,
                        marginBottom: 24,
                        borderRadius: theme.roundness
                    }}
                />
                <ProgressBar/>
                <Title 
                    style={{marginTop: 8, textAlign: "center"}}
                >
                        12%
                </Title>
            </View>
            <View style={{alignItems: "center"}}>
                <IconButton 
                    icon="close-circle"
                    size={80}
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