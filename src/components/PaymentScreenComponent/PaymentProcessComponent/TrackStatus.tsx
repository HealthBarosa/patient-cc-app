import { TickcircleSVG } from "@/constants/svg/PaymentAndBill";
import React from "react";
import { Text, View } from "react-native";
import Styles from "./Styles";

type IStatus = "completed" | "ongoing" | "pending";

interface TrackStatusProps {
	children: React.ReactNode;
	/**
	 * @description status of the track
	 * @type "completed" | "ongoing" | "pending"
	 */
	status: IStatus;
}

const TrackStatus = ({ children, status }: TrackStatusProps) => {
	const handleTextColorOnStatus = (status: IStatus) => {
		switch (status) {
			case "completed":
				return Styles.completedText;
			case "ongoing":
				return Styles.ongoingText;
			case "pending":
				return Styles.pendingText;
		}
	};

	return (
		<View style={Styles.container}>
			{/*
			 * @description if status is pending then show unchecked circle
			 */}
			{status === "pending" && <View style={Styles.uncheckedCircle} />}
			{/*
			 * @description if status is success then show checked circle
			 */}
			{status === "completed" && <TickcircleSVG />}
			{/*
			 * @description if status is ongoing then show unchecked circle
			 */}
			{status === "ongoing" && (
				<View style={Styles.ongoingCircle}>
					<View style={Styles.ongoingCircleInner} />
				</View>
			)}
			<Text style={[handleTextColorOnStatus(status), Styles.textStyle]}>
				{children}
			</Text>
		</View>
	);
};

export default TrackStatus;
