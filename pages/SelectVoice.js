import React from "react";
import { StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native';
import VoiceCard from "../components/VoiceCard.js";

function SelectVoice(props) {
    const { voices, onUseVoice } = props;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.celebrityCardWrapper}>
                {voices.map(
                    (el, index) =>
                        <VoiceCard style={{marginBottom: index !== voices.length - 1 ? 16 : 0}} 
                            key={el.name} 
                            name={el.name} 
                            image={el.image}
                            onUseVoice={onUseVoice}
                        />
                    )
                }
            </View>
        </ScrollView>
    );
}

export default SelectVoice;

const styles = StyleSheet.create({
    container: { 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        paddingTop: 16,
        paddingBottom: 16
    },
    celebrityCardWrapper: {
        paddingLeft: 16,
        paddingRight: 16
    }
});
  