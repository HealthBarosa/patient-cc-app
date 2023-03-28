import AppStyles from "@/AppStyles";
import { TrackStatus } from "@/components";
import NavHeader from "@/components/common/NavHeader";
import { Tag } from "@/components/common/Tag";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import Styles from "./Styles";

const data = {
	name: "Ram Ratan",
	age: 25,
	gender: "male",
	district: "Kathmandu",
}

const PaymentProcessScreen = () => {
	return (
		<>
			<NavHeader headerName="Payment" />
			<View style={Styles.container}>
				<Text style={Styles.headingText}>Check Patient Details</Text>
				<View style={Styles.topContainer}>
					<View>
						<Text style={Styles.normalText}>{data.name}</Text>
						<Text style={Styles.normalText}>Age : {data.age}</Text>
						<Text style={Styles.normalText}>Gender : {data.gender}</Text>
						<Text style={Styles.normalText}>District : {data.district}</Text>
					</View>
					<View style={{ rowGap: 20 }}>
						<Tag
							colorBG={AppStyles.colorBlue}
							colorText={AppStyles.colorDark1}
						>
							Regular Case
						</Tag>
						<Tag
							colorBG={AppStyles.colorBlue}
							colorText={AppStyles.colorDark1}
						>
							Surgery
						</Tag>
					</View>
				</View>
				<View style={Styles.bottomTagContainer}>
					<Tag
						colorBG={AppStyles.colorVioletLight1}
						colorText={AppStyles.colorDark1}
					>
						AyushmanBharat Scheme
					</Tag>
					<Tag
						colorBG={AppStyles.colorVioletLight1}
						colorText={AppStyles.colorDark1}
					>
						Have EHS
					</Tag>
				</View>

				<Text style={Styles.headingTextBottom}>Track Your Status</Text>
				<TrackStatus status="completed">Patient Admitted</TrackStatus>
				<View style={Styles.bottomBorder} />
				<TrackStatus status="ongoing">Treatment Ongoing</TrackStatus>
				<View style={Styles.bottomBorder} />
				<TrackStatus status="pending">Payment Received</TrackStatus>
				<View style={Styles.bottomBorder} />
			</View>
		</>
	);
};

export default PaymentProcessScreen;
