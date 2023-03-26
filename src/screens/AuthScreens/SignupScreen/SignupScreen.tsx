import React from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';

import Styles from './Styles';
import AppStyles from '@/AppStyles';
import {PrimaryButton, SignupWithGoogleBtn} from '@/components';
import {NavigationTree} from '@/utils';
import {CallIconSVG} from '@/constants/svg/Signup';

const SignupScreen = ({navigation}) => {
	const handleSigninPress = () => {
		console.log('Signin Pressed');
	};

	const handleContinuePress = () => {
		navigation.navigate(NavigationTree.auth.OTPScreen);
		console.log('Continue Pressed');
	};

	const handleGoogleSignupPress = () => {
		console.log('Google Signup Pressed');
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

				{/* Name input field */}
				<View style={Styles.inputFieldContainer}>
					<CallIconSVG style={Styles.inputIcon} />
					<TextInput
						style={Styles.textInputField}
						placeholder="Enter your phone number"
						keyboardType="numeric"
						maxLength={10}
						placeholderTextColor={AppStyles.colorGreyLight2}
						cursorColor={AppStyles.colorGreyLight2}
					/>
				</View>
			</View>
			{/* <TouchableOpacity
				onPress={() => handleContinuePress()}
				style={Styles.continueButton}
			>
				<Text style={Styles.continueButtonText}>Continue</Text>
			</TouchableOpacity> */}

			<PrimaryButton
				backgroundColor={AppStyles.colorBrand1}
				onPress={() => handleContinuePress()}
			>
				Continue
			</PrimaryButton>

			<View>
				<Text style={Styles.alreadyAccountText}>
					Already have account?{' '}
					<Pressable
						hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
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
						width: '30%',
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
						width: '30%',
					}}
				/>
			</View>
			{/* eslint-disable-next-line react-native/no-inline-styles */}
			<View style={{flex: 1}}>
				<SignupWithGoogleBtn
					onPress={() => handleGoogleSignupPress()}
				/>
			</View>
		</SafeAreaView>
	);
};

export default SignupScreen;
