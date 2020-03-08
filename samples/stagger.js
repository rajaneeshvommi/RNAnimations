
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, Animated, Text, Easing } from 'react-native';




 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      translateOne: new Animated.Value(0),
      translateTwo: new Animated.Value(0),
      translateThree: new Animated.Value(0),
      translateFour: new Animated.Value(0),
      translateFive: new Animated.Value(0),
      translateSix: new Animated.Value(0),
      progressView: 1
     }
  }

  componentDidMount() {
    Animated.stagger(500,[
      Animated.loop(
        Animated.timing(
        this.state.translateOne,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
        }
  
      )),
      Animated.loop(
        Animated.timing(
        this.state.translateTwo,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
        }
  
      )),
      Animated.loop(
        Animated.timing(
        this.state.translateThree,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
        }
  
      )),
      Animated.loop(
        Animated.timing(
        this.state.translateFour,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
        }
  
      )),
      Animated.loop(
        Animated.timing(
        this.state.translateFive,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
        }
  
      )),
      Animated.loop(
        Animated.timing(
        this.state.translateSix,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
        }
  
      )),

    ])
    .start();
    
  }

  find_dimesions(layout) {
    const { width } = layout;
    this.setState({
      progressView : width - 35
    })
  }

  render() {
    const traslateXAxisOne = this.state.translateOne.interpolate({
      inputRange: [0, 1],
      outputRange: [-1, this.state.progressView]
    });

    const traslateXAxisTwo = this.state.translateTwo.interpolate({
      inputRange: [0, 1],
      outputRange: [-1, this.state.progressView]
    });
    const traslateXAxisThree = this.state.translateThree.interpolate({
      inputRange: [0, 1],
      outputRange: [-1, this.state.progressView]
    });

    const traslateXAxisFour = this.state.translateFour.interpolate({
      inputRange: [0, 1],
      outputRange: [-1, this.state.progressView]
    });
    const traslateXAxisFive = this.state.translateFive.interpolate({
      inputRange: [0, 1],
      outputRange: [-1, this.state.progressView]
    });
    const traslateXAxisSix = this.state.translateSix.interpolate({
      inputRange: [0, 1],
      outputRange: [-1, this.state.progressView]
    });

    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{ padding: 10, }}>
            <View style={{ width: "100%", height: 40, backgroundColor: '#BAD5E8', borderRadius: 10, justifyContent: 'center' }} onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }} >
              <Text style={{ color: '#1D325F', zIndex: 100, textAlign: 'center' }}>{'Responding …'}</Text>
              <Animated.View style={[styles.translateBox ,   {transform: [{ translateX: traslateXAxisOne }]}]}></Animated.View>
              <Animated.View style={[styles.translateBox ,   {transform: [{ translateX: traslateXAxisTwo }]}]}></Animated.View>
              <Animated.View style={[styles.translateBox ,  {transform: [{ translateX: traslateXAxisThree }]}]}></Animated.View>
              <Animated.View style={[styles.translateBox ,   {transform: [{ translateX: traslateXAxisFour }]}]}></Animated.View>
              <Animated.View style={[styles.translateBox ,   {transform: [{ translateX: traslateXAxisFive }]}]}></Animated.View>
              <Animated.View style={[styles.translateBox ,  {transform: [{ translateX: traslateXAxisSix }]}]}></Animated.View>
              {/* <Parallelogram/> */}
            </View>
          </View>
        </SafeAreaView>
      </View>
    )
  }

};

var TriangleUp = ()=>{
   {
    return (
      <View style={[styles.triangle]} />
    )
  }
}

var TriangleDown = ()=>{
    return (
      <TriangleUp style={styles.triangleDown}/>
    )
   }


   var Parallelogram = ()=>{
    
      return (
        <View style={styles.parallelogram}>
          <TriangleUp style={styles.parallelogramRight} />
          {/* <View style={styles.parallelogramInner} /> */}
          <TriangleDown style={styles.parallelogramLeft} />
        </View>
      )
    }


const styles = StyleSheet.create({
    translateBox :{
      backgroundColor: '#DCEAF3',
      width: 25, 
      height: 40,
      position: 'absolute', 
     
    },
    triangleDown: {
      transform: [
        {rotate: '180deg'}
      ]
    },
   
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red'
  },
  parallelogram: {
    width: 150,
    height: 100
  },
  parallelogramInner: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'red',
    width: 150,
    height: 100,
  },
  parallelogramRight: {
    top: 0,
    right: -50,
    position: 'absolute'
  },
  parallelogramLeft: {
    top: 0,
    left: -50,
    position: 'absolute'
  }
});

export default App;




