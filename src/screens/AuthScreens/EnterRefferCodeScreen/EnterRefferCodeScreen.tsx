import { EnterReferSVG } from "@/constants/svg/enterRefer";
import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	Pressable,
	StatusBar,
	Text,
	TextInput,
	View,
} from "react-native";
import Styles from "./Styles";
import AppStyles from "@/AppStyles";
import { PrimaryButton } from "@/components";
import { NavigationTree } from "@/utils";

const EnterRefferCodeScreen = ({ navigation }) => {
	const [referCode, setReferCode] = useState<string>("");

	const disableContinueButton = () => {
		return referCode.length > 0 ? false : true;
	};

	const handleContinuePress = () => {
		navigation.navigate(NavigationTree.auth.EnterDetailsScreen);
	};

	const handleNoCodePress = () => {
		navigation.navigate(NavigationTree.auth.EnterDetailsScreen);
	};

	return (
		<>
			<StatusBar
				backgroundColor={AppStyles.colorWhite}
				barStyle="dark-content"
			/>
			<View style={Styles.container}>
				<KeyboardAvoidingView
					behavior="position"
					style={Styles.keyboardAvoidingView}
				>
					<EnterReferSVG />
					<View style={Styles.headerTextContainer}>
						<Text style={Styles.headerText}>
							Have a{" "}
							<Text style={Styles.headerText2}>
								Referral Code
							</Text>
						</Text>
						<Text style={Styles.subHeaderText}>
							Did you receive an invite code from your friends,
							family or anyone you know?
						</Text>
					</View>

					<TextInput
						style={Styles.inputField}
						placeholder="Enter your referral code"
						placeholderTextColor={AppStyles.colorGreyLight2}
						onChangeText={(refCode) => setReferCode(refCode)}
					/>
				</KeyboardAvoidingView>
				<View style={Styles.btnContainer}>
					<PrimaryButton
						backgroundColor={AppStyles.colorBrand1}
						disabled={disableContinueButton()}
						onPress={handleContinuePress}
					>
						<Text style={Styles.buttonText}>Continue</Text>
					</PrimaryButton>
					<Pressable onPress={handleNoCodePress}>
						<Text style={Styles.noCodeText}>
							I didn’t receive any code
						</Text>
					</Pressable>
				</View>
			</View>
		</>
	);
};

export default EnterRefferCodeScreen;
