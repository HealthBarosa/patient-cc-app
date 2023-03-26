/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from "react";
import { View, FlatList, Text } from "react-native";

import { HowItWorksCarouselComponent } from "@/components";

import Styles from "./Styles";

type DataObject = {
	id: string;
	image: string;
};

export type HowItWorksCarouselPropsType = {
	data: DataObject[];
};

export default function HowItWorkCarousel({
	data,
}: HowItWorksCarouselPropsType): JSX.Element {
	return (
		<View style={Styles.container}>
			<Text style={Styles.headerText}>How It Works</Text>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<HowItWorksCarouselComponent item={item} />
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
