import NavHeader from "@/components/common/NavHeader";
import React from "react";
import {
	Button,
	Linking,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from "react-native";
import Style from "./Style";
import AppStyles from "@/AppStyles";
import { PrimaryButton } from "@/components";

const TermsOfService = ({ navigation }) => {
	const emailPress = () => {
		Linking.openURL("mailto:support@healthbarosa.com");
	};

	const phonePress = () => {
		Linking.openURL("tel:+919608696086");
	};

	return (
		<SafeAreaView>
			<NavHeader
				navigation={navigation}
				headerName="Terms & Conditions"
			/>
			<ScrollView style={Style.container}>
				<Text style={Style.mainText}>
					Welcome to the PatientCC app! These terms and conditions
					govern your use of the PatientCC app, which is designed to
					enable healthcare professionals to refer patients to
					specialty and corporate hospitals for quality care. By using
					the PatientCC app, you agree to these terms and conditions
					in full. If you do not agree to these terms and conditions,
					you must not use the PatientCC app.
				</Text>
				<Text style={Style.headingText}>
					{"\n"}2. Access and Use {"\n"}
				</Text>
				<Text style={Style.mainText}>
					2.1. To access the PatientCC app, you must create an account
					and provide accurate and complete information.{"\n \n"} 2.2.
					You must not share your login credentials with any third
					party or use the app for any illegal or unauthorized
					purpose. The PatientCC app may be updated, modified or
					discontinued at any time, without notice.{"\n \n"} 2.4.
					PatientCC does not provide any medical advice or diagnosis,
					and the app is not a substitute for professional medical
					care. The app is designed to enable healthcare professionals
					to refer their patients to specialty and corporate hospitals
					for quality care.
				</Text>
				<Text style={Style.headingText}>
					{"\n"}3. Referral Services{"\n"}
				</Text>
				<Text style={Style.mainText}>
					3.1. PatientCC enables healthcare professionals to refer
					their patients to specialty and corporate hospitals for
					quality care. {"\n \n"} 3.2. PatientCC will collect the
					referral fee from the hospital or medical facility on behalf
					of the referring healthcare professional, unless otherwise
					agreed upon. {"\n \n"} 3.3. The hospital or medical facility
					is responsible for paying the referral fee to PatientCC
					within 24 hours after the patient is discharged from the
					hospital or medical facility. Failure to pay the referral
					fee may result in legal consequences, including limited
					collection efforts and termination of referral services.{" "}
					{"\n \n"} 3.4. Failure to pay the referral fee may result in
					legal consequences, including but not limited to collection
					efforts and termination of referral services. care.
				</Text>
				<Text style={Style.headingText}>
					{"\n"}4. Intellectual Property{"\n"}
				</Text>
				<Text style={Style.mainText}>
					4.1. All content, trademarks, logos and intellectual
					property rights on the PatientCC app are owned by PatientCC.
					{"\n\n"}
					4.2. You must not copy, modify, distribute or use any
					content from the PatientCC app without prior written consent
					from PatientCC.{"\n\n"}
				</Text>
				<Text style={Style.headingText}>
					{"\n"}5. Limitation of Liability{"\n"}
				</Text>
				<Text style={Style.mainText}>
					5.1. PatientCC is not responsible for any loss or damage
					arising from your use of the app, including any loss of
					data, profits or revenue.{"\n\n"} 5.2. PatientCC is not
					liable for any harm or injury caused by any hospital or
					healthcare provider, including but not limited to medical
					malpractice or negligence.
				</Text>
				<Text style={Style.headingText}>
					{"\n"}6. Data Protection{"\n"}
				</Text>
				<Text style={Style.mainText}>
					6.1. PatientCC is committed to protecting the privacy and
					confidentiality of user data in accordance with the
					Information Technology (Reasonable Security Practices and
					Procedures and Sensitive Personal Data or Information)
					Rules, 2011.{"\n\n"} 6.2. PatientCC collects and uses
					personal information in accordance with its Privacy Policy,
					which can be accessed at [ADD APP LINK]. {"\n\n"} 6.3.
					PatientCC may use cookies to personalize your experience on
					the app and track your usage. By using the app, you consent
					to the use of cookies.
				</Text>
				<Text style={Style.headingText}>
					{"\n"}7. Termination{"\n"}
				</Text>
				<Text style={Style.mainText}>
					7.1. PatientCC may terminate your access to the app at any
					time, without notice or liability.{"\n\n"} 7.2. You may
					terminate your account at any time by contacting PatientCC
					customer support.
				</Text>
				<Text style={Style.headingText}>
					{"\n"}8. Governing Law and Jurisdiction{"\n"}
				</Text>
				<Text style={Style.mainText}>
					8.1. These terms and conditions are governed by and
					construed in accordance with the laws of India. {"\n\n"}{" "}
					8.2. Any disputes arising from these terms and conditions
					shall be subject to the exclusive jurisdiction of the courts
					of India.
				</Text>
				<Text style={Style.headingText}>
					{"\n"}9. Contact Information If you have any questions,
					comments, or concerns about these Terms and Conditions or
					the PatientCC app, please contact us at:{"\n"}
				</Text>
				<View style={Style.btnContainer}>
					{/* <Button
						color={AppStyles.colorBrand1}
						title="Email Us"
						onPress={emailPress}
					/> */}
					<PrimaryButton
						onPress={emailPress}
						backgroundColor={AppStyles.colorBrand1}
					>
						Email Us
					</PrimaryButton>
					<PrimaryButton
						onPress={phonePress}
						backgroundColor={AppStyles.colorBrand1}
					>
						Call Us
					</PrimaryButton>
					{/* <Button
						color={AppStyles.colorBrand1}
						title="Call Us"
						onPress={phonePress}
					/> */}
				</View>

				<Text style={Style.mainText}>
					We will do our best to address any inquiries or issues in a
					timely and professional manner.
				</Text>
			</ScrollView>
		</SafeAreaView>
	);
};

export default TermsOfService;
