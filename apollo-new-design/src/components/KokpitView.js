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
	LayoutAnimation
} from 'react-native';

const selectOpened = (opened, style) => (opened ? style.opened : style.closed);
var CustomLayoutAnimation = {
	duration: 200,
	create: {
		type: LayoutAnimation.Types.easeOut,
		property: LayoutAnimation.Properties.scaleXY
	},
	update: {
		type: LayoutAnimation.Types.linear
	},
	delete: {
		duration: 50,
		type: LayoutAnimation.Types.easeOut,
		property: LayoutAnimation.Properties.scaleXY
	}
	// create: {
	// 	type: LayoutAnimation.Types.linear,
	// 	property: LayoutAnimation.Properties.opacity
	// },
	// update: {
	// 	type: LayoutAnimation.Types.curveEaseInEaseOut
	// }
};
const getStyles = opened =>
	StyleSheet.create({
		container: selectOpened(opened, {
			opened: {
				flexDirection: 'column',
				justifyContent: 'flex-start',
				backgroundColor: '#616788',
				alignItems: 'center',
				borderRadius: 20,
				marginLeft: 20,
				marginRight: 20,
				marginBottom: 10,
				height: 160,
				
				
			},
			closed: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				backgroundColor: '#616788',
				alignItems: 'center',
				borderRadius: 20,
				marginLeft: 20,
				marginRight: 20,
				marginBottom: 10,
				height: 60
			}
		}),
		graph: selectOpened(opened, {
			opened: {
				width: 160,
				height: 100,
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

export default class KokpitView extends Component {
	constructor(props) {
		super(props);
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
		this.state = {
			opened: false
		};
	}

	renderValueText(textTitle2) {
		if (this.state.opened) {
			return <View />;
		}
		return <Text style={{ color: 'white', marginRight: 10 }}>{textTitle2}</Text>;
	}
	render() {
		const { imageSource1, imageSource2, textTitle1, textTitle2 } = this.props;
		const { opened } = this.state;
		const styles = getStyles(opened);

		return (
			<TouchableWithoutFeedback style={{shadowColor:'red'}}
				onPress={() => {
					LayoutAnimation.configureNext(CustomLayoutAnimation);
					this.setState({ opened: !this.state.opened });
				}}
			>
				<View style={styles.container}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image source={imageSource1} style={{ width: 50, height: 50 }} />
						<Text
							ellipsizeMode="tail"
							style={{ maxWidth: this.state.opened ? null : 150, color: 'white', textAlign: 'left' }}
						>
							{textTitle1}
						</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						{this.renderValueText(textTitle2)}
						<Image source={imageSource2} style={styles.graph} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

// const styles = StyleSheet.create({
// 	containerStyle: {
// 	  borderWidth: 1,
// 	  borderRadius: 2,
// 	  borderColor: '#ddd',
// 	  borderBottomWidth: 0,
// 	  shadowColor: '#000',
// 	  shadowOffset: { width: 0, height: 2 },
// 	  shadowOpacity: 0.8,
// 	  shadowRadius: 2,
// 	  elevation: 1,
// 	  marginLeft: 5,
// 	  marginRight: 5,
// 	  marginTop: 10,
// 	}
//   })
