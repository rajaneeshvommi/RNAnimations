/**
 * Sample React Native App for animation Opacity
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet ,Animated, TouchableWithoutFeedback, View} from 'react-native';


class App extends Component{

  state = {
    animation : new Animated.Value(0)
    }

  startAnimation =() =>{
    Animated.timing(this.state.animation,
      {
        toValue: 1,
        duration: 1500
      }
    ).start(()=>{
      this.state.animation.setValue(0)
    });
  }

  render(){
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0,1],
      outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
    })
    const animatedStyle ={
      backgroundColor: boxInterpolation
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress ={this.startAnimation}>
          <Animated.View style={[styles.box,animatedStyle]}/>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  box:{
    height: 250,
    width: 250,
    backgroundColor: "red",
    position:'absolute'
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

 
});

export default App;
