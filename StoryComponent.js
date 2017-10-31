import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class StoryComponent extends React.Component {
  render() {
    return (
      <View style={styles.card}> 
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.caption}>City — {this.props.city}</Text>
          <Text numberOfLines={10} style={styles.description}>{this.props.story}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        color: 'black', 

    },

    caption: {
        fontSize: 12,
        color: 'blue',
    },
    description: {
      fontSize: 10,
    },
    card: {
      margin: 6,
      borderWidth: 5,
      borderColor: 'black',
      backgroundColor: 'yellow',
      padding: 12
    }
  });