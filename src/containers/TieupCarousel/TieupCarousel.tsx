/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from "react";
import {
	View,
	FlatList,
	Text,
	Pressable,
	ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { PreviousCureCard } from "@/components";

import Styles from "./Styles";

import ForwardIcon from "@/constants/svg/icons/ForwardIcon.svg";
import { NavigationTree } from "@/utils";

type DataObject = {
	id: number;
	image: ImageSourcePropType;
	name: string;
	price: string;
	location: string;
};

export type TieupCarouselPropsType = {
	data: DataObject[];
};

export default function TieupCarousel({
	data,
}: TieupCarouselPropsType): JSX.Element {
	const navigation = useNavigation();

	function onPressSeeAll() {
		navigation.navigate(NavigationTree.app.PreviousCureScreen as never);
	}
	function onPressCard() {}

	return (
		<View style={Styles.container}>
			<View style={Styles.headerContainer}>
				<Text style={Styles.headerText}>Previous Cures</Text>
				<Pressable
					onPress={onPressSeeAll}
					style={Styles.seeAllContainer}
				>
					<Text style={Styles.seeText}>see all</Text>
					<ForwardIcon />
				</Pressable>
			</View>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<PreviousCureCard onPressCard={onPressCard} item={item} />
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
