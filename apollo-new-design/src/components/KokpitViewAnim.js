import React from 'react';
import { Text, Image, View, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class KokpitViewAnim extends React.Component {
	state = {
		animVal: new Animated.Value(0)
	};

	animStarted = false;

	componentDidMount() {
		setTimeout(() => {
			this.startAnimation();
			this.animStarted = true;
		}, 500);
	}

	startAnimation() {
		Animated.timing(this.state.animVal, {
			toValue: 1,
			duration: 800,
			easing: Easing.bezier(0.175, 0.885, 0.32, 1.275)
		}).start(() => {
			this.animStarted = false;
		});
	}

	render() {
		const { icon, graphImage, title, value } = this.props.data;
		const { onPress } = this.props;

		const containerHeight = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [60, 300] });
		const imageHeight = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [60, 100] });
		const imageWidth = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [60, 200] });
		const scaleX = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [1, 4] });
		const scaleY = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [1, 3] });
		const tranlateX = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [0, -30] });
		const tranlateY = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [0, 40] });
		// const containerMargin = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [20, 5] });
		const containerScale = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [1, 1.1] });
		const tranlateContainerY = this.state.animVal.interpolate({
			inputRange: [0, 1],
			outputRange: [this.props.yPos - 25, height / 2 - 150]
		});

		console.log('this.props.yPos : ', this.props.yPos);

		return (
			<Animated.View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: '#616788',
					borderRadius: 20,
					alignItems: 'flex-start',
					alignContent: 'flex-start',
					marginHorizontal: 20,
					marginBottom: 10,
					height: containerHeight,
					flexWrap: 'wrap',
					transform: [{ translateY: tranlateContainerY }, { scale: containerScale }]
				}}
			>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Image source={icon} style={{ width: 50, height: 50 }} />
					<TouchableOpacity onPress={() => (this.animStarted ? null : onPress())}>
						<Text style={{ color: 'white', textAlign: 'left' }}> {title}</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					{/* <Text style={{ color: 'white', marginRight: 10 }}> {value}</Text> */}
					<Animated.Image
						source={graphImage}
						style={{
							position: 'absolute',
							width: 60,
							height: 60,
							right: 0,
							top: 0,
							// borderTopRightRadius: this.animStarted ? 0 : 20,
							// borderBottomRightRadius: this.animStarted ? 0 : 20,
							transform: [
								{
									scaleX: scaleX
								},
								{
									scaleY: scaleY
								},
								{ translateX: tranlateX },
								{ translateY: tranlateY }
							]
						}}
					/>
				</View>
			</Animated.View>
		);
	}
}
