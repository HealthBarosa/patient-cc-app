/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';

import {CustomChip, PrimaryButton} from '@/components';
import AppStyles from '@/AppStyles';

import Styles from './Styles';
import {InsuranceSVG} from '@/constants/svg/ChooseProfession';

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
				<InsuranceSVG
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
				backgroundColor={AppStyles.colorBrand1}
				onPress={() => {}}
			>
				Continue
			</PrimaryButton>
		</View>
	);
}
