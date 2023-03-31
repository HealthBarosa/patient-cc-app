import React, { useMemo, useState,  } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import DocumentPicker, { DocumentPickerResponse, DirectoryPickerResponse, isInProgress, types, isCancel } from "react-native-document-picker";

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
	const navigation = useNavigation()
	const [isBottomSheetActive, setIsBottomSheetActive] = useState<boolean>(false)
	const [pickedMediaDocument, setPickedMediaDocument] = useState<DocumentPickerResponse | DirectoryPickerResponse | undefined | null>()
	const [pickedAadhar, setPickedAadhar] = useState<DocumentPickerResponse | DirectoryPickerResponse | undefined | null>()
	
	function onPressEditProfile() { navigation.navigate(NavigationTree.app.EditProfile as never) }
	function onPressChangeLanguage() { navigation.navigate(NavigationTree.app.ChangeLanguage as never) }
	function onPressAddBank() { navigation.navigate(NavigationTree.app.AddBankScreen as never) }
	function onPressReferFriend() { navigation.navigate(NavigationTree.app.ReferFriendScreen as never) }
	
	const snapPoints = useMemo(() => ["45%",], [])

	async function onPressUploadDocument() {
		try {
			const files = await DocumentPicker.pickSingle({
				type: [types.doc, types.docx, types.pdf],
				presentationStyle: 'fullScreen',
			})
			console.log(files)
			setPickedMediaDocument(files)
		} catch (error) {
			console.log(error)
		}
	}
	async function onPressUploadAadhar() {
		try {
			const files = await DocumentPicker.pickSingle({
				type: [types.doc, types.docx, types.pdf],
				presentationStyle: 'fullScreen',
			})
			console.log(files)
			setPickedAadhar(files)
		} catch (error) {
			console.log(error)
		}
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
			<BottomActionSheet snapPoints={snapPoints} isActive={isBottomSheetActive} setIsActive={setIsBottomSheetActive} >
				<BottomSheetView style={Styles.bottomSheetContainer} >
					<View style={Styles.bottomSheetBody} >
						<Text style={Styles.bottomSheetHeader} >My Document</Text>
						<Text style={Styles.bottomSheetText} >Make sure to include and updated document*</Text>
						<View style={Styles.bottomSheetButtonsContainer} >
							<TouchableOpacity activeOpacity={0.85} onPress={onPressUploadDocument} style={Styles.bottomSheetButton} >
								<Text style={Styles.bottomSheetButtonText} >Upload Medical Document</Text>
							</TouchableOpacity>
							<TouchableOpacity activeOpacity={0.85} onPress={onPressUploadAadhar} style={Styles.bottomSheetButton} >
								<Text style={Styles.bottomSheetButtonText} >Upload Aadhar Card</Text>
							</TouchableOpacity>
						</View>
						<Text style={Styles.bottomSheetDocText} >{"Your file must be DOC, DOCX and PDF (1.9 MB)"}</Text>
					</View>
					<PrimaryButton onPress={() => {}} backgroundColor={AppStyles.colorBrand1} >Continue with this</PrimaryButton>
				</BottomSheetView>
			</BottomActionSheet>
		</View>
	);
}
