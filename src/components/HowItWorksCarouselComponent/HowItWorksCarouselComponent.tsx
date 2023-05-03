/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from "react";
import {
	View,
	ImageBackground,
	Pressable,
	ImageSourcePropType,
} from "react-native";

import Styles from "./Styles";

import PlayIcon from "@/constants/svg/icons/Play.svg";
import { useNavigation } from "@react-navigation/native";
import { NavigationTree } from "@/utils";

type TieupCarouselComponentPropsType = {
	item: {
		id: string;
		image: string;
	};
};

export default function HowItWorksCarouselComponent({
	item,
}: TieupCarouselComponentPropsType): JSX.Element {
	const navigation = useNavigation();

	function onPressPlay() {
		navigation.navigate(NavigationTree.app.DemoVideosScreen as never);
	}

	return (
		<ImageBackground
			source={item.image as ImageSourcePropType}
			style={Styles.imageBackground}
		>
			<Pressable onPress={onPressPlay} style={Styles.playContainer}>
				<PlayIcon />
			</Pressable>
		</ImageBackground>
	);
}
