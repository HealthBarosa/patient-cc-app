/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from "react";
import { View, Text, Image } from "react-native";

import Styles from "./Styles";

import Star from "@/constants/svg/Star.svg";
import Location from "@/constants/svg/Location.svg";

type TieupCarouselComponentPropsType = {
	item: {
		id: string;
		name: string;
		image: string;
		star: string;
		reviews: string;
		location: string;
	};
};

export default function TieupCarouselComponent({
	item,
}: TieupCarouselComponentPropsType): JSX.Element {
	return (
		<View style={Styles.container}>
			<Image source={item.image} style={Styles.image} />
			<View style={Styles.content}>
				<Text style={Styles.headerText}>{item.name}</Text>
				<View style={Styles.reviewContainer}>
					<Star width={20} height={20} />
					<Text
						style={Styles.reviewText}
					>{`${item.star} (${item.reviews}) Reviews`}</Text>
				</View>
				<View style={Styles.locationContainer}>
					<Location width={15} height={15} />
					<Text
						numberOfLines={1}
						ellipsizeMode={"tail"}
						style={[Styles.reviewText, { width: "90%" }]}
					>
						{item.location}
					</Text>
				</View>
			</View>
		</View>
	);
}
