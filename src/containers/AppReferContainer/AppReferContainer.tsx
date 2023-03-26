/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from "react";
import { View, Text } from "react-native";

import { ReferButton } from "@/components";

import Styles from "./Styles";

type AppReferContainerPropsType = {
	referOptions: string[];
};

export default function AppReferContainer({
	referOptions,
}: AppReferContainerPropsType): JSX.Element {
	return (
		<View style={Styles.container}>
			<Text style={Styles.headerText}>Want to</Text>
			<View style={Styles.buttonContainer}>
				{referOptions.map((item, i) => (
					<ReferButton
						key={i.toString()}
						text={item}
						onPress={() => {}}
						containerStyle={Styles.button}
					/>
				))}
			</View>
		</View>
	);
}
