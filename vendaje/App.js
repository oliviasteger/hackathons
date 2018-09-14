import React, { Component } from 'react';
import { Button, Text } from 'react-native-elements';
import call from 'react-native-phone-call';
import { PropTypes } from 'prop-types';
import { Navigator } from 'react-native-deprecated-custom-components';
import rnTextSize, { TSFontSpecs } from 'react-native-text-size';
import Communications from 'react-native-communications';
import Expo from 'expo';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  View,
  NavigatorIOS,
  TouchableHighlight,
  Image
 } from 'react-native';

const EXAMPLES = [
  { language: 'en', text: 'Shallow Cuts. Wash the cut with water and soap. Cover it with a bandage. If the bandage gets wet, take it off and put a new bandage on.' },
  { language: 'en', text: 'Deep Cuts. Wash the cut with water and soap. Put a clean piece of fabric over the cut. Move the body part of the cut to be above the heart. Hold your hand on the cut for five minutes. If the fabric gets wet, add another piece of clean fabric on top.'},
  { language: 'en', text: 'Mosquito Bites. Put ice on your bite. The itchiness will go away eventually.'},
  { language: 'en', text: 'Tick Bites. Get a small plastic bag and a pair of tweezers. Remove the bug using the tweezers and put it in the bag. Close the bag and put it in the freezer, if you can.'},
  { language: 'en', text: 'Bedbug Bites. Wash the bite out with soap and water. Stay away from furniture, where there might be more bugs.'},
  { language: 'en', text: 'Bee Stings. Use a pair of tweezers to remove the stinger. Apply ice to the sting.'},
  { language: 'en', text: 'Bee Stings. Remove the blue part of your EpiPen. Push the orange part of the EpiPen against your leg for three seconds. Take it off of your leg and rub your leg for 10 seconds. Find an adult and tell them that you were stung.'},
  { language: 'en', text: 'Ant Stings. Wash out the sting with soap and water. Put a bandage over the sting.'},
  { language: 'en', text: 'Small Burns. Put ice on the burn. Put a bandage over the burn.'},
  { language: 'en', text: 'Big Burns. Soak the burn in water. Wrap it with a bandage.'},
  { language: 'es', text: 'Cortes Poco Profundo. Lave el corte con agua y jabón. Cúbrelo con un vendaje. Si el vendaje se moja, quítatelo y ponte un vendaje nuevo.'},
  { language: 'es', text: 'Cortes Profundo. Lave el corte con agua y jabón. Coloque un trozo de tela limpio sobre el corte. Mueva la parte del cuerpo del corte para que esté por encima del corazón. Mantén tu mano en el corte por cinco minutos. Si la tela se moja, añada otra pieza de tela limpia encima.'},
  { language: 'es', text: 'Picaduras de Mosquitos. Pon hielo en tu mordida. El picazón se irá eventualmente.'},
  { language: 'es', text: 'Picaduras de Garrapatas. Consiga una pequeña bolsa de plástico y un par de pinzas. Quite el insecto usando las pinzas y póngalo en la bolsa. Cierra la bolsa y ponla en el congelador, si puedes.'},
  { language: 'es', text: 'Picadures de Chinches. Lave la mordida con agua y jabón. Manténgase alejado de los muebles, donde podría haber más bichos.'},
  { language: 'es', text: 'Picadura de Abeja. Use un par de pinzas para quitar el aguijón. Aplicar hielo al aguijón.'},
  { language: 'es', text: 'Picadura de Abeja. Quite la parte azul de su EpiPen. Empuje la parte anaranjada del EpiPen contra su pierna por tres segundos. Quítatelo de la pierna y frota la pierna durante 10 segundos. Encuentra a un adulto y diles que te han picado.'},
  { language: 'es', text: 'Picadura de Hormiga. Lave el aguijón con agua y jabón. Pon una venda sobre el aguijón.'},
  { language: 'es', text: 'Quemaduras Pequeñas. Pon hielo en la quemadura. Pon una venda sobre la quemadura.'},
  { language: 'es', text: 'Quemaduras Grandes. Empape la quemadura en agua. Envuélvalo con un vendaje.'}
];

_speak = (data) => {
  const start = () => {
    this.setState({ inProgress: true });
  };
  const complete = () => {
    this.state.inProgress && this.setState({ inProgress: false });
  };

  Expo.Speech.speak(data.text,
    {
      language: data.language,
      pitch: 1.0,
      rate: 1.0
    }
  );
};

_stop = () => {
  Expo.Speech.stop();
}

