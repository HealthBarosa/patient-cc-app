import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

import AppStyles from "@/AppStyles";
import { PrimaryButton, SignupWithGoogleBtn } from "@/components";
import { NavigationTree } from "@/utils";
import {
	CallIconFocousedSVG,
	CallIconSVG,
	UserFocousedSVG,
} from "@/constants/svg/Signup";
import Styles from "./Styles";
import { UserIconSVG } from "@/constants/svg/Referral";

const SignInScreen = ({ navigation }) => {
	const [isFocousedPhone, setIsFocousedPhone] = useState<boolean>(false);
	const [isFocousedName, setIsFocousedName] = useState<boolean>(false);
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [name, setName] = useState<string>("");

	const handleSignUpPress = () => {
		navigation.navigate(NavigationTree.auth.SignupScreen);
		console.log("Signin Pressed");
	};

	const handleContinuePress = () => {
		navigation.navigate(NavigationTree.auth.OTPScreen);
		console.log("Continue Pressed");
	};

	const handleGoogleSignupPress = () => {
		console.log("Google Signup Pressed");
	};

	const enableContinueBtn = () => {
		if (phoneNumber.length === 10 && name.length > 0) {
			console.log("enableContinueBtn", true);

			return true;
		} else {
			console.log("enableContinueBtn", false);

			return false;
		}
	};

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
				<View style={Styles.inputFieldContainer}>
					{isFocousedName ? (
						<UserIconSVG style={Styles.inputIcon} />
					) : (
						<UserFocousedSVG style={Styles.inputIcon} />
					)}

					<TextInput
						style={Styles.textInputField}
						placeholder="Enter your name"
						autoCapitalize="words"
						placeholderTextColor={AppStyles.colorGreyLight2}
						cursorColor={AppStyles.colorGreyLight2}
						onChangeText={(text) => setName(text)}
						onFocus={() => setIsFocousedName((val) => !val)}
						onBlur={() => setIsFocousedName((val) => !val)}
					/>
				</View>

				{/* Phone number input field */}
				<View style={Styles.inputFieldContainer}>
					{isFocousedPhone ? (
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
						onFocus={() => setIsFocousedPhone((val) => !val)}
						onBlur={() => setIsFocousedPhone((val) => !val)}
						onChangeText={(text) => setPhoneNumber(text)}
					/>
				</View>

				{isFocousedName && name.length > 0 && (
					<Text style={Styles.authAsText}>
						Authenticate as {name}?
					</Text>
				)}
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
						onPress={() => handleSignUpPress()}
					>
						<Text style={Styles.loginText}> Sign Up</Text>
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

export default SignInScreen;
