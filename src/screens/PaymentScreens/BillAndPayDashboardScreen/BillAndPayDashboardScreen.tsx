import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import AppStyles from '../../../AppStyles';
import {PrimaryButton} from '../../../components';
import BillCard from '../../../components/BillandPayComponents/BillCard/BillCard';
import MoreOptions from '../../../components/common/MoreOptions/MoreOptions';
import NavHeader from '../../../components/common/NavHeader';
import Styles from './Styles';

interface BillAndPayDashboardScreenProps {
	isPaymentDue?: boolean;
}

/**
 * @param {boolean} isPaymentDue - if payment is due or not
 */
const BillAndPayDashboardScreen = ({
	isPaymentDue,
}: BillAndPayDashboardScreenProps) => {
	return (
		<SafeAreaView>
			<NavHeader headerName={'Bills & Payment'} />
			<View style={Styles.billCardContainer}>
				{isPaymentDue ? (
					<BillCard
						headingText={'You have remaining amount of'}
						payBeforeDate={'12th March 2023'}
						paymentDueAmmount={799}
						isPaymentDue
						dueOnDate={'13th March, 2023'}
					/>
				) : (
					<BillCard
						headingText={'Yay! bill is paid'}
						ammount={799}
						lastPaid={'13th March, 2023'}
						promoText={'never miss a due date'}
					/>
				)}
			</View>
			<View style={Styles.billOptionSectionContainer}>
				<Text style={Styles.heading2Text}>More with bills</Text>
				<MoreOptions>
					<MoreOptions.OptionTabs
						iconName={'StickyNote'}
						optionName={'Previous Bills'}
					/>
					<MoreOptions.OptionTabs
						iconName={'Heart'}
						optionName={'Auto-pay'}
					/>
					<MoreOptions.OptionTabs
						iconName={'Dollar'}
						optionName={'Payment Settings'}
					/>
					<MoreOptions.OptionTabs
						iconName={'Chart'}
						optionName={'FAQ/ Support'}
					/>
				</MoreOptions>
			</View>

			{isPaymentDue && (
				<View style={Styles.buttonContainer}>
					<PrimaryButton backgroundColor={AppStyles.colorBrand1}>
						Proceed to pay
					</PrimaryButton>
				</View>
			)}
		</SafeAreaView>
	);
};

export default BillAndPayDashboardScreen;
