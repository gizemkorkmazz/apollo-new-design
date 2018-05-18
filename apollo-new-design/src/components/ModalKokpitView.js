import React, { Component } from 'react';
import {
	Text,
	Image,
	View,
	StyleSheet,
	Button,
	TouchableWithoutFeedback,
	UIManager,
	Platform,
	Animated,
	LayoutAnimation,
	Easing,
	Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
const selectOpened = (opened, style) => (opened ? style.opened : style.closed);

var CustomLayoutAnimation = {
	duration: 1000,
	create: {
		type: LayoutAnimation.Types.easeOut,
		property: LayoutAnimation.Properties.opacity
	},
	update: {
		type: LayoutAnimation.Types.linear
	},
	delete: {
		duration: 50,
		type: LayoutAnimation.Types.easeOut,
		property: LayoutAnimation.Properties.opacity
	}
};

const getStyles = (opened, positionY) =>
	StyleSheet.create({
		container2: selectOpened(opened, {
			opened: {
				backgroundColor: '#616788',
				paddingVertical: 50,
				paddingHorizontal: 100,
				borderRadius: 20
			},
			closed: {}
		}),
		container: selectOpened(opened, {
			opened: {
				position: 'absolute',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				backgroundColor: '#0005',
				paddingHorizontal: 40,
				paddingVertical: 100,
				height: height - 50,
				width: width
			},
			closed: {
				position: 'absolute',
				flexDirection: 'row',
				justifyContent: 'space-between',
				backgroundColor: '#616788',
				borderRadius: 20,
				marginLeft: 20,
				height: 60,
				width: width - 40
				// width: width
			}
		}),

		graph: selectOpened(opened, {
			opened: {
				width: 200,
				height: 150,
				right: 0,
				borderRadius: 10
			},
			closed: {
				width: 60,
				height: 60,
				right: 0,
				borderTopRightRadius: 20,
				borderBottomRightRadius: 20
			}
		}),
		valueText: selectOpened(opened, {
			opened: { color: 'white', width: 0, height: 0 },
			closed: { color: 'white', marginRight: 10 }
		})
	});

export default class ModalKokpitView extends Component {
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

	startAnimation() {
		Animated.timing(this.state.yPosition, {
			toValue: 0,
			duration: 1000,
			easing: Easing.cubic
		}).start();
	}

	componentWillReceiveProps(newProps) {
		if (this.props.isVisible !== newProps.isVisible) {
			this.state.yPosition.setValue(this.props.yPos);
			setTimeout(() => {
				LayoutAnimation.configureNext(CustomLayoutAnimation);
				this.setState({ opened: !this.state.opened });
				this.startAnimation();
			}, 2000);
		}
	}

	renderModal(isVisible, styles) {
		const { imageSource1, imageSource2, textTitle1, textTitle2, onPress, yPos } = this.props;

		if (isVisible) {
			return (
				<TouchableWithoutFeedback
					onPress={() => {
						onPress();
					}}
				>
					<Animated.View style={[styles.container, { transform: [{ translateY: this.state.yPosition }] }]}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Image source={imageSource1} style={{ width: 50, height: 50 }} />
							<Text ellipsizeMode="tail" style={{ maxWidth: 150, color: 'white', textAlign: 'left' }}>
								{textTitle1}
							</Text>
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Text style={{ textAlign: 'right', color: 'white', marginRight: 10 }}>{textTitle2}</Text>
							<Image source={imageSource2} style={styles.graph} />
						</View>
					</Animated.View>
				</TouchableWithoutFeedback>
			);
		}
		return null;
	}

	render() {
		const styles = getStyles(this.state.opened, this.props.yPos);
		return this.renderModal(this.props.isVisible, styles);
	}
}
