import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Animated } from 'react-native';

export default class AnimatedRotation extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 100,
      duration: 3000
    }).start()
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '1800deg']
    })
    const animatedStyle = {
      borderRadius: this.animatedValue,
      transform: [
        { rotate: interpolateRotation }
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text style={styles.text}>Spinner</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    backgroundColor: "#333",
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ddd'
  }
})

AppRegistry.registerComponent('AnimatedRotation', () => AnimatedRotation);
