import React from 'react';
import {Text, View} from 'react-native';
import {DoctorHapySVG} from '../../../constants/svg/PaymentAndBill';
import {StarPrimeSVG} from '../../../constants/svg/Subscription';
import Styles from './Styles';

interface SubscriptionCardProps {
	isPrime?: boolean;
}

const SubscriptionCard = ({isPrime}: SubscriptionCardProps) => {
	return (
		<View style={Styles.innerContainer}>
			<Text style={Styles.headingText}>{'Subscription'}</Text>

			<Text style={Styles.subHeadingText}>
				{'You have subscribed for premium Membership'}
			</Text>

			{isPrime && (
				<View style={Styles.premiumMemberCard}>
					<StarPrimeSVG />
					<Text style={Styles.premiumMemberText}>Premium Member</Text>
				</View>
			)}

			<View style={Styles.imageContainer}>
				<DoctorHapySVG />
			</View>
		</View>
	);
};

export default SubscriptionCard;
