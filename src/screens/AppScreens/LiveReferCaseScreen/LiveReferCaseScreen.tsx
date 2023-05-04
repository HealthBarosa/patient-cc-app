import React, { useState } from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ScreenHeader } from "@/components";
import { LiveReferCaseCard } from "@/containers";

import Styles from "./Styles";

const liveCasesArray = [
	{
		id: 1,
		hospitalImage: require("@/constants/image/Hospital.png"),
		patientName: "Patient 1",
		location: "123 Woodstone, Tamilnadu, 620432",
		caseType: ["Surgery", "Regular Case"],
	},
	{
		id: 2,
		hospitalImage: require("@/constants/image/Hospital.png"),
		patientName: "Patient 1",
		location: "123 Woodstone, Tamilnadu, 620432",
		caseType: ["Surgery", "Regular Case"],
	},
	{
		id: 3,
		hospitalImage: require("@/constants/image/Hospital.png"),
		patientName: "Patient 1",
		location: "123 Woodstone, Tamilnadu, 620432",
		caseType: ["Surgery", "Regular Case"],
	},
	{
		id: 4,
		hospitalImage: require("@/constants/image/Hospital.png"),
		patientName: "Patient 1",
		location: "123 Woodstone, Tamilnadu, 620432",
		caseType: ["Surgery", "Regular Case"],
	},
	{
		id: 5,
		hospitalImage: require("@/constants/image/Hospital.png"),
		patientName: "Patient 1",
		location: "123 Woodstone, Tamilnadu, 620432",
		caseType: ["Surgery", "Regular Case"],
	},
	{
		id: 6,
		hospitalImage: require("@/constants/image/Hospital.png"),
		patientName: "Patient 1",
		location: "123 Woodstone, Tamilnadu, 620432",
		caseType: ["Surgery", "Regular Case"],
	},
];

export default function LiveReferCaseScreen(): JSX.Element {
	const navigation = useNavigation();

	function onPressGoBack() {
		navigation.goBack();
	}

	return (
		<View style={Styles.container}>
			{/* status bar */}
			<StatusBar
				barStyle={"light-content"}
				translucent
				backgroundColor={"transparent"}
			/>

			{/* header */}
			<ScreenHeader
				screenName="Live Referred Case"
				onPress={onPressGoBack}
			/>

			{/* body */}
			<View style={Styles.wrapper}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={Styles.scroll}
					contentContainerStyle={Styles.scrollContainer}
				>
					{/* body header */}
					<View style={Styles.header}>
						<Text style={Styles.headerText}>
							Ongoing Live Refer Cases
						</Text>
						<Text style={Styles.headerBodyText}>
							{`Total Live: ${liveCasesArray.length}`}
						</Text>
						<Text style={Styles.headerText}>
							Live Referred Cases
						</Text>
					</View>

					{/* live referred case cards */}
					{liveCasesArray.map((item) => (
						<LiveReferCaseCard
							key={item.id}
							id={item.id}
							hospitalImage={item.hospitalImage}
							patientName={item.patientName}
							caseType={item.caseType}
							location={item.location}
							onPress={() => {}}
						/>
					))}
				</ScrollView>
			</View>
		</View>
	);
}
