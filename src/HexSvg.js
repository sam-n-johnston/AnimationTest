import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
const path = 'M77.94228634059948 4.999999999999999Q86.60254037844386 0 95.26279441628824 4.999999999999999L164.54482671904333 45Q173.20508075688772 50 173.20508075688772 60L173.20508075688772 140Q173.20508075688772 150 164.54482671904333 155L95.26279441628824 195Q86.60254037844386 200 77.94228634059948 195L8.660254037844387 155Q0 150 0 140L0 60Q0 50 8.660254037844387 45Z'


export default class HexSvg extends React.Component {
  render() {
    return (
      <Svg
        height={197 * this.props.size}
        width={175 * this.props.size}
        style={[this.props.style, { alignItems: 'center' }]}
      >
        <Path
          scale={this.props.size}
          d={path}
          x='1'
          y='-1'
          fill='none'
          stroke={this.props.color}
            strokeWidth='4'
        />
      </Svg >
    );
  }
}

HexSvg.propTypes = {
  color: React.PropTypes.string,
  size: React.PropTypes.any,
  style: React.PropTypes.any,
};
