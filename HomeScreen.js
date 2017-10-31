import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import StoryComponent from '../components/StoryComponent'

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Home',
    },
  };

  render() {
    return (
      <View style={styles.container}>
       <Text>This is Infromation about cities</Text>
       
      <StoryComponent
        title="The border town of Tornio is the city Haparanda"
        city="Haparanda"
        story="Haparanda is a city that is next to Tornio that together called Eurocity"/>
      
      <StoryComponent
        title="Information about Kemi"
        city="Kemi"
        story="Kemi, situated in Sea Lapland, in the centre of the Bothnian Arc, where is about 820 000 inhabitants. ."/>
      
      <StoryComponent
        title="The Town from far away"
        city="Tromso"
        story="Tromso is the last stop in the Northern Lights Route"/>
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C97D7D',
  }
}); 
