/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import AppStyles from '../../../AppStyles';
import {PrimaryButton} from '../../../components';

import {CustomChip} from '../../../components';

import BannerSVG from '../../../constants/svg/Insurance.svg';

import Styles from './Styles';

type professionObject = {
	text: string;
	width: string;
};

const professions: professionObject[] = [
	{text: 'Pro', width: '30%'},
	{text: 'Pharmacist', width: '67.5%'},
	{text: 'Lab Technician', width: '52.5%'},
	{text: 'Others...', width: '45%'},
];

export default function ChooseProfessionScreen(): JSX.Element {
	const [selectedProfessionIndex, setSelectedProfessionIndex] =
		useState<number>(-1);

	return (
		<View style={Styles.container}>
			<View style={Styles.imageWrapper}>
				<BannerSVG
					width={Dimensions.get('window').width}
					height={Dimensions.get('window').height * 0.5}
				/>
			</View>
			<View style={Styles.contentWrapper}>
				<Text style={Styles.headerText}>
					Which profession's you are?
				</Text>
				<View style={Styles.customChipContainer}>
					{professions.map((item, index) => (
						<CustomChip
							key={index.toString()}
							text={item.text}
							isSelected={selectedProfessionIndex === index}
							onPress={() => setSelectedProfessionIndex(index)}
							containerStyle={{width: item.width, marginTop: 10}}
						/>
					))}
				</View>
			</View>
			<PrimaryButton
				text="Continue"
				backgroundColor={AppStyles.colorBrand1}
				onPress={() => {}}
			/>
		</View>
	);
}
