import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

import Styles from "./Styles";
import AppStyles from "@/AppStyles";
import { PrimaryButton, SignupWithGoogleBtn } from "@/components";
import { NavigationTree } from "@/utils";
import { CallIconFocousedSVG, CallIconSVG } from "@/constants/svg/Signup";
import CheckBox from "@react-native-community/checkbox";
import apiAuthInstance from "@/api";
import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

const SignupScreen = ({ navigation }) => {
	const [isFocoused, setIsFocoused] = useState<boolean>(false);
	const [toggleCheckBox, setToggleCheckBox] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState<string>("");

	const handleSigninPress = async () => {
		navigation.navigate(NavigationTree.auth.SignInScreen);
		console.log("Signin Pressed");
	};

	const termsOfServicePress = () => {
		navigation.navigate(NavigationTree.auth.TermsOfService);
		console.log("termsOfService Pressed");
	};

	const handleContinuePress = async (phoneNumber: string) => {
		// const response = await apiAuthInstance.get(`/signup?mobile=${phoneNumber}`);
		console.log("Continue Pressed");
		console.log("phoneNumber", phoneNumber);
		console.log(
			`${REACT_APP_BASE_URL}/api/global/auth/signup?mobile=${phoneNumber}`
		);
		navigation.navigate(NavigationTree.auth.OTPScreen);
		// await fetch(
		// 	`${REACT_APP_BASE_URL}/api/global/auth/signup?mobile=${phoneNumber}`
		// 	// "https://jsonplaceholder.typicode.com/todos/1"
		// ).then((response) => {
		// 	console.log(response);
		// 	navigation.navigate(NavigationTree.auth.OTPScreen);
		// })
		// .catch((error) => {
		// 	console.log("Error:",error);
		// });

		// axios
		// 	.get(
		// 		// `${REACT_APP_BASE_URL}/api/global/auth/signup?mobile=${phoneNumber}`
		// 		// `https://stage.api.webapp.patientcc.in/actuator/health`
		// 		// "https://jsonplaceholder.typicode.com/todos/1"
		// 		"https://api.coindesk.com/v1/bpi/currentprice.json"
		// 	)
		// 	.then((response) => {
		// 		console.log(response.status);
		// 		navigation.navigate(NavigationTree.auth.OTPScreen);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	};

	const handleGoogleSignupPress = () => {
		console.log("Google Signup Pressed");
	};

	const enableContinueBtn = () => {
		if (phoneNumber.length === 10 && toggleCheckBox) {
			console.log("enableContinueBtn", true);

			return true;
		} else {
			console.log("enableContinueBtn", false);

			return false;
		}
	};

	console.log("phoneNumber", phoneNumber);

	return (
		<SafeAreaView style={Styles.container}>
			<View>
				<Text style={Styles.headerText}>Hi, Welcome! </Text>
				<Text style={Styles.subHeaderText}>
					Sign up to your account.
				</Text>
			</View>

			<View style={Styles.inputContainer}>
				{/* Name input field */}
				{/* <View style={Styles.inputFieldContainer}>
					<UserIconSVG style={Styles.inputIcon} />
					<TextInput
						style={Styles.textInputField}
						placeholder="Enter your name"
						autoCapitalize="words"
						placeholderTextColor={AppStyles.colorGreyLight2}
						cursorColor={AppStyles.colorGreyLight2}
					/>
				</View> */}

				{/* Phone number input field */}
				<View style={Styles.inputFieldContainer}>
					{isFocoused ? (
						<CallIconFocousedSVG style={Styles.inputIcon} />
					) : (
						<CallIconSVG style={Styles.inputIcon} />
					)}

					<TextInput
						style={Styles.textInputField}
						placeholder="Enter your phone number"
						keyboardType="phone-pad"
						maxLength={10}
						placeholderTextColor={AppStyles.colorGreyLight2}
						cursorColor={AppStyles.colorGreyLight2}
						onFocus={() => setIsFocoused((val) => !val)}
						onBlur={() => setIsFocoused((val) => !val)}
						onChangeText={(text) => setPhoneNumber(text)}
					/>
				</View>

				<View style={Styles.termsAndConditionsContainer}>
					<CheckBox
						value={toggleCheckBox}
						onValueChange={(newValue) =>
							setToggleCheckBox(newValue)
						}
						tintColors={{ true: AppStyles.colorBrand1 }}
						tintColor={AppStyles.colorBrand1}
						style={Styles.checkBox}
					/>

					<Text style={Styles.termsAndConditionsText}>
						I agree to the{" "}
						<Pressable
							hitSlop={{
								top: 20,
								bottom: 20,
								left: 20,
								right: 20,
							}}
							onPress={() => termsOfServicePress()}
						>
							<Text style={Styles.highlightText}>
								Terms of Service
							</Text>
						</Pressable>
						{"  "}&{"  "}
						<Pressable
							hitSlop={{
								top: 20,
								bottom: 20,
								left: 20,
								right: 20,
							}}
							onPress={() => handleSigninPress()}
						>
							<Text style={Styles.highlightText}>
								Privacy Policy
							</Text>
						</Pressable>
					</Text>
				</View>
			</View>
			<PrimaryButton
				backgroundColor={AppStyles.colorBrand1}
				onPress={() => handleContinuePress(phoneNumber)}
				disabled={!enableContinueBtn()}
			>
				Continue
			</PrimaryButton>

			<View>
				<Text style={Styles.alreadyAccountText}>
					Already have account?{" "}
					<Pressable
						hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
						onPress={() => handleSigninPress()}
					>
						<Text style={Styles.loginText}> Sign In</Text>
					</Pressable>
				</Text>
			</View>

			<View style={Styles.loginPlaceholderContainer}>
				<View
					// eslint-disable-next-line react-native/no-inline-styles
					style={{
						borderBottomColor: AppStyles.colorGreyLight2,
						borderBottomWidth: 1,
						width: "30%",
					}}
				/>
				<Text style={Styles.loginWithPlaceholderText}>
					Or login with
				</Text>
				<View
					// eslint-disable-next-line react-native/no-inline-styles
					style={{
						borderBottomColor: AppStyles.colorGreyLight2,
						borderBottomWidth: 1,
						width: "30%",
					}}
				/>
			</View>
			{/* eslint-disable-next-line react-native/no-inline-styles */}
			<View style={{ flex: 1 }}>
				<SignupWithGoogleBtn
					onPress={() => handleGoogleSignupPress()}
				/>
			</View>
		</SafeAreaView>
	);
};

export default SignupScreen;
