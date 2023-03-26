/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from "react";
import { View, FlatList, Text, Pressable } from "react-native";

import { TieupCarouselComponent } from "@/components";

import Styles from "./Styles";

import ForwardIcon from "@/constants/svg/icons/ForwardIcon.svg";

type DataObject = {
	id: string;
	name: string;
	image: string;
	star: string;
	reviews: string;
	location: string;
};

export type TieupCarouselPropsType = {
	data: DataObject[];
};

export default function TieupCarousel({
	data,
}: TieupCarouselPropsType): JSX.Element {
	return (
		<View style={Styles.container}>
			<View style={Styles.headerContainer}>
				<Text style={Styles.headerText}>Tie-Up Hospitals</Text>
				<Pressable style={Styles.seeAllContainer}>
					<Text style={Styles.seeText}>see all</Text>
					<ForwardIcon />
				</Pressable>
			</View>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TieupCarouselComponent item={item} />
				)}
				ItemSeparatorComponent={() => (
					<View style={{ marginHorizontal: 5 }} />
				)}
				bounces={false}
				nestedScrollEnabled
				horizontal
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
				contentContainerStyle={Styles.listContainer}
			/>
		</View>
	);
}
