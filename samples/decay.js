/**
 * Sample React Native App for animation Opacity
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet ,Animated,View,PanResponder} from 'react-native';


class App extends Component{

  state = {
    animation : new Animated.ValueXY(0)
    }

  
    componentWillMount(){
      this._panResponder =  PanResponder.create({
        onStartShouldSetPanResponder:() => true,
        // onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (e, gestureState)=>{
          this.state.animation.extractOffset();
        },
        onPanResponderMove : Animated.event([null,
        {
          dx: this.state.animation.x,
          dy: this.state.animation.y
        }
        ]),
        onPanResponderRelease:(e,{vx,vy})=>{
          Animated.decay(this.state.animation,{
            velocity:{
              x:vx,
              y:vy
            },deceleration:0.997
          })
        }
      })
    }

  render(){

    const animatedStyle ={
      transform: this.state.animation.getTranslateTransform(),
    }

    return (
      <View style={styles.container}>
            <Animated.View style={[styles.content,animatedStyle]}
            {...this._panResponder.panHandlers}
            />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  content:{
    height: 200,
    width:200,
    backgroundColor:'red'
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

 
});

export default App;
