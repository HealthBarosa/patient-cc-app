/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable no-extra-semi */
import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Modal, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { PrimaryButton, ScreenHeader } from "@/components";
import { SearchContainer } from "@/containers";

import Styles from "./Styles";
import AppStyles from "../../../AppStyles";

import AxisBankIcon from "../../../constants/svg/icons/AxisBankIcon.svg";
import BobIcon from "../../../constants/svg/icons/BOBIcon.svg";
import BoiIcon from "../../../constants/svg/icons/BOIIcon.svg";
import CbiIcon from "../../../constants/svg/icons/CBIIcon.svg";
import HDFCIcon from "../../../constants/svg/icons/HDFCIcon.svg";
import ICICIIcon from "../../../constants/svg/icons/ICICIBankIcon.svg";
import KotakIcon from "../../../constants/svg/icons/KotakIcon.svg";
import SbiIcon from "../../../constants/svg/icons/SBIIcon.svg";

const banks = [
	{ id: 1, name: "Axis Bank", icon: <AxisBankIcon /> },
	{ id: 2, name: "BOB Bank", icon: <BobIcon /> },
	{ id: 3, name: "ICICI Bank", icon: <ICICIIcon /> },
	{ id: 4, name: "SBI Bank", icon: <SbiIcon /> },
	{ id: 5, name: "BOI Bank", icon: <BoiIcon /> },
	{ id: 6, name: "HDFC Bank", icon: <HDFCIcon /> },
	{ id: 7, name: "CBI Bank", icon: <CbiIcon /> },
	{ id: 8, name: "Kotak Bank", icon: <KotakIcon /> },
];

export default function AddBackScreen(): JSX.Element {
	const navigation = useNavigation()
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

	function onPressGoBack() { navigation.goBack() }
	function onPressBank() { setIsModalVisible(true) }

	return (
		<View style={Styles.container}>
			<StatusBar
				barStyle={"light-content"}
				translucent
				backgroundColor={"transparent"}
			/>
			{isModalVisible && (
				<View style={Styles.modalContainer} >
					<Pressable style={Styles.mask} onPress={() => setIsModalVisible(false)} />
					<View style={Styles.modal} >
						<Text style={Styles.headerText} >Select your bank account</Text>
						<View>
							<Text style={Styles.bankName} >Axis Bank</Text>
							<Text style={Styles.subHeaderText} >Account Name: Riya Bajaj</Text>
							<Text style={Styles.subHeaderText} >Account No.: 0123456789</Text>
						</View>
						<PrimaryButton onPress={() => setIsModalVisible(false)} backgroundColor={AppStyles.colorBrand1}>
							Add Bank Account
						</PrimaryButton>
					</View>
				</View>
			)}	
			<ScreenHeader
				screenName="Add Bank Account"
				onPress={onPressGoBack}
			/>
			<View style={Styles.wrapper}>
				<Text style={Styles.headerText}>Add Bank Account</Text>
				<Text style={Styles.subHeaderText}>
					{"Account Should be registered with mobile\nNo. 0975462144"}
				</Text>
				<View style={Styles.searchbarContainer}>
					<SearchContainer
						containerStyle={{
							paddingVertical: 2,
							borderRadius: 20,
							borderWidth: 1,
							borderColor: "rgba(46, 46, 46, 0.3)",
							backgroundColor: AppStyles.colorGreyLight3,
						}}
						iconWidth={20}
						iconHeight={20}
						placeholder="Search other banks..."
						value=""
						onChangeValue={() => {}}
						iconContainerStyle={{ width: "12%" }}
						inputContainerStyle={{ width: "85%" }}
						inputStyle={{
							fontFamily: AppStyles.fontPoppinsMedium,
							fontSize: 14,
						}}
					/>
				</View>
				<View style={Styles.bankOptionContainer}>
					{banks.map((item, i) => (
						<TouchableOpacity
							activeOpacity={0.85}
							key={i.toString()}
							onPress={onPressBank}
							style={Styles.optionContainer}
						>
							<View style={Styles.iconContainer}>
								{item.icon}
							</View>
							<Text style={Styles.iconText}>{item.name}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
		</View>
	);
}
