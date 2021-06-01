import React from "react";
import {
    StyleSheet, 
    View,
    NativeModules
} from  "react-native";
import {
    Text, 
    Card, 
    Button, 
    Paragraph, 
    Title, 
    Avatar, 
    List,
    withTheme
} from "react-native-paper";
const { VoiceConversion } = NativeModules;


function UnlockPremium(props) {
    const {theme} = props;
    console.log(VoiceConversion);
    return (
        <View style={styles.container}>
            <View>
                <Card>
                    <Card.Cover source={require("../assets/imgs/women_with_mic.png")} />
                            {/*<List.Section>
                                <List.Item 
                                    title="First Item" 
                                    left={() => <List.Icon icon="folder" />} 
                                />
                                <List.Item
                                    title="Second Item"
                                    left={() => <List.Icon color="#000" icon="folder" />}
                            />                        
                            </List.Section>
                            */}
                    <Card.Content style={{marginTop: 8}}>
                        <Title>Unlock Premium</Title>
                        <Paragraph style={{color: theme.colors.placeholder}}>Get unlimited access to all voices for a one time payment of 2.99$.</Paragraph>
                    </Card.Content>             
                    <Card.Actions>
                        <Button style={{width: "100%", marginTop: 16}} color={theme.colors.primary} mode="contained">Unlock Premium (2.99$)</Button>
                    </Card.Actions>
                </Card>
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
    },
});

export default withTheme(UnlockPremium);