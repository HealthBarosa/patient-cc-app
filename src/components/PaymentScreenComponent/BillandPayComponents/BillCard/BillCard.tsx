import React from 'react';
import {Text, View} from 'react-native';
import {DoctorHapySVG} from '../../../../constants/svg/PaymentAndBill';
import Styles from './Styles';

interface BillCardProps {
	ammount?: number;
	lastPaid?: string;
	headingText: string;
	isPaymentDue?: boolean;
	paymentDueAmmount?: number;
	promoText?: string;
	dueOnDate?: string;
	payBeforeDate?: string;
}

const BillCard = ({
	ammount,
	lastPaid,
	headingText,
	isPaymentDue,
	paymentDueAmmount,
	promoText,
	dueOnDate,
	payBeforeDate,
}: BillCardProps) => {
	return (
		<View style={Styles.container}>
			<View style={Styles.innerContainer}>
				<Text style={Styles.headingText}>{headingText}</Text>
				{/* <Text style={Styles.subHeadingText}>never miss a due date</Text> */}
				{isPaymentDue ? (
					<Text style={Styles.dueText}>₹{paymentDueAmmount}</Text>
				) : (
					<Text style={Styles.subHeadingText}>{promoText}</Text>
				)}

				<View style={Styles.imageContainer}>
					<DoctorHapySVG />
				</View>
			</View>

			{isPaymentDue ? (
				<View style={Styles.ammountContainer}>
					<Text style={Styles.ammountText}>
						Please pay before {payBeforeDate}
					</Text>
					<Text style={Styles.lastpaidText}>Due on {dueOnDate}</Text>
				</View>
			) : (
				<View style={Styles.ammountContainer}>
					<Text style={Styles.ammountText}>Amount: ₹{ammount}</Text>
					<Text style={Styles.lastpaidText}>paid on {lastPaid}</Text>
				</View>
			)}
		</View>
	);
};

export default BillCard;
