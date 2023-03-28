import React from "react";
import { Text, View } from "react-native";
import Styles from "./Styles";

interface TagProps {
	children: React.ReactNode;
	colorBG: string;
	colorText: string;
}

const Tag = ({ children, colorBG, colorText }: TagProps) => {
	return (
		<View style={[Styles.container, { backgroundColor: colorBG }]}>
			<Text style={[Styles.text, { color: colorText }]}>{children}</Text>
		</View>
	);
};

export default Tag;
