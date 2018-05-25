import React from 'react';
import {
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Image,
	ImageBackground,
	Dimensions,
	Modal,
	Animated,
	Easing
} from 'react-native';
import { EditView } from './src/components/EditView';
import { LinearGradient } from 'expo';
import KokpitView from './src/components/KokpitView';
import DijitalClock from './src/components/DijitalClock';
import KokpitViewAnim from './src/components/KokpitViewAnim';

const { width, height } = Dimensions.get('window');
const data = [
	{
		icon: require('./assets/yenimüşteri.png'),
		title: `Yeni Müşteri Sayısı`,
		value: '123123',
		graphImage: require('./assets/1.jpg')
	},
	{
		icon: require('./assets/işletilenfaturasayısı.png'),
		title: `İşletilen Fatura Sayısı`,
		value: '234234',
		graphImage: require('./assets/2.jpg')
	},
	{
		icon: require('./assets/işletilenfaturalarıntplamı.png'),
		title: `İşletilen Faturaların ${'\n'} Toplam Tutarı`,
		value: '12332',
		graphImage: require('./assets/1.jpg')
	},
	{
		icon: require('./assets/kuponadedi.png'),
		title: `Kupon Adedi`,
		value: '2423',
		graphImage: require('./assets/2.jpg')
	},
	{
		icon: require('./assets/kuponalanmüşteri.png'),
		title: `Kupon Alan ${'\n'} Müşteri Sayısı`,
		value: '20695',
		graphImage: require('./assets/1.jpg')
	},
	{
		icon: require('./assets/işlemyaptıranmüşteri.png'),
		title: `İşlem Yaptıran ${'\n'} Müşteri Sayısı`,
		value: '20695',
		graphImage: require('./assets/2.jpg')
	}
];
export default class App extends React.Component {
	state = {
		modalIsVisible: false,
		yPos: 0,
		selectedItemIndex: -1,
		modalColor: new Animated.Value(0),
		scrollPositionChangedCounter: 0
	};

	animateModal() {
		this.state.modalColor.setValue(0);
		Animated.timing(this.state.modalColor, {
			toValue: 1,
			duration: 1000,
			easing: Easing.linear
		}).start();
	}

	handleOnPress(yPos, index) {
		this.setState({ yPos: yPos, selectedItemIndex: index });
		setTimeout(() => {
			this.setState({ modalIsVisible: true });
			this.animateModal();
		}, 100);
	}

	onScrollEndDrag() {
		var counter = this.state.scrollPositionChangedCounter + 1;
		this.setState({ scrollPositionChangedCounter: counter });
	}

