/**
 * Sample React Native App for animation Opacity
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet ,Animated, TouchableWithoutFeedback, View ,ScrollView} from 'react-native';


class App extends Component{

  state = {
    animation : new Animated.Value(0)
    }

  render(){

    const backgroundInterPolate = 
    this.state.animation.interpolate({
      inputRange : [0,3000],
      outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
    })
    
    const animatedStyle ={
      backgroundColor: backgroundInterPolate
    }

    return (
      <View style={styles.container}>
          <ScrollView
            scrollEventThrottle ={16}
            onScroll ={ Animated.event([
              {
                nativeEvent : {
                  contentOffset : {
                    y : this.state.animation
                  }
                }
              }
            ])}
          >
            <Animated.View style={[styles.content,animatedStyle]}/>
          </ScrollView>
        
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  content:{
    height: 3000,
  },
  container:{
    flex:1,
  }

 
});

export default App;
