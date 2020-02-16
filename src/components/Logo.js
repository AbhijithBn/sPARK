import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/spark_logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 160,
    marginBottom: 12,
  },
});

export default memo(Logo);

// memo() is when you expect the functional component to render often and usually with the same props.
// A common situation that makes a component render with the same props is being forced to render by a parent component.