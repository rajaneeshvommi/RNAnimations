/**
 * Sample React Native App for animation Opacity
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Animated, TouchableWithoutFeedback, View } from 'react-native';


class App extends Component {

  state = {
    animation: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation,
      {
        toValue: 1,
        duration: 1500
      }
    ).start(() => {
      this.state.animation.setValue(0)
    });
  }

  render() {
    const animationInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 300, 0]
    })
    const interpolateInterpolate = animationInterpolate.interpolate({
      inputRange : [0,300],
      outputRange: [1,.5]
    })
    const interpolateTranslateX = animationInterpolate.interpolate({
      inputRange : [0,50,100,150,200,250,300],
      outputRange: [0,-50,100,-150,200,-250,300],
    })


    const animatedStyle = {
      transform: [
        { translateY: animationInterpolate },
        {  translateX: interpolateTranslateX }
      ],
      opacity: interpolateInterpolate
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    height: 200,
    width: 200,
    backgroundColor: "red",
    position: 'absolute'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }


});

export default App;
