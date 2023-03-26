import React from "react";
import { Text, View } from "react-native";
import Styles from "./Styles";

interface ReciptPartProps {
	headingText: string;
	patientName: string;
	rmpName: string;
	transactionId: string;
	transactionDate: string;
	ammount: string;
}

const ReciptPart = ({
	headingText,
	patientName,
	rmpName,
	transactionId,
	transactionDate,
	ammount,
}: ReciptPartProps) => {
	return (
		<View style={Styles.container}>
			<Text style={Styles.headtingText}>{headingText}</Text>
			<View style={Styles.sectionContainer}>
				<Text style={Styles.sectionHeadingText}>Patient Name</Text>
				<Text style={Styles.sectionDetailsText}>{patientName}</Text>
			</View>
			<View style={Styles.sectionContainer}>
				<Text style={Styles.sectionHeadingText}>RMP Name</Text>
				<Text style={Styles.sectionDetailsText}>{rmpName}</Text>
			</View>
			<View style={Styles.sectionContainer}>
				<Text style={Styles.sectionHeadingText}>Transaction Id</Text>
				<Text style={Styles.sectionDetailsText}>{transactionId}</Text>
			</View>
			<View style={Styles.sectionContainer}>
				<Text style={Styles.sectionHeadingText}>Transaction Date</Text>
				<Text style={Styles.sectionDetailsText}>{transactionDate}</Text>
			</View>
			<View style={Styles.sectionContainer}>
				<Text style={Styles.ammountText}>Amount</Text>
				<Text style={Styles.ammountText}>₹ {ammount}</Text>
			</View>
		</View>
	);
};

export default ReciptPart;
