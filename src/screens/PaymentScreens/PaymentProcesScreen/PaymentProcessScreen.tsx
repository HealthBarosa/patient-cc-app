import AppStyles from "@/AppStyles";
import { TrackStatus } from "@/components";
import NavHeader from "@/components/common/NavHeader";
import { Tag } from "@/components/common/Tag";
import { PaymentSuccessIconSVG } from "@/constants/svg/PaymentAndBill";
import React, { useState } from "react";
import { Dimensions, Modal, Pressable, Text, View } from "react-native";
import Styles from "./Styles";

const data = {
	name: "Ram Ratan",
	age: 25,
	gender: "male",
	district: "Kathmandu",
};

const PaymentProcessScreen = () => {
	const [paymentSuccessful, setPaymentSuccessful] = useState<boolean>(false);

	return (
		<>
			<NavHeader headerName="Payment" />
			<Modal
				visible={paymentSuccessful}
				animationType="fade"
				transparent={true}
			>
				<View style={Styles.modalContainer}>
					<View style={Styles.modalView}>
						<PaymentSuccessIconSVG
							style={Styles.paymentSuccessIcon}
						/>
						{/* <View style={Styles.contentContainer}>

						</View> */}
						<Text style={[Styles.headingText, Styles.textCenter, {marginTop: 20}]}>
							Payment Received
						</Text>
						<Text style={[Styles.modalSubText, Styles.textCenter]}>
							Your payment is received now track your patient
							status
						</Text>
						<Pressable onPress={() => setPaymentSuccessful(false)}>
							<Text
								style={[
									Styles.headingText,
									Styles.textCenter,
									{ color: AppStyles.colorBrand1, marginTop: 10 },
								]}
							>
								Yes, Sure
							</Text>
						</Pressable>
					</View>
				</View>
			</Modal>

			<View style={Styles.container}>
				<Text style={Styles.headingText}>Check Patient Details</Text>
				<View style={Styles.topContainer}>
					<View>
						<Text style={Styles.normalText}>{data.name}</Text>
						<Text style={Styles.normalText}>Age : {data.age}</Text>
						<Text style={Styles.normalText}>
							Gender : {data.gender}
						</Text>
						<Text style={Styles.normalText}>
							District : {data.district}
						</Text>
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
