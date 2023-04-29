import React from "react";
import { View, StatusBar, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Styles from "./Styles";
import { EditProfileInputArea } from "@/containers";
import { ScreenHeader } from "@/components";

export default function EditProfile(): JSX.Element {
	const navigation = useNavigation();

	function onPressGoBack() {
		navigation.goBack();
	}

	return (
		<View style={Styles.container}>
			<StatusBar
				barStyle={"light-content"}
				translucent
				backgroundColor={"transparent"}
			/>
			<ScreenHeader screenName="Edit Profile" onPress={onPressGoBack} />
			<View style={Styles.wrapper}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					scrollEventThrottle={16}
					style={{ marginTop: 20 }}
					contentContainerStyle={Styles.scrollContainer}
				>
					<EditProfileInputArea
						label="Full Name"
						keyboardType="default"
						placeholder="Enter your name"
						value="Raj Chauhan"
						containerStyle={{ width: "100%", marginBottom: 25 }}
					/>
					<EditProfileInputArea
						label="Mobile Number"
						keyboardType="number-pad"
						placeholder="Enter your phone number"
						value="+91 8123456789"
						containerStyle={{ width: "100%", marginBottom: 25 }}
						buttonText="Update"
						buttonOnPress={() => {}}
					/>
					<EditProfileInputArea
						label="Email Address"
						keyboardType="email-address"
						placeholder="Enter your email address"
						value="rajc12@gmail.com"
						containerStyle={{ width: "100%", marginBottom: 25 }}
						buttonText="Update"
						buttonOnPress={() => {}}
					/>
					<EditProfileInputArea
						label="Address"
						keyboardType="default"
						placeholder="Enter your address"
						value="A102/ Belmond Apartment"
						containerStyle={{ width: "100%", marginBottom: 25 }}
						buttonText="Update"
						buttonOnPress={() => {}}
					/>
					<View style={Styles.doubleInputContainer}>
						<EditProfileInputArea
							label="City"
							keyboardType="default"
							placeholder="Enter your city"
							value="Hyderabad"
							containerStyle={{ width: "42%" }}
						/>
						<EditProfileInputArea
							label="State"
							keyboardType="default"
							placeholder="Enter your city"
							value="Telengana"
							containerStyle={{ width: "42%" }}
						/>
					</View>
					<View style={Styles.doubleInputContainer}>
						<EditProfileInputArea
							label="District"
							keyboardType="default"
							placeholder="Enter your district"
							value="Hyderabad"
							containerStyle={{ width: "42%" }}
						/>
						<EditProfileInputArea
							label="Pincode"
							keyboardType="number-pad"
							placeholder="Enter your pincode"
							value="411002"
							containerStyle={{ width: "42%" }}
						/>
					</View>
					<EditProfileInputArea
						label="User Type"
						keyboardType="default"
						placeholder=""
						value="Individual"
						containerStyle={{ width: "100%", marginBottom: 25 }}
						buttonText="Update"
						buttonOnPress={() => {}}
					/>
				</ScrollView>
			</View>
		</View>
	);
}
