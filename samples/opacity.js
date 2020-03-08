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
    Animated.timing(this.state.animation,
      {
        toValue: 0,
        duration: 500
      }
    ).start(()=>{
      Animated.timing(this.state.animation,{
        toValue: 1,
        duration:500
      }).start()
    });
  }

  render(){
    const animatedStyle ={
      opacity : this.state.animation
    }
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress ={this.startAnimation}>
          <Animated.View style={[styles.box,animatedStyle]}/>
        </TouchableNativeFeedback>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  box:{
    height: 250,
    width: 250,
    backgroundColor: "red"
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

 
});

export default App;
