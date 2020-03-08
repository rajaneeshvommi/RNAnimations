


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
        toValue: 2,
        duration: 1500
      }
    ).start(() => {
      this.state.animation.setValue(0)
    });
  }

  render() {
    const animationInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ["rgb(0, 102, 255)", "rgb(255, 153, 255)", "rgb(204, 51, 0)"]
    })
  
    const containerBGStyle = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ["rgb(0, 102, 255)", "rgb(255, 153, 255)", "rgb(204, 51, 0)"]
    })
    


    const backgroundColorStyles = {
      backgroundColor: animationInterpolate
    }

    const containerBG = {
      backgroundColor: containerBGStyle
    }

    return (
      <View style={[styles.container,containerBG]}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, backgroundColorStyles]} />
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
