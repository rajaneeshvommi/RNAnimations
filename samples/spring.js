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
    animation : new Animated.Value(1)
    }

  startAnimation =() =>{
    Animated.spring(this.state.animation,
      {
        toValue: 2,
        friction: 2,
        tension: 160
      }
    ).start(()=>{
      this.state.animation.setValue(1)
    });
  }

  render(){
    
    const animatedStyle ={
      transform: [{scale: this.state.animation}]
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
