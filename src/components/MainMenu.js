import React, {Component} from 'react';
import { Image, View, Text, TouchableOpacity} from 'react-native';

export default class MainMenu extends Component {
  constructor(props) {
    super(props)
  }
  
render(props) {
    return (
    <View style={styles.menuContainerStyle}>
      
      <Image style={{height: 300, width: 300}} 
             source={{uri: 'http://etc.usf.edu/clipart/19400/19491/rosetta_ston_19491_lg.gif'}} 
             resizeMode={'contain'} />
      
      <View style={styles.headerStyle}>
      <Text style={styles.headerTextStyle}>Welcome To FlaskCard!</Text>
      </View>
      
      <TouchableOpacity style={styles.menuButtonStyle}
                        onPress={this.props.navToggle} >
      <Text style={styles.menuButtonTextStyle}>Start Learning!</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuButtonStyle}>
      <Text style={styles.menuButtonTextStyle}>Load a Deck</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuButtonStyle}>
      <Text style={styles.menuButtonTextStyle}>Create New Cards</Text>
      </TouchableOpacity>
    
    </View>
    );
  }
}

const styles = {
  headerStyle: {
    padding: 25
  },
  headerTextStyle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  menuContainerStyle: {
    backgroundColor: '#355095',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  menuButtonStyle: {
    margin: 5,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'steelblue',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuButtonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  }
};
