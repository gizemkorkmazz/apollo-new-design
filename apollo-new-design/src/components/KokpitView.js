import React, { Component } from 'react';
import {
	Text,
	Image,
	View,
	StyleSheet,
	Button,
	TouchableOpacity,
	UIManager,
	Platform,
	LayoutAnimation,
	TouchableHighlight
} from 'react-native';

export default class KokpitView extends Component {
	componentDidMount() {
		setTimeout(this.measureProgressBar, 100);
		this.yPos = 0;
	}

	measureProgressBar = () => {
		this.refs.touchable.measure(this.setWidthProgressMaxSize);
	};

	setWidthProgressMaxSize = (x, y, width, height, px, py) => {
		this.yPos = py;
		console.log(x, y, width, height, px, py);
		// this.setState({ progressMaxSize: width });
	};

	render() {
		const { imageSource1, imageSource2, textTitle1, textTitle2, onPress } = this.props;

		return (
			<TouchableOpacity
				activeOpacity={1}
				ref="touchable"
				onPress={() => {
					onPress(this.yPos);
					// this.setState({ opened: !this.state.opened });
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						backgroundColor: '#616788',
						alignItems: 'center',
						borderRadius: 20,
						marginLeft: 20,
						marginRight: 20,
						marginBottom: 10,
						height: 60
					}}
				>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image source={imageSource1} style={{ width: 50, height: 50 }} />
						<Text ellipsizeMode="tail" style={{ maxWidth: 150, color: 'white', textAlign: 'left' }}>
							{textTitle1}
						</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ textAlign: 'right', color: 'white', marginRight: 10 }}>{textTitle2}</Text>
						<Image
							source={imageSource2}
							style={{
								width: 60,
								height: 60,
								right: 0,
								borderTopRightRadius: 20,
								borderBottomRightRadius: 20
							}}
						/>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}
