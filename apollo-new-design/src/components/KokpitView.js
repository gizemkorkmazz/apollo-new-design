import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

export default class KokpitView extends React.Component {
	yPos = 0;
	handleLayout(event) {
		this.yPos = event.nativeEvent.layout.y;
	}

	render() {
		const { imageSource1, imageSource2, textTitle1, textTitle2, onPress } = this.props;

		return (
			<TouchableOpacity onPress={() => onPress(yPos)} onLayout={this.handleLayout}>
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
						<Text style={{ color: 'white', textAlign: 'left' }}> {textTitle1}</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ color: 'white', marginRight: 10 }}> {textTitle2}</Text>

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
