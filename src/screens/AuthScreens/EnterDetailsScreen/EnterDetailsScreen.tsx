import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import Styles from "./Styles";
import { EditProfileInputArea } from "@/containers";
import IEnterDetailTypes from "@/types/EnterDetailTypes";
import { PrimaryButton } from "@/components";
import AppStyles from "@/AppStyles";
import { NavigationTree } from "@/utils";

const EnterDetailsScreen = ({ navigation }) => {
	const [userDetails, setUserDetails] = useState<IEnterDetailTypes>({
		name: "",
		address: "",
		email: "",
		city: "",
		district: "",
		state: "",
		pincode: 1,
		dob: "",
		gender: "",
	});

	console.log(userDetails);

	const handleContinuePress = () => {
		navigation.navigate(NavigationTree.auth.EnterProfessionScreen);
	};

	return (
		<View style={Styles.container}>
			<View style={Styles.headerTextContainer}>
				<Text style={Styles.headerText}>
					Enter your <Text style={Styles.headerText2}>Details</Text>
				</Text>
				<Text style={Styles.subHeaderText}>
					Just few steps away from logging in to your account
				</Text>
			</View>

			<View style={Styles.wrapper}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					scrollEventThrottle={16}
					style={{ marginTop: 20 }}
					contentContainerStyle={Styles.scrollContainer}
				>
					<EditProfileInputArea<IEnterDetailTypes>
						label="Full Name"
						keyboardType="default"
						placeholder="Enter your name"
						value={userDetails.name}
						valueOf="name"
						autoCapitalize="words"
						setUserDetials={setUserDetails}
						containerStyle={{ width: "100%", marginBottom: 25 }}
					/>
					<View style={Styles.doubleInputContainer}>
						<EditProfileInputArea<IEnterDetailTypes>
							label="Address"
							keyboardType="default"
							placeholder="Enter your address"
							containerStyle={{ width: "42%" }}
							valueOf="address"
							setUserDetials={setUserDetails}
						/>
						<EditProfileInputArea<IEnterDetailTypes>
							label="Email Address"
							keyboardType="email-address"
							placeholder="Enter your email address"
							containerStyle={{ width: "42%" }}
							setUserDetials={setUserDetails}
							valueOf="email"
						/>
					</View>

					<View style={Styles.doubleInputContainer}>
						<EditProfileInputArea<IEnterDetailTypes>
							label="City"
							keyboardType="default"
							placeholder="Enter your city"
							setUserDetials={setUserDetails}
							containerStyle={{ width: "42%" }}
							valueOf="city"
						/>
						<EditProfileInputArea<IEnterDetailTypes>
							label="State"
							keyboardType="default"
							placeholder="Enter your city"
							setUserDetials={setUserDetails}
							containerStyle={{ width: "42%" }}
							valueOf="state"
						/>
					</View>
					<View style={Styles.doubleInputContainer}>
						<EditProfileInputArea<IEnterDetailTypes>
							label="District"
							keyboardType="default"
							placeholder="Enter your district"
							containerStyle={{ width: "42%" }}
							setUserDetials={setUserDetails}
							valueOf="district"
						/>
						<EditProfileInputArea<IEnterDetailTypes>
							label="Pincode"
							keyboardType="numeric"
							placeholder="Enter your pincode"
							setUserDetials={setUserDetails}
							valueOf="pincode"
							containerStyle={{ width: "42%" }}
						/>
					</View>
					<View style={Styles.doubleInputContainer}>
						<EditProfileInputArea<IEnterDetailTypes>
							label="DOB"
							keyboardType="default"
							placeholder="Enter your DOB"
							containerStyle={{ width: "42%" }}
							setUserDetials={setUserDetails}
							valueOf="dob"
						/>
						<EditProfileInputArea<IEnterDetailTypes>
							label="Gender"
							keyboardType="default"
							placeholder="Enter your pincode"
							setUserDetials={setUserDetails}
							valueOf="gender"
							containerStyle={{ width: "42%" }}
						/>
					</View>

					<PrimaryButton
						backgroundColor={AppStyles.colorBrand1}
						onPress={handleContinuePress}
					>
						<Text
							style={{
								color: AppStyles.colorWhite,
								fontSize: 16,
							}}
						>
							Continue
						</Text>
					</PrimaryButton>
				</ScrollView>
			</View>
		</View>
	);
};

export default EnterDetailsScreen;
