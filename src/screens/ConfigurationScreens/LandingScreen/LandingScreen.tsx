/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import OnlineMedicineSVG from '../../../constants/svg/OnlineMedicine.svg';
import UserSVG from '../../../constants/svg/User.svg';
import PeopleSVG from '../../../constants/svg/People.svg';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';

export default function LandingScreen(): JSX.Element {
	const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);

	function handleOnClickOption(index: number) {
		setSelectedOptionIndex(index);
	}

	return (
		<View style={Styles.container}>
			<View style={Styles.imageWrapper}>
				<OnlineMedicineSVG />
			</View>
			<View style={Styles.optionWrapper}>
				<Text style={Styles.headerText}>
					Which describes you the best?
				</Text>
				<View style={Styles.optionsContainer}>
					<TouchableOpacity
						onPress={() => handleOnClickOption(0)}
						activeOpacity={0.85}
						style={[
							Styles.option,
							selectedOptionIndex === 0
								? {
										borderColor: AppStyles.colorBrand1,
										backgroundColor:
											'rgba(138, 134, 241, 0.12)',
								  }
								: {borderColor: AppStyles.colorGrey2},
						]}
					>
						<UserSVG width={40} height={40} />
						<Text style={Styles.optionText}>Individual</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handleOnClickOption(1)}
						activeOpacity={0.85}
						style={[
							Styles.option,
							selectedOptionIndex === 1
								? {
										borderColor: AppStyles.colorBrand1,
										backgroundColor:
											'rgba(138, 134, 241, 0.12)',
								  }
								: {borderColor: AppStyles.colorGrey2},
						]}
					>
						<PeopleSVG width={40} height={40} />
						<Text style={Styles.optionText}>Organization</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
