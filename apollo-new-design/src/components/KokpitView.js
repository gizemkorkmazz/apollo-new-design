import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

export default class KokpitView extends React.Component {
	state = {
		yPos: 0
	};

	y = 0;

	handleLayout(event) {
		this.setState({ yPos: event.nativeEvent.layout.y });
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.scrollPositionChangedCounter !== this.props.scrollPositionChangedCounter) {
			this.measureProgressBar();
		}
	}

	componentDidMount() {
		setTimeout(() => this.measureProgressBar(), 100);
	}

	measureProgressBar() {
		this.refs.progressBar.measure((a, b, width, height, px, py) => {
			this.y = py;
		});
	}

	render() {
		const { icon, graphImage, title, value } = this.props.data;
		const { onPress } = this.props;

		return (
			<TouchableOpacity
				ref="progressBar"
				onPress={() => {
					onPress(this.y);
				}}
				// onLayout={this.handleLayout}
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
						<Image source={icon} style={{ width: 50, height: 50 }} />
						<Text style={{ color: 'white', textAlign: 'left' }}> {title}</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ color: 'white', marginRight: 10 }}> {value}</Text>

						<Image
							source={graphImage}
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
