import React, { useMemo, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import DocumentPicker, {
	DocumentPickerResponse,
	DirectoryPickerResponse,
	isInProgress,
	types,
	isCancel,
} from "react-native-document-picker";

import CorrectGreenIcon from "@/constants/svg/icons/CorrectGreenIcon.svg";

import { MoreOptions, PrimaryButton } from "@/components";
import { BottomActionSheet } from "@/containers";
import { NavigationTree } from "@/utils";
import {
	LocationIcon,
	ProfessionIcon,
	UserProfile,
} from "@/constants/svg/icons";

import Styles from "./Styles";
import AppStyles from "@/AppStyles";

export default function ProfileScreen(): JSX.Element {
	const navigation = useNavigation();
	const [pickedMediaError, setPickedMediaError] = useState<boolean>(false);
	const [pickedAadharError, setPickedAadharError] = useState<boolean>(false);
	const [isBottomSheetActive, setIsBottomSheetActive] =
		useState<boolean>(false);
	const [pickedMediaDocument, setPickedMediaDocument] = useState<
		DocumentPickerResponse | undefined
	>();
	const [pickedAadhar, setPickedAadhar] = useState<
		DocumentPickerResponse | undefined
	>();

	function onPressEditProfile() {
		navigation.navigate(NavigationTree.app.EditProfile as never);
	}
	function onPressChangeLanguage() {
		navigation.navigate(NavigationTree.app.ChangeLanguage as never);
	}
	function onPressAddBank() {
		navigation.navigate(NavigationTree.app.AddBankScreen as never);
	}
	function onPressReferFriend() {
		navigation.navigate(NavigationTree.app.ReferFriendScreen as never);
	}

	const snapPoints = useMemo(() => ["35%"], []);

	async function onPressUploadDocument() {
		try {
			const file = await DocumentPicker.pickSingle({
				type: [types.doc, types.docx, types.pdf],
				presentationStyle: "fullScreen",
				allowMultiSelection: false,
			});
			setPickedMediaError(true);
			setPickedMediaDocument(file);
		} catch (error) {
			setPickedMediaError(false);
			console.log(error);
		}
	}
	async function onPressUploadAadhar() {
		try {
			const files = await DocumentPicker.pickSingle({
				type: [types.doc, types.docx, types.pdf],
				presentationStyle: "fullScreen",
			});
			setPickedAadharError(false);
			setPickedAadhar(files);
		} catch (error) {
			setPickedAadharError(true);
			console.log(error);
		}
	}

	async function onPressContinue(): Promise<void> {
		if (pickedAadhar === undefined) setPickedAadharError(true);
		if (pickedMediaDocument === undefined) setPickedMediaError(true);
	}

	return (
		<View style={Styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={16}
				contentContainerStyle={Styles.scrollContainer}
			>
				<View style={Styles.coverContainer}>
					<Image
						source={require("../../../constants/image/Cover.png")}
						style={Styles.coverImage}
					/>
					<View style={Styles.profileContainer}>
						<View style={Styles.profileWrapper}>
							<UserProfile width={90} height={90} />
							<Text style={Styles.profileText}>80%</Text>
						</View>
					</View>
				</View>
				<View style={Styles.content}>
					<View style={Styles.profileDetails}>
						<Text style={Styles.profileName}>Raj Chauhan</Text>
						<View style={Styles.professionContainer}>
							<ProfessionIcon />
							<Text style={Styles.professionName}>
								Dermatologist
							</Text>
						</View>
						<View style={Styles.locationContainer}>
							<LocationIcon />
							<Text style={Styles.locationName}>
								Hyderabad, Telangana
							</Text>
						</View>
					</View>
					<View style={Styles.contentBody}>
						<TouchableOpacity
							activeOpacity={0.85}
							onPress={onPressEditProfile}
							style={Styles.editProfileButton}
						>
							<Text style={Styles.editProfileButtonText}>
								Edit Profile
							</Text>
						</TouchableOpacity>
						<View style={Styles.documentContainer}>
							<MoreOptions>
								<MoreOptions.OptionTabs
									activeOpacity={0.85}
									iconName="Document"
									optionName="My Document"
									onPress={() => setIsBottomSheetActive(true)}
								/>
							</MoreOptions>
						</View>
						<MoreOptions>
							<View style={Styles.optionTabContainer}>
								<MoreOptions.OptionTabs
									activeOpacity={0.85}
									iconName="Glob"
									optionName="Change Language"
									onPress={onPressChangeLanguage}
								/>
							</View>
							<View style={Styles.optionTabContainer}>
								<MoreOptions.OptionTabs
									iconName="Heart"
									optionName="Subscription"
								/>
							</View>
							<View style={Styles.optionTabContainer}>
								<MoreOptions.OptionTabs
									iconName="Dollar"
									optionName="Payment"
								/>
							</View>
							<View style={Styles.optionTabContainer}>
								<MoreOptions.OptionTabs
									activeOpacity={0.85}
									iconName="Bank"
									optionName="Add Bank"
									onPress={onPressAddBank}
								/>
							</View>
							<View style={Styles.optionTabContainer}>
								<MoreOptions.OptionTabs
									activeOpacity={0.85}
									iconName="Refer"
									optionName="Refer Friend"
									onPress={onPressReferFriend}
								/>
							</View>
						</MoreOptions>
					</View>
				</View>
			</ScrollView>
			<BottomActionSheet
				snapPoints={snapPoints}
				isActive={isBottomSheetActive}
				setIsActive={setIsBottomSheetActive}
			>
				<BottomSheetView style={Styles.bottomSheetContainer}>
					<View style={Styles.bottomSheetBody}>
						<Text style={Styles.bottomSheetHeader}>
							My Document
						</Text>
						<Text style={Styles.bottomSheetText}>
							Make sure to include and updated document*
						</Text>
						<View style={Styles.bottomSheetButtonsContainer}>
							<TouchableOpacity
								activeOpacity={0.85}
								onPress={onPressUploadDocument}
								style={[
									Styles.bottomSheetButton,
									{ width: "48%" },
									pickedMediaDocument !== undefined
										? { borderColor: AppStyles.colorGreen1 }
										: pickedMediaError
										? {
												borderColor:
													"rgba(255, 108, 81, 0.8)",
										  }
										: {
												borderColor:
													"rgba(46, 46, 46, 0.3)",
										  },
								]}
							>
								{pickedMediaDocument && <CorrectGreenIcon />}
								<Text
									numberOfLines={1}
									ellipsizeMode="tail"
									style={[
										Styles.bottomSheetButtonText,
										pickedMediaDocument !== undefined
											? { color: AppStyles.colorGreen1 }
											: pickedMediaError
											? {
													color: "rgba(255, 108, 81, 0.8)",
											  }
											: { color: AppStyles.colorGrey2 },
									]}
								>
									{pickedMediaDocument !== undefined
										? `${pickedMediaDocument.name}`
										: "Upload Medical Document"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.85}
								onPress={onPressUploadAadhar}
								style={[
									Styles.bottomSheetButton,
									{ width: "48%" },
									pickedAadhar !== undefined
										? { borderColor: AppStyles.colorGreen1 }
										: pickedAadharError
										? {
												borderColor:
													"rgba(255, 108, 81, 0.8)",
										  }
										: {
												borderColor:
													"rgba(46, 46, 46, 0.3)",
										  },
								]}
							>
								{pickedAadhar && <CorrectGreenIcon />}
								<Text
									numberOfLines={1}
									ellipsizeMode="tail"
									style={[
										Styles.bottomSheetButtonText,
										pickedAadhar !== undefined
											? { color: AppStyles.colorGreen1 }
											: pickedAadharError
											? {
													color: "rgba(255, 108, 81, 0.8)",
											  }
											: { color: AppStyles.colorGrey2 },
									]}
								>
									{pickedAadhar !== undefined
										? `${pickedAadhar.name}`
										: "Upload Aadhar Card"}
								</Text>
							</TouchableOpacity>
						</View>
						<Text style={Styles.bottomSheetDocText}>
							{"Your file must be DOC, DOCX and PDF (1.9 MB)"}
						</Text>
					</View>
					<PrimaryButton
						activeOpacity={0.85}
						onPress={onPressContinue}
						backgroundColor={AppStyles.colorBrand1}
					>
						Continue with this
					</PrimaryButton>
				</BottomSheetView>
			</BottomActionSheet>
		</View>
	);
}
