import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

import Styles from "./Styles";
import AppStyles from "@/AppStyles";
import { PrimaryButton, SignupWithGoogleBtn } from "@/components";
import { NavigationTree } from "@/utils";
import { CallIconFocousedSVG, CallIconSVG } from "@/constants/svg/Signup";
import CheckBox from "@react-native-community/checkbox";

const SignupScreen = ({ navigation }) => {
	const [isFocoused, setIsFocoused] = useState<boolean>(false);
	const [toggleCheckBox, setToggleCheckBox] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState<string>("");

	const handleSigninPress = () => {
		navigation.navigate(NavigationTree.auth.SignInScreen);
		console.log("Signin Pressed");
	};

	const termsOfServicePress = () => {
		navigation.navigate(NavigationTree.auth.TermsOfService);
		console.log("termsOfService Pressed");
	};

	const handleContinuePress = () => {
		navigation.navigate(NavigationTree.auth.OTPScreen);
		console.log("Continue Pressed");
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
				onPress={() => handleContinuePress()}
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