export default class App extends React.Component {
  render() {
    return (
      <Navigator initialRoute = {{ id: 'Page1'}}
      renderScene = {this.navigatorRenderScene}/>
      /* <View style={styles.container}>
        <Button title="English" buttonStyle={styles.regularButton}/>
        <Button title="Spanish" buttonStyle={styles.regularButton}/>
        <Button onPress={this._callService} title="Emergency" buttonStyle={styles.emergencyButton}/>
      </View> */
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'Page1':
        return ( <Page1 navigator = {navigator} /> );
      case 'Page2':
        return ( <Page2 navigator = {navigator} /> );
      case 'Page3':
        return ( <Page3 navigator = {navigator} /> );
      case 'Page4':
        return ( <Page4 navigator = {navigator} /> );
      case 'Page5':
        return ( <Page5 navigator = {navigator} /> );
      case 'Page6':
        return ( <Page6 navigator = {navigator} /> );
      case 'Page7':
        return ( <Page7 navigator = {navigator} /> );
      case 'Page8':
        return ( <Page8 navigator = {navigator} /> );
      case 'Page9':
        return ( <Page9 navigator = {navigator} /> );
      case 'Page10':
        return ( <Page10 navigator = {navigator} /> );
      case 'Page11':
        return ( <Page11 navigator = {navigator} /> );
      case 'Page12':
        return ( <Page12 navigator = {navigator} /> );
      case 'Page13':
        return ( <Page13 navigator = {navigator} /> );
      case 'Page14':
        return ( <Page14 navigator = {navigator} /> );
      case 'Page15':
        return ( <Page15 navigator = {navigator} /> );
      case 'Page16':
        return ( <Page16 navigator = {navigator} /> );
      case 'Page17':
        return ( <Page17 navigator = {navigator} /> );
      case 'Page18':
        return ( <Page18 navigator = {navigator} /> );
      case 'Page19':
        return ( <Page19 navigator = {navigator} /> );
      case 'Page20':
        return ( <Page20 navigator = {navigator} /> );
      case 'Page21':
        return ( <Page21 navigator = {navigator} /> );
      case 'Page22':
        return ( <Page22 navigator = {navigator} /> );
      case 'Page23':
        return ( <Page23 navigator = {navigator} /> );
      case 'Page24':
        return ( <Page24 navigator = {navigator} /> );
      case 'Page25':
        return ( <Page25 navigator = {navigator} /> );
      case 'Page26':
        return ( <Page26 navigator = {navigator} /> );
      case 'Page27':
        return ( <Page27 navigator = {navigator} /> );
      case 'Page28':
        return ( <Page28 navigator = {navigator} /> );
      case 'Page29':
        return ( <Page29 navigator = {navigator} /> );
      case 'Page30':
        return ( <Page30 navigator = {navigator} /> );
      case 'Page31':
        return ( <Page31 navigator = {navigator} /> );
      case 'Page32':
        return ( <Page32 navigator = {navigator} /> );
      case 'Page33':
        return ( <Page33 navigator = {navigator} /> );
    }
  }
}

class Page1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 300, marginBottom: 10, borderRadius: 10 }}
          source={require('./images/logo.jpg')}
        />
        <Button title="English" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page2'}) }/>
        <Button title="Español" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page3'}) }/>
        <Button onPress={() => Communications.phonecall('19175796630', true)} icon={{ name: 'phone' }} title="Emergency" buttonStyle={styles.emergencyButton}/>
      </View>
    );
  }
}

// ENGLISH PAGES
class Page2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>I have a...</Text>
        <Button title="Cut" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page4'}) }/>
        <Button title="Bite" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page10'}) }/>
        <Button title="Sting" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page18'}) }/>
        <Button title="Burn" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page28'}) }/>
        <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page1'}) }/>
      </View>
    );
  }
}

// CUT EXTENDED
  class Page4 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>My cut is...</Text>
          <Button title="Shallow" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page6'}) }/>
          <Button title="Deep" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page8'}) }/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page2'}) }/>
        </View>
      );
    }
  }

  class Page6 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Shallow Cuts</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Wash the cut with water and soap. Cover it with a bandage. If the bandage gets wet, take it off and put a new bandage on.</Text>
          <Button title="Speak" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[0])}/>
          <Button title="Stop" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page4'}) }/>
        </View>
      );
    }
  }

  class Page8 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Deep Cuts</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Wash the cut with water and soap. Put a clean piece of fabric over the cut. Move the body part of the cut to be above the heart. Hold your hand on the cut for five minutes. If the fabric gets wet, add another piece of clean fabric on top.</Text>
          <Button title="Speak" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[1])}/>
          <Button title="Stop" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page4'}) }/>
        </View>
      );
    }
  }

