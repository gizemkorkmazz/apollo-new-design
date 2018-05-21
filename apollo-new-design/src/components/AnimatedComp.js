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
const customAnimType = {
	duration: 3000,
	create: {
		type: LayoutAnimation.Types.linear,
		property: LayoutAnimation.Properties.opacity
	},
	update: {
		type: LayoutAnimation.Types.linear
	}
};
const springAnimationProperties = {
	type: 'linear',
	property: 'opacity'
};

const animationConfig = {
	duration: 1000,
	create: springAnimationProperties,
	update: springAnimationProperties,
	delete: springAnimationProperties
};

export default class AnimatedComp extends Component {
	constructor(props) {
		super(props);
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
		const yPosition = new Animated.Value(0);
		this.state = {
			opened: false,
			yPosition
		};
	}

	componentWillReceiveProps(newProps) {
		if (newProps.isVisible === true) {
			this.state.yPosition.setValue(newProps.yPos);
			setTimeout(() => {
				LayoutAnimation.configureNext(animationConfig);
				this.setState({ opened: true });
				this.animate();
			}, 100);
		}
		if (newProps.isVisible === false) {
			this.setState({ opened: false });
		}
	}

	animate() {
		Animated.timing(this.state.yPosition, {
			toValue: 120,
			duration: 1000,
			easing: Easing.linear
		}).start();
	}

	renderText() {
		if (this.state.opened) {
			return null;
		}
		return <Text style={{ textAlign: 'right', color: 'white', marginRight: 10 }}>{this.props.textTitle2}</Text>;
	}

	render() {
		const { imageSource1, imageSource2, textTitle1, textTitle2, onPress, yPos } = this.props;
		const { opened } = this.state;

		var containerStyle = opened
			? {
					flexDirection: 'column',
					backgroundColor: '#616788',
					paddingVertical: 50,
					borderRadius: 20,
					marginHorizontal: 20
				}
			: {
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: '#616788',
					borderRadius: 20,
					width: width - 20,
					height: 60
				};
		var graph = opened
			? {
					width: 200,
					height: 120
				}
			: {
					width: 60,
					height: 60
				};

		return (
			<Animated.View
				style={[containerStyle, { alignItems: 'center', transform: [{ translateY: this.state.yPosition }] }]}
			>
				<View style={styles.viewStyle}>
					<Image source={imageSource1} style={{ width: 50, height: 50 }} />
					<Text style={{ color: 'white', textAlign: 'left' }}>{textTitle1}</Text>
				</View>
				<View style={styles.viewStyle}>
					{this.renderText()}
					<Image source={imageSource2} style={graph} />
				</View>
			</Animated.View>
		);
	}
}
const styles = {
	viewStyle: { flexDirection: 'row', alignItems: 'center' }
};
