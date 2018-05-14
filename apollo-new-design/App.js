import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { EditView } from './src/components/EditView';
import { LinearGradient } from 'expo';

const { width, height } = Dimensions.get('window');
export default class App extends React.Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					marginTop: 26,
					flexDirection: 'column'
				}}
			>
				<LinearGradient
					colors={['#f194b4', '#f78cc5', '#da8ae8', '#d259cc', '#9c7aaf', '#607d8b']}
					start={{ x: 0, y: 1 }}
					end={{ x: 1, y: 1 }}
				>
					<View
						style={{
							flexDirection: 'column',
							height: 150,
							justifyContent: 'space-around'
						}}
					>
						<View style={{ flexDirection: 'row' }}>
							<EditView imageSource={require('./assets/menu.png')} />
							<Text
								style={{
									flex: 1,
									textAlign: 'center',
									height: 30,
									fontWeight: 'bold',
									fontSize: 20,
									color: 'white'
								}}
							>
								APOLLO
							</Text>
						</View>
						<Text
							style={{
								alignSelf: 'center',
								width: 100,
								height: 30,
								fontWeight: 'bold',
								fontSize: 20,
								color: 'white'
							}}
						>
							Kokpit
						</Text>
					</View>
				</LinearGradient>
				<View style={{ backgroundColor: '#4a5178' }}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
							height: 100
						}}
					>
						<Text style={{ width: 100, height: 50, fontWeight: 'bold', fontSize: 20, color: 'white' }}>
							PORTUS
						</Text>
						<TouchableOpacity>
							<Text style={{ color: 'white' }}>AVM Seç </Text>
						</TouchableOpacity>
					</View>
					<ScrollView>
						<View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									backgroundColor: '#505881',
									alignItems: 'center',
									borderRadius: 20,
									marginLeft: 20,
									marginRight: 20
								}}
							>
								<Image source={require('./assets/yenimüşteri.png')} style={{ width: 50, height: 50 }} />
								<Text style={{ color: 'white' }}>Yeni Müşteri{'\n    '} Sayısı</Text>
								<Text style={{ color: 'white' }}>2563215</Text>

								<Image
									source={require('./assets/1.jpg')}
									style={{
										width: 70,
										height: 70,
										right: 0,
										borderTopRightRadius: 20,
										borderBottomRightRadius: 20
									}}
								/>
							</View>
							<View />
							<View />
							<View />
							<View />
							<View />
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}
