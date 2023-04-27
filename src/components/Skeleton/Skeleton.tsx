import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import LinearGradient, {
	LinearGradientProps,
} from "react-native-linear-gradient";

import Styles from "./Styles";

export interface SkeletonPropsType {
	containerStyle: StyleProp<ViewStyle>;
	colors?: (string | number)[];
	start?: { x: number; y: number };
	end?: { x: number; y: number };
}

export default function Skeleton({
	colors = [
		"rgba(241, 239, 239, 1)",
		"rgba(249, 248, 248, 1)",
		"rgba(231, 229, 229, 1)",
	],
	start = { x: 0, y: 0 },
	end = { x: 1, y: 0 },
	containerStyle,
}: SkeletonPropsType): JSX.Element {
	return (
		<LinearGradient
			start={start}
			end={end}
			colors={colors}
			style={[Styles.container, containerStyle]}
		/>
	);
}
