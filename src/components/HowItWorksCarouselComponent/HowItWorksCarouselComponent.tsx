/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from "react";
import { View, ImageBackground, Pressable } from "react-native";

import Styles from "./Styles";

import PlayIcon from "@/constants/svg/icons/Play.svg";

type TieupCarouselComponentPropsType = {
	item: {
		id: string;
		image: string;
	};
};

export default function HowItWorksCarouselComponent({
	item,
}: TieupCarouselComponentPropsType): JSX.Element {
	return (
		<ImageBackground source={item.image} style={Styles.imageBackground}>
			<Pressable style={Styles.playContainer}>
				<PlayIcon />
			</Pressable>
		</ImageBackground>
	);
}