// BITE EXTENDED
  class Page10 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>I was bitten by a...</Text>
          <Button title="Mosquito" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page12'}) }/>
          <Button title="Tick" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page14'}) }/>
          <Button title="Bedbug" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page16'}) }/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page2'}) }/>
        </View>
      );
    }
  }

  class Page12 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Mosquito Bites</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Put ice on your bite. The itchiness will go away eventually.</Text>
          <Button title="Speak" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[2])}/>
          <Button title="Stop" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page10'}) }/>
        </View>
      );
    }
  }

  class Page14 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Tick Bites</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Get a small plastic bag and a pair of tweezers. Remove the bug using the tweezers and put it in the bag. Close the bag and put it in the freezer, if you can.</Text>
          <Button title="Speak" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[3])}/>
          <Button title="Stop" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page10'}) }/>
        </View>
      );
    }
  }

  class Page16 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Bedbug Bites</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Wash the bite out with soap and water. Stay away from furniture, where there might be more bugs.</Text>
          <Button title="Speak" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[4])}/>
          <Button title="Stop" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page10'}) }/>
        </View>
      );
    }
  }

// STING EXTENDED
  class Page18 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>I was stung by a...</Text>
          <Button title="Bee" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page20'}) }/>
          <Button title="Ant" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page26'}) }/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page2'}) }/>
        </View>
      );
    }
  }

  class Page20 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>The sting made me...</Text>
          <Button title="Hurt" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page22'}) }/>
          <Button title="Stop Breathing" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page24'}) }/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page18'}) }/>
        </View>
      );
    }
  }

  class Page22 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Bee Stings</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Use a pair of tweezers to remove the stinger. Apply ice to the sting.</Text>
          <Button title="Speak" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[5])}/>
          <Button title="Stop" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page20'}) }/>
        </View>
      );
    }
  }

  class Page24 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Bee Stings</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Remove the blue part of your EpiPen. Push the orange part of the EpiPen against your leg for three seconds. Take it off of your leg and rub your leg for 10 seconds. Find an adult and tell them that you were stung.</Text>
          <Button title="Speak" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[6])}/>
          <Button title="Stop" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page20'}) }/>
        </View>
      );
    }
  }

  class Page26 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Ant Stings</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Wash out the sting with soap and water. Put a bandage over the sting.</Text>
          <Button title="Speak" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[7])}/>
          <Button title="Stop" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page18'}) }/>
        </View>
      );
    }
  }

// BURN EXTENDED
  class Page28 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>My burn is...</Text>
          <Button title="Small" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page30'}) }/>
          <Button title="Big" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page32'}) }/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page2'}) }/>
        </View>
      );
    }
  }

  class Page30 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Small Burns</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Put ice on the burn. Put a bandage over the burn.</Text>
          <Button title="Speak" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[8])}/>
          <Button title="Stop" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page28'}) }/>
        </View>
      );
    }
  }

  class Page32 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Big Burns</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Soak the burn in water. Wrap it with a bandage.</Text>
          <Button title="Speak" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[9])}/>
          <Button title="Stop" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Back" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page28'}) }/>
        </View>
      );
    }
  }

// SPANISH PAGES

  class Page3 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Yo tengo un(a)...</Text>
          <Button title="Corto" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page5'}) }/>
          <Button title="Mordedura" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page11'}) }/>
          <Button title="Picadura" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page19'}) }/>
          <Button title="Quemadura" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page29'}) }/>
          <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page1'}) }/>
        </View>
      );
    }
  }

// CUT EXTENDED
  class Page5 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Mi corte es...</Text>
          <Button title="Poco Profundo" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page7'}) }/>
          <Button title="Profundo" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page9'}) }/>
          <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page3'}) }/>
        </View>
      );
    }
  }

  class Page7 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Cortes Poco Profundo</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Lave el corte con agua y jabón. Cúbrelo con un vendaje. Si el vendaje se moja, quítatelo y ponte un vendaje nuevo.</Text>
          <Button title="Hablar" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[10])}/>
          <Button title="Detener" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page5'}) }/>
        </View>
      );
    }
  }

  class Page9 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Cortes Profundo</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Lave el corte con agua y jabón. Coloque un trozo de tela limpio sobre el corte. Mueva la parte del cuerpo del corte para que esté por encima del corazón. Mantén tu mano en el corte por cinco minutos. Si la tela se moja, añada otra pieza de tela limpia encima.</Text>
          <Button title="Hablar" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[11])}/>
          <Button title="Detener" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page5'}) }/>
        </View>
      );
    }
  }

