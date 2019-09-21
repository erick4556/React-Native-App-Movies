import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground} from 'react-native';

const Category = props => {
  return (
    <ImageBackground
      style={styles.wrapper}
      source={{uri: props.background_image}}>
      <Text style={styles.genre}>{props.genres}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center', //Alinea de manera horizontal
    justifyContent: 'center', //Alinea de manera vertical
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 0,
  },
});

export default Category;
