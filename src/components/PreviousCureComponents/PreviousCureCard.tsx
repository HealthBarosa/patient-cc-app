/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ImageSourcePropType,
} from "react-native";

import Styles from "./Styles";

import RupeeOrangeIcon from "@/constants/svg/icons/RupeeOrangeIcon.svg";
import Location from "@/constants/svg/Location.svg";

export interface IPreviousCureCardProps {
	onPressCard: () => void;
	item: {
		id: number;
		name: string;
		image: ImageSourcePropType;
		price: string;
		location: string;
	};
}

export default function PreviousCureCard({
	onPressCard,
	item,
}: IPreviousCureCardProps): JSX.Element {
	return (
		<TouchableOpacity
			activeOpacity={0.95}
			onPress={onPressCard}
			style={Styles.container}
		>
			<Image source={item.image} style={Styles.image} />
			<View style={Styles.content}>
				<Text style={Styles.headerText}>{item.name}</Text>
				<View style={Styles.priceContainer}>
					<RupeeOrangeIcon width={12} height={12} />
					<Text style={Styles.priceText}>{item.price}</Text>
				</View>
				<View style={Styles.locationContainer}>
					<Location width={15} height={15} />
					<Text
						numberOfLines={1}
						ellipsizeMode={"tail"}
						style={[Styles.bodyText, { width: "85%" }]}
					>
						{item.location}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
