import AppStyles from "@/AppStyles";
import { PrimaryButton } from "@/components";
import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { View, Text } from "react-native";

import Styles from "./Styles";

export interface ILiveReferCaseCardProps {
	id: number | string;
	hospitalImage: ImageSourcePropType;
	patientName: string;
	location: string;
	caseType: string[];
	onPress: () => void;
}

export default function LiveReferCaseCard({
	id,
	hospitalImage,
	patientName,
	location,
	caseType,
	onPress,
}: ILiveReferCaseCardProps): JSX.Element {
	return (
		<View style={Styles.container}>
			<View style={Styles.body}>
				<Image source={hospitalImage} style={Styles.image} />
				<View style={Styles.textContainer}>
					<Text style={Styles.bodyText}>{patientName}</Text>
					<Text style={Styles.subText}>{location}</Text>
					<View style={Styles.caseContainer}>
						{caseType.map((item, index) => (
							<Text key={index} style={Styles.caseText}>
								{item}
							</Text>
						))}
					</View>
				</View>
			</View>
			<PrimaryButton
				activeOpacity={0.85}
				onPress={onPress}
				backgroundColor={AppStyles.colorBrand1}
			>
				Join live refer case
			</PrimaryButton>
		</View>
	);
}
