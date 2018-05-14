import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
export const EditView = ({ onPress, imageSource, myStyle }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				{
					flexDirection: 'row'
				},
				myStyle
			]}
		>
			<Image source={imageSource} style={{ width: 20, height: 20 }} />
		</TouchableOpacity>
	);
};
