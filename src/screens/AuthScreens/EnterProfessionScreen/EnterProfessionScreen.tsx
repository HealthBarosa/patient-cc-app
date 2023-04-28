import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	KeyboardAvoidingViewBase,
	Pressable,
	Text,
	TextInput,
	View,
} from "react-native";
import Styles from "./Styles";
import { PrimaryButton } from "@/components";
import AppStyles from "@/AppStyles";
import { NavigationTree } from "@/utils";

const professionData = [
	"RMP",
	"Hospital Admin",
	"Doctor",
	"Clinical Assistance",
	"Medical Practitioner",
	"PMP",
];

const EnterProfessionScreen = ({ navigation }) => {
	const [selectedProfession, setSelectedProfession] = useState<string>("");

	console.log("selectedProfession: ", selectedProfession);

	const handleContinuePress = () => {
		navigation.navigate(NavigationTree.auth.PartOfOrgScreen);
	};

	return (
		<View style={Styles.container}>
			<KeyboardAvoidingView
				behavior="position"
				style={Styles.keyboardAvoidingView}
			>
				<View style={Styles.headerTextContainer}>
					<Text style={Styles.headerText}>
						Select your{" "}
						<Text style={Styles.headerText2}>Profession</Text>
					</Text>
					<Text style={Styles.subHeaderText}>
						Please select your profession below to let us know more
						about you
					</Text>
				</View>
				<View style={Styles.wrapSectonText}>
					<View style={Styles.sectionSideBar} />
					<Text style={Styles.sectionText}>Profession</Text>
				</View>

				<View style={{ justifyContent: "center" }}>
					<View style={Styles.professionTabWrapper}>
						{professionData.map((profession, id) => (
							<Pressable
								key={id}
								style={[
									Styles.professionTabButton,
									selectedProfession === profession
										? {
												backgroundColor:
													AppStyles.colorBrandLight1,
										  }
										: {},
								]}
								onPress={() =>
									setSelectedProfession(profession)
								}
							>
								<Text style={Styles.professionText}>
									{profession}
								</Text>
							</Pressable>
						))}
					</View>
				</View>

				<TextInput
					placeholder="Search for your profession"
					placeholderTextColor={AppStyles.colorGrey2}
					style={Styles.searchInput}
				/>
			</KeyboardAvoidingView>

			<View style={{ marginTop: 100 }}>
				<PrimaryButton
					backgroundColor={AppStyles.colorBrand1}
					onPress={handleContinuePress}
					disabled={selectedProfession === ""}
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
			</View>
		</View>
	);
};

export default EnterProfessionScreen;
