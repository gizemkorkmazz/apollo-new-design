import React, { Component } from 'react';
import {
	TouchableOpacity,
	Image,
	View,
	LayoutAnimation,
	Platform,
	UIManager,
	Text,
	Dimensions,
	Animated,
	Easing
} from 'react-native';

const { width, height } = Dimensions.get('screen');

export default class AnimatedBG extends Component {
	constructor(props) {
		super(props);
		const animatedPosition = new Animated.Value(0);
		this.state = {
			opened: false,
			animatedPosition
		};
	}

	componentWillReceiveProps(newProps) {
		if (newProps.yPos !== this.props.yPos) {
			this.state.animatedPosition.setValue(newProps.yPos);
			this.setState({ opened: true });
			this.startAnimation();
		}
	}

	startAnimation() {
		Animated.timing(this.state.animatedPosition, {
			duration: 1000,
			toValue: 0,
			easing: Easing.linear
		}).start();
	}

	render() {
		const { children, onPress, yPos } = this.props;

		var containerStyle = this.state.opened
			? {
					position: 'absolute',
					backgroundColor: '#000d',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			: {
					position: 'absolute',
					backgroundColor: 'red',
					width: 0,
					height: 0
				};
		return (
			<Animated.View
				style={[
					containerStyle,
					{
						transform: [{ translateY: this.state.animatedPosition }]
					}
				]}
			>
				<TouchableOpacity
					style={{ flex: 1, justifyContent: 'center' }}
					onPress={() => {
						console.log('kapatma basıldı');
						this.setState({ opened: false });
						onPress();
					}}
				>
					{children}
				</TouchableOpacity>
			</Animated.View>
		);
	}
}
const styles = {
	viewStyle: { flexDirection: 'row', alignItems: 'center' }
};
