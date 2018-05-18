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
	}

	componentWillReceiveProps(newProps) {
		if (newProps.isVisible !== this.props.isVisible && newProps.isVisible) {
			// LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
			LayoutAnimation.configureNext(animationConfig);
		}
	}
	renderText() {
		if (this.props.isVisible) {
			return null;
		}
		return <Text style={{ textAlign: 'right', color: 'white', marginRight: 10 }}>{this.props.textTitle2}</Text>;
	}

	render() {
		const { imageSource1, imageSource2, textTitle1, textTitle2, onPress, isVisible } = this.props;

		var containerStyle = isVisible
			? {
					flexDirection: 'column',
					backgroundColor: '#616788',
					paddingVertical: 50,
					marginHorizontal: 20
				}
			: {
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: 'green',
					width: width - 20,
					height: 60
				};
		var graph = isVisible
			? {
					width: 200,
					height: 120
				}
			: {
					width: 60,
					height: 60
				};

		return (
			// 	<TouchableOpacity
			// 	activeOpacity={1}
			// 	onPress={() => {
			// 		console.log('clicked');
			// 	}}
			// >
			<View style={[containerStyle, { alignItems: 'center' }]}>
				<View style={styles.viewStyle}>
					<Image source={imageSource1} style={{ width: 50, height: 50 }} />
					<Text style={{ color: 'white', textAlign: 'left' }}>{textTitle1}</Text>
				</View>
				<View style={styles.viewStyle}>
					{this.renderText()}
					<Image source={imageSource2} style={graph} />
				</View>
			</View>
		);
	}
}
const styles = {
	viewStyle: { flexDirection: 'row', alignItems: 'center' }
};
