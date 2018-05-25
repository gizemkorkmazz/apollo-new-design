import React from 'react';
import { Text, Image, View, TouchableOpacity, Animated, Easing } from 'react-native';
export default class KokpitViewAnim extends React.Component {
	state = {
		// containerHeight: new Animated.Value(60),
		animVal: new Animated.Value(0)
	};

	componentDidMount() {
		setTimeout(() => {
			this.startAnimation();
		}, 10);
	}

	startAnimation() {
		// Animated.timing(this.state.containerHeight, {
		// 	toValue: 300,
		// 	Easing: Easing.bezier(0.175, 0.885, 0.32, 1.275),
		// 	timing: 3000
		// }).start();
		// Animated.timing(this.state.transformAnim, {
		// 	toValue: 1,
		// 	Easing: Easing.bezier(0.175, 0.885, 0.32, 1.275),
		// 	timing: 3000
		// }).start();

		Animated.timing(this.state.animVal, {
			toValue: 1,
			timing: 6000,
			easing: Easing.bezier(0.175, 0.885, 0.32, 1.275)
		}).start();
	}

	render() {
		const { imageSource1, imageSource2, textTitle1, textTitle2, onPress } = this.props;
		const containerHeight = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [60, 300] });
		const imageHeight = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [60, 100] });
		const imageWidth = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [60, 200] });
		const scaleX = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [1, 3] });
		const tranlateX = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [0, -40] });
		const tranlateY = this.state.animVal.interpolate({ inputRange: [0, 1], outputRange: [0, 50] });
		const tranlateContainerY = this.state.animVal.interpolate({
			inputRange: [0, 1],
			outputRange: [this.props.yPos, 50]
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
					marginLeft: 20,
					marginRight: 20,
					marginBottom: 10,
					height: containerHeight,
					flexWrap: 'wrap',
					transform: [{ translateY: tranlateContainerY }]
				}}
			>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Image source={imageSource1} style={{ width: 50, height: 50 }} />
					<TouchableOpacity onPress={onPress}>
						<Text style={{ color: 'white', textAlign: 'left' }}> {textTitle1}</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					{/* <Text style={{ color: 'white', marginRight: 10 }}> {textTitle2}</Text> */}
					<Animated.Image
						source={imageSource2}
						style={{
							position: 'absolute',
							width: 60,
							height: 60,
							right: 0,
							top: 0,
							borderTopRightRadius: 20,
							borderBottomRightRadius: 20,
							transform: [
								{
									scale: scaleX
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