	render() {
		var bgColor = this.state.modalColor.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: ['#0000', '#0003', '#000c']
		});

		return (
			<View
				style={{
					flex: 1,
					backgroundColor: '#4a5178'
				}}
			>
				<Modal
					animationType="none"
					transparent={true}
					visible={this.state.modalIsVisible}
					onRequestClose={() => {
						alert('Modal has been closed.');
					}}
				>
					<Animated.View style={{ backgroundColor: bgColor, flex: 1 }}>
						<KokpitViewAnim
							data={data[this.state.selectedItemIndex]}
							yPos={this.state.yPos}
							onPress={() => this.setState({ modalIsVisible: false })}
						/>
					</Animated.View>
				</Modal>
				<LinearGradient
					style={{ flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
					colors={['#607d8b', '#9c7aaf', '#d259cc', '#da8ae8', '#f78cc5', '#f194b4']}
					start={{ x: 0, y: 1 }}
					end={{ x: 1, y: 1 }}
				>
					<View
						style={{
							flexDirection: 'column',
							height: 200,
							justifyContent: 'space-around'
						}}
					>
						<View style={{ flexDirection: 'row', marginLeft: 25 }}>
							<EditView imageSource={require('./assets/menuicon.png')} />
							<Text
								style={{
									flex: 1,
									marginLeft: 110,
									marginTop: 20,
									height: 30,
									fontWeight: 'bold',
									fontSize: 12,
									color: 'white'
								}}
							>
								APOLLO
							</Text>
							<TouchableOpacity>
								<Text
									style={{
										color: 'white',
										marginTop: 18,
										marginRight: 20
									}}
								>
									AVM Seç
								</Text>
							</TouchableOpacity>
						</View>
						<View
							style={{
								alignSelf: 'center',
								width: 150,
								height: 80,
								marginBottom: 20
							}}
						>
							<View style={{ flexDirection: 'row', marginBottom: 0, alignItems: 'flex-end' }}>
								<Text
									style={{
										color: 'white',
										fontSize: 30,
										textAlignVertical: 'bottom',
										marginLeft: 10
									}}
								>
									48693
								</Text>
								<Text
									style={{
										color: 'white',
										textAlignVertical: 'bottom',
										marginBottom: 7
									}}
								>
									.21 TL
								</Text>
							</View>
							<Text style={{ color: 'white', fontSize: 12, marginLeft: 15 }}>5326 TL (+20.3%)</Text>
						</View>
					</View>
					<View
						style={{
							height: 10,
							backgroundColor: 'transparent',
							opacity: 0.5,
							borderBottomLeftRadius: 10,
							borderBottomRightRadius: 10
						}}
					/>
				</LinearGradient>

				<View
					style={{
						height: 12,
						backgroundColor: '#b66da8',
						opacity: 0.5,
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10
					}}
				/>
				<View
					style={{
						height: 9,
						backgroundColor: '#875a7e',
						opacity: 0.3,
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10,
						marginLeft: 15,
						marginRight: 15
					}}
				/>
				<View style={{ flex: 3, backgroundColor: '#4a5178' }}>
					<ScrollView onScrollEndDrag={() => this.onScrollEndDrag()}>
						<View style={{ flexDirection: 'column', justifyContent: 'space-around', marginTop: 30 }}>
							<KokpitView
								data={data[0]}
								onPress={yPos => {
									this.handleOnPress(yPos, 0);
								}}
								scrollPositionChangedCounter={this.state.scrollPositionChangedCounter}
							/>

							<KokpitView
								data={data[1]}
								onPress={yPos => {
									this.handleOnPress(yPos, 1);
								}}
								scrollPositionChangedCounter={this.state.scrollPositionChangedCounter}
							/>

							<KokpitView
								data={data[2]}
								onPress={yPos => {
									this.handleOnPress(yPos, 2);
								}}
								scrollPositionChangedCounter={this.state.scrollPositionChangedCounter}
							/>

							<KokpitView
								data={data[3]}
								onPress={yPos => {
									this.handleOnPress(yPos, 3);
								}}
								scrollPositionChangedCounter={this.state.scrollPositionChangedCounter}
							/>
							<KokpitView
								data={data[4]}
								onPress={yPos => {
									this.handleOnPress(yPos, 4);
								}}
								scrollPositionChangedCounter={this.state.scrollPositionChangedCounter}
							/>

							<KokpitView
								data={data[5]}
								onPress={yPos => {
									this.handleOnPress(yPos, 5);
								}}
								scrollPositionChangedCounter={this.state.scrollPositionChangedCounter}
							/>
							<View style={{ height: 100 }} />
						</View>
					</ScrollView>
					<LinearGradient
						style={{ position: 'absolute', height: 100, bottom: 0, left: 0, right: 0 }}
						colors={['transparent', '#21253baa', '#21253b', '#131524']}
					>
						<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
							<TouchableOpacity onPress={() => {}}>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'center',
										alignItems: 'center',
										height: 100
									}}
								>
									<DijitalClock />
								</View>
							</TouchableOpacity>
						</View>
					</LinearGradient>
				</View>

				{this.showIndex()}

				<ViewPagerAndroid scrollEnabled={true}>
					<View>
						<ScrollView
							horizontal={true}
							scrollEnabled={true}
							automaticallyAdjustContentInsets={true}
							pagingEnabled={true}
							showsHorizontalScrollIndicator={true}
						>
							<View style={{ flexDirection: 'row', justifyContent: 'space-around' }} />
						</ScrollView>
					</View>
				</ViewPagerAndroid>
			</View>
		);
	}
	showIndex() {
		if (this.state.viewIndex === -1) {
			return (
				<View
					style={{
						flexDirection: 'column',
						justifyContent: 'center',
						backgroundColor: '#ffb74d',
						marginHorizontal: 50,
						width: 250,
						height: 250,
						borderRadius: 20
					}}
				>
					<Text style={{ fontSize: 60, color: '#607d8b', textAlign: 'center' }}>+453.8%</Text>
				</View>
			);
		} else if (this.state.viewIndex === 0) {
			return (
				<View
					style={{
						flexDirection: 'column',
						justifyContent: 'center',
						backgroundColor: '#c2e19e',
						marginHorizontal: 50,
						width: 250,
						height: 250,
						borderRadius: 20
					}}
				>
					<Text style={{ fontSize: 60, color: '#607d8b', textAlign: 'center' }}>-3.70%</Text>
				</View>
			);
		} else if (this.state.viewIndex === 1) {
			return (
				<View
					style={{
						flexDirection: 'column',
						justifyContent: 'center',
						backgroundColor: '#d39ee1',
						marginHorizontal: 50,
						width: 250,
						height: 250,
						borderRadius: 20
					}}
				>
					<Text style={{ fontSize: 60, color: '#607d8b', textAlign: 'center' }}>+9.98%</Text>
				</View>
			);
		} else {
			return (
				<View
					style={{
						flexDirection: 'column',
						justifyContent: 'center',
						backgroundColor: '#ee6392',
						marginHorizontal: 50,
						width: 250,
						height: 250,
						borderRadius: 20
					}}
				>
					<Text style={{ fontSize: 60, color: '#607d8b', textAlign: 'center' }}>-0.20%</Text>
				</View>
			);
		}
	}
}
