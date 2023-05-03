import React from "react";
import { Image, Pressable, StatusBar, Text, View } from "react-native";
import Styles from "./Styles";
import { CoverPartOfOrgImage } from "@/constants/image/authScreen/PartOfOrg";
import { NavigationTree } from "@/utils";

const PartOfOrgScreen = ({ navigation }) => {
	const handleContinuePress = () => {
		navigation.navigate(NavigationTree.app.HomeScreen);
	};

	return (
		<>
			<StatusBar
				translucent
				barStyle="light-content"
				backgroundColor="transparent"
			/>
			<Image source={CoverPartOfOrgImage} style={Styles.coverImage} />
			<View style={Styles.container}>
				<View style={Styles.headerTextContainer}>
					<Text style={Styles.headerText}>
						Before we proceed tell us more
					</Text>
					<Text style={Styles.subText}>
						Are you a part of an{" "}
						<Text style={Styles.subTextHightLight}>
							organization?
						</Text>
					</Text>
				</View>

				<View style={Styles.buttonContainer}>
					<Pressable
						style={Styles.button}
						onPress={handleContinuePress}
					>
						<Text style={Styles.buttonText}>Yes, I am</Text>
					</Pressable>
					<Pressable
						style={Styles.button}
						onPress={handleContinuePress}
					>
						<Text style={Styles.buttonText}>No, I am not</Text>
					</Pressable>
				</View>
			</View>
		</>
	);
};

export default PartOfOrgScreen;
