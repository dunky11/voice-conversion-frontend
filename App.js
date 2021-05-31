import React, { PureComponent } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  Provider as PaperProvider,
  DarkTheme,
  Appbar,
} from 'react-native-paper';
import { Route, Switch, withRouter, withHistory } from 'react-router-native';
import SelectVoice from "./pages/SelectVoice.js";
import RecordAudio from "./pages/RecordAudio.js";
import UnlockPremium from "./pages/UnlockPremium.js";
import ConvertAudio from "./pages/ConvertAudio.js";

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    surface: "rgb(40, 40, 40)"
  },
  adaptive: true,
}

const voices = [
  {
    name: "Donald Trump",
    image: require('./assets/trump_512x512.png'),
  },
  { 
    name: "Kim Kardashian",
    image: require('./assets/kim_kardashian_512x512.png'),
  },
  {
    name: "Kanye West",
    image: require('./assets/kanye_west_512x512.png'),
  },
  {
    name: "Justin Bieber",
    image: require('./assets/justin_bieber_512x512.png'),
  },
  {
    name: "Billie Eilish",
    image: require('./assets/billie_eilish_512x512.png'),
  }
];

class App extends PureComponent {
  onUseVoice = name => {
    const {history} = this.props;
    history.push("/record-audio"); 
  }

  getTitle = () => {
    const {history} = this.props;
    switch(history.location.pathname) { 
      case "/record-audio":
        return "Record Audio";
      case "/unlock-premium":
        return "Unlock Premium";
      case "/convert-audio":
          return "Converting Audio";
      default:
        return "Select a Voice";
    }
  }

  goToPremium = () => {
    const {history } = this.props;
    history.push("/unlock-premium");
  }

  render() {
    const { history } = this.props;
    return (
      <PaperProvider theme={theme}>
        <Appbar.Header style={{elevation: 4}}>
          {history.index > 0 && <Appbar.BackAction onPress={history.goBack}/>}
          <Appbar.Content title={this.getTitle()}/>
          <Appbar.Action icon="lock-open-outline" onPress={this.goToPremium} />
        </Appbar.Header>
        <Switch>
          <Route path="/record-audio" render={() => <RecordAudio/>}/>
          <Route path="/unlock-premium" render={() => <UnlockPremium/>}/>
          <Route path="/convert-audio" render={() => <ConvertAudio/>}/>
          <Route path="/" render={() => <SelectVoice voices={voices} onUseVoice={this.onUseVoice}/>}/>
        </Switch>
        <StatusBar style="auto" />
      </PaperProvider>
    );
  }
}

export default withRouter(App);