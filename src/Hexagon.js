import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Hexagon extends React.Component {
  render() {
    let width = Math.sqrt(2 * Math.pow(this.props.lengthOfSide, 2) + Math.pow(this.props.lengthOfSide, 2))
    const triangleHeight = this.props.lengthOfSide * Math.cos(Math.PI / 3)
    return (
      <View>
        <View style={[styles.hexagonBefore, { borderLeftWidth: width / 2, borderRightWidth: width / 2, borderBottomWidth: triangleHeight, borderBottomColor: this.props.color }]} />
        <View style={{ width, height: this.props.lengthOfSide, backgroundColor: this.props.color }} />
        <View style={[styles.hexagonAfter, { borderLeftWidth: width / 2, borderRightWidth: width / 2, borderTopWidth: triangleHeight, borderTopColor: this.props.color }]} />
      </View>
    );
  }
}

Hexagon.propTypes = {
  lengthOfSide: React.PropTypes.number,
  color: React.PropTypes.string,
};

const styles = StyleSheet.create({
  hexagonAfter: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  hexagonBefore: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  }
});
