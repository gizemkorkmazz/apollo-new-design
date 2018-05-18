import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { EditView } from './src/components/EditView';
import { LinearGradient } from 'expo';
import KokpitView from './src/components/KokpitView';
import DijitalClock from './src/components/DijitalClock';

const { width, height } = Dimensions.get('window');
export default class App extends React.Component {
	render(){
		return(
			
			<View
				style={{
					flex: 1,
					backgroundColor: '#4a5178'
				}}>
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
						<View style={{ flexDirection: 'row', justifyContent:'space-around'}}>
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
									AVM Seç{' '}
								</Text>
							</TouchableOpacity>
						</View>
						<View
							style={{
								alignSelf: 'center',
								width: 150,
								height: 80,
								marginBottom:50
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
					<ScrollView>
						<View style={{ flexDirection: 'column', justifyContent: 'space-around', marginTop: 30 }}>
							<KokpitView
								imageSource1={require('./assets/yenimüşteri.png')}
								textTitle1="Yeni Müşteri Sayısı"
								textTitle2="25632"
								imageSource2={require('./assets/1.jpg')}
							/>

							<KokpitView
								imageSource1={require('./assets/işletilenfaturasayısı.png')}
								textTitle1={`İşlem Yaptıran Müşteri Sayısı`}
								textTitle2="10580"
								imageSource2={require('./assets/2.jpg')}
							/>
							<KokpitView
								imageSource1={require('./assets/işletilenfaturalarıntplamı.png')}
								textTitle1="İşletilen Fatura Sayısı"
								textTitle2="5326"
								imageSource2={require('./assets/1.jpg')}
							/>
							<KokpitView
								imageSource1={require('./assets/kuponadedi.png')}
								textTitle1={`İşletilen Faturaların Toplam Tutarı`}
								textTitle2="4869321 "
								imageSource2={require('./assets/2.jpg')}
							/>
							<KokpitView
								imageSource1={require('./assets/kuponalanmüşteri.png')}
								textTitle1="Kupon Adedi"
								textTitle2="32168"
								imageSource2={require('./assets/3.jpg')}
							/>
							<KokpitView
								imageSource1={require('./assets/işlemyaptıranmüşteri.png')}
								textTitle1={`Kupon Alan Müşteri Sayısı`}
								textTitle2="20695"
								imageSource2={require('./assets/1.jpg')}
							/>
							<View style={{ height: 100 }} />
						</View>
					</ScrollView>
					<LinearGradient
						style={{ position: 'absolute', height: 100, bottom: 0, left: 0, right: 0 }}
						colors={['transparent', '#21253baa', '#21253b', '#131524']}
					>
						<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
							{/* <Image
								source={require('./assets/earthgif.gif')}
								style={{ width: 40, height: 40, marginTop: 30 }}
							/> */}
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
			</View>
		)
	}
}







//VİEW İNDEX ÖRNEĞİ

// export default class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state={viewIndex:-1}
// 	}
// 	render() {

		
// 		return (
			
// 				<View style={{flexDirection:'column',justifyContent:'space-around',flex:1,backgroundColor:'#969696'}} >
				 
// 					<View style={{flexDirection:'row',justifyContent:'space-between',height:100,marginLeft:15,marginRight:15}} >
					
// 						<TouchableOpacity onPress={()=>{this.setState({viewIndex: this.state.viewIndex=-1})}} >
// 							<Text style={{textDecorationLine:'underline',fontSize:15,color:'#ffb74d'}} >Seçili Gün</Text>
// 						</TouchableOpacity>

// 						<TouchableOpacity onPress={()=>{this.setState({viewIndex: this.state.viewIndex=0})}}> 
// 							<Text style={{textDecorationLine:'underline',fontSize:15 ,color:'#c2e19e'}}>Bir Önceki Gün</Text>
// 						</TouchableOpacity>

						
// 						<TouchableOpacity onPress={()=>{this.setState({viewIndex: this.state.viewIndex=1})}}> 
// 							<Text style={{textDecorationLine:'underline',fontSize:15,color:'#d39ee1'}}>Geçen Hafta</Text> 
// 						</TouchableOpacity>


// 						<TouchableOpacity onPress={()=>{this.setState({viewIndex: this.state.viewIndex=2})}}> 
// 							<Text style={{textDecorationLine:'underline',fontSize:15,color:'#ee6392'}}>Geçen Ay</Text>
// 						</TouchableOpacity>
						
// 					</View>
// 					{this.showIndex()}
					
					
					
				


// 				</View>
// 		);

// 	};
// 	showIndex(){
// 		if (this.state.viewIndex==-1){
// 			return <Text style={{alignItems:'center',textAlign:'center',fontSize:80,marginBottom:200,color:'#607d8b'}} >+453.8%</Text>;
			
// 		}
// 		else if(this.state.viewIndex==0){
// 			return <Text style={{alignItems:'center',textAlign:'center',fontSize:80,marginBottom:200,color:'#607d8b'}}>-3.70%</Text>;
			
// 		}
// 		else if(this.state.viewIndex==1){
// 			return <Text style={{alignItems:'center',textAlign:'center',fontSize:80,marginBottom:200,color:'#607d8b'}}>+9.98%</Text>;
			

// 		}
// 		else {
// 			return <Text style={{alignItems:'center',textAlign:'center',fontSize:80,marginBottom:200,color:'#607d8b'}}>-0.20%</Text>;
			
// 		}


// 	}
// };