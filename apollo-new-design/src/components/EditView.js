import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
export const EditView = ({ onPress, imageSource, myStyle }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				{
					flexDirection: 'row',
					marginLeft: 15,
					marginTop: 15
				},
				myStyle
			]}
		>
			<Image source={imageSource} style={{ width: 20, height: 20 }} />
		</TouchableOpacity>
	);
};