// BITE EXTENDED
  class Page11 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Me mordió un(a)...</Text>
          <Button title="Mosquito" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page13'}) }/>
          <Button title="Garrapata" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page15'}) }/>
          <Button title="Chinche" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page17'}) }/>
          <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page3'}) }/>
        </View>
      );
    }
  }

  class Page13 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Picaduras de Mosquitos</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Pon hielo en tu mordida. El picazón se irá eventualmente.</Text>
          <Button title="Hablar" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[12])}/>
          <Button title="Detener" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page11'}) }/>
        </View>
      );
    }
  }

  class Page15 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Picaduras de Garrapatas</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Consiga una pequeña bolsa de plástico y un par de pinzas. Quite el insecto usando las pinzas y póngalo en la bolsa. Cierra la bolsa y ponla en el congelador, si puedes.</Text>
          <Button title="Hablar" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[13])}/>
          <Button title="Detener" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page11'}) }/>
        </View>
      );
    }
  }

  class Page17 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Picadures de Chinches</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Lave la mordida con agua y jabón. Manténgase alejado de los muebles, donde podría haber más bichos.</Text>
          <Button title="Hablar" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[14])}/>
          <Button title="Detener" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page11'}) }/>
        </View>
      );
    }
  }

  // STING EXTENDED
    class Page19 extends Component {
      render() {
        return (
          <View style={styles.container}>
            <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Me picó un(a)...</Text>
            <Button title="Abeja" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page21'}) }/>
            <Button title="Hormiga" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page27'}) }/>
            <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page3'}) }/>
          </View>
        );
      }
    }

    class Page21 extends Component {
      render() {
        return (
          <View style={styles.container}>
            <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>El aguijón me hizo...</Text>
            <Button title="Doler" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page23'}) }/>
            <Button title="Dejar de Respirar" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page25'}) }/>
            <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page19'}) }/>
          </View>
        );
      }
    }

    class Page23 extends Component {
      render() {
        return (
          <View style={styles.container}>
            <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Picadura de Abeja</Text>
            <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Use un par de pinzas para quitar el aguijón. Aplicar hielo al aguijón.</Text>
            <Button title="Hablar" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[15])}/>
            <Button title="Detener" buttonStyle={styles.backButton} onPress={() => _stop()}/>
            <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page21'}) }/>
          </View>
        );
      }
    }

    class Page25 extends Component {
      render() {
        return (
          <View style={styles.container}>
            <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Picadura de Abeja</Text>
            <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Quite la parte azul de su EpiPen. Empuje la parte anaranjada del EpiPen contra su pierna por tres segundos. Quítatelo de la pierna y frota la pierna durante 10 segundos. Encuentra a un adulto y diles que te han picado.</Text>
            <Button title="Hablar" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[16])}/>
            <Button title="Detener" buttonStyle={styles.backButton} onPress={() => _stop()}/>
            <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page21'}) }/>
          </View>
        );
      }
    }

    class Page27 extends Component {
      render() {
        return (
          <View style={styles.container}>
            <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Picadura de Hormiga</Text>
            <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Lave el aguijón con agua y jabón. Pon una venda sobre el aguijón.</Text>
            <Button title="Hablar" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[17])}/>
            <Button title="Detener" buttonStyle={styles.backButton} onPress={() => _stop()}/>
            <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page19'}) }/>
          </View>
        );
      }
    }

// BURN EXTENDED
  class Page29 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Mi quemadura es...</Text>
          <Button title="Pequeña" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page31'}) }/>
          <Button title="Grande" buttonStyle={styles.regularButton} onPress={ () => this.props.navigator.push({ id: 'Page33'}) }/>
          <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page3'}) }/>
        </View>
      );
    }
  }

  class Page31 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Quemaduras Pequeñas</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Pon hielo en la quemadura. Pon una venda sobre la quemadura.</Text>
          <Button title="Hablar" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[18])}/>
          <Button title="Detener" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page29'}) }/>
        </View>
      );
    }
  }

// DONE
  class Page33 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text h3 style={{fontWeight: 'bold', paddingBottom: 15}}>Quemaduras Grandes</Text>
          <Text h4 style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 30, paddingTop: 10}}>Empape la quemadura en agua. Envuélvalo con un vendaje.</Text>
          <Button title="Hablar" buttonStyle={styles.backButton} onPress={() => _speak(EXAMPLES[19])}/>
          <Button title="Detener" buttonStyle={styles.backButton} onPress={() => _stop()}/>
          <Button title="Volver" buttonStyle={styles.backButton} onPress={ () => this.props.navigator.push({ id: 'Page29'}) }/>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  regularButton: {
    backgroundColor: '#FF3300',
    minWidth: 300,
    minHeight: 50,
    marginBottom: 10,
    borderRadius: 10
  },
  emergencyButton: {
    backgroundColor: '#0066ff',
    minWidth: 300,
    minHeight: 50,
    marginBottom: 10,
    borderRadius: 10
  },
  backButton: {
    backgroundColor: '#33cc33',
    minWidth: 300,
    minHeight: 50,
    marginBottom: 10,
    borderRadius: 10
  }
});
