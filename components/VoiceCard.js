import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { 
  Card,
  Title,
  Avatar,
  Button,
} from 'react-native-paper';
import classNames  from "classnames";

export default function VoiceCard(props) {
  const {name, image, style, onUseVoice} = props;
  return ( 
    <Card style={{...styles.card, ...style}}>
      <View style={styles.cardInner}>
        <Image style={{borderRadius: 4, height: 120, width: 120 }} source={image} />
        <View style={{marginLeft: 16, flex: 10}}>
          <Title>{name}</Title>
          <View style={{marginTop: "auto"}}>
            <Button mode="outlined" onPress={() => {
              onUseVoice(name) }
            }>Use Voice</Button>
          </View>
        </View>
      </View>
    </Card>
  );
}


const styles = StyleSheet.create({
  card: { 
    width: Dimensions.get('window').width - 32,
    elevation: 1,
    padding: 8
  },
  cardInner: {
    display: "flex",
    flexDirection: "row",
  }
});

