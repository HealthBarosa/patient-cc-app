import React, {useEffect, useState} from 'react';
import {
	Pressable,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Styles from './Styles';
import LeftIconSVG from '../../../constants/svg/LeftIcon.svg';
import {OTPBox} from '../../../components/OTPScreenComponents';
import {PrimaryButton} from '../../../components';
import AppStyles from '../../../AppStyles';

interface OTPTimmerProps {
	OTPTime: number;
	setOTPTime: (OTPTime: number) => void;
}

const OTPTimer = ({OTPTime, setOTPTime}: OTPTimmerProps) => {
	useEffect(() => {
		const interval = setInterval(() => {
			OTPTime !== 0 && setOTPTime(OTPTime - 1);
		}, 1000);
		return () => clearInterval(interval);
	});

	return (
		<Text style={Styles.resendCodeText}>
			Resend code in{' '}
			<Text style={Styles.resendOTPButtonText}>{OTPTime}</Text> Seconds
		</Text>
	);
};

/**
 * This is a OTP Not Recived component which is used to render a button to resend the OTP
 */
const OTPNotRecived = () => {
	return (
		<View style={Styles.resendOTPButtonContainer}>
			<TouchableOpacity
				activeOpacity={0.85}
				style={Styles.resendOTPButton}
			>
				<Text style={Styles.resendOTPButtonText}>
					I didnt receive a code
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const OTPScreen = ({navigation}) => {
	const [OTPTime, setOTPTime] = useState(43);

	const handleBackPress = () => {
		navigation.goBack();
	};

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		OTPTime !== 0 && setOTPTime(OTPTime - 1);
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	// }, [OTPTime]);

	return (
		<SafeAreaView style={Styles.container}>
			<Pressable
				onPress={() => handleBackPress()}
				hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
			>
				<LeftIconSVG />
			</Pressable>

			<View>
				<Text style={Styles.headerText}>OTP Authentication</Text>
				<Text style={Styles.subHeaderText}>
					An authentication code has been sent to
				</Text>
				<Text style={Styles.phoneNumberText}>(+91) 812 345 6XXX</Text>
			</View>

			<View>
				<OTPBox />
			</View>

			<View>
				{OTPTime === 0 ? (
					<OTPNotRecived />
				) : (
					<OTPTimer OTPTime={OTPTime} setOTPTime={setOTPTime} />
				)}
			</View>

			<View style={{marginTop: 180}}>
				<PrimaryButton
					onPress={() => {}}
					backgroundColor={AppStyles.colorBrand1}
				>
					Continue
				</PrimaryButton>
			</View>
		</SafeAreaView>
	);
};

export default OTPScreen;
