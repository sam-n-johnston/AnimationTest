import React from 'react';
import { StyleSheet, Text, View, Animated, ScrollView, Dimensions } from 'react-native';
import Hexagon from './src/Hexagon'
import HexSvg from './src/HexSvg'

let AnimatedHexSvg = Animated.createAnimatedComponent(HexSvg)
let { height, width } = Dimensions.get('window')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animation: new Animated.Value(0),
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.state.animation.setValue(0)
      Animated.timing(
        this.state.animation, {
          toValue: 1,
          duration: 950,
        }
      ).start()
    }, 2000)
  }
  test(event) {
    console.log('scrolled')
    console.log(event.nativeEvent.contentOffset.y)
  }

  render() {
    let size = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.15],
    })
    let opacity = this.state.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0.75, 0],
    })

    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.test}
        >
          <View style={{ width, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }} >
            <HexSvg color={'white'} size={1} />
            <AnimatedHexSvg style={{ position: 'absolute', opacity: opacity }} color={'white'} size={size} />
          </View>
          <View style={{ width, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }} >
            <HexSvg color={'white'} size={1} />
            <AnimatedHexSvg style={{ position: 'absolute', opacity: opacity }} color={'white'} size={size} />
          </View>
        </ScrollView >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
