import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import NavHeader from '@/components/common/NavHeader';
import {SubscriptionCard} from '@/components/SubscriptionComponents';
import {CheckIconSVG} from '@/constants/svg/Subscription';

import Styles from './Styles';

interface SubscriptionScreenProps {
	isPrime?: boolean;
}

const SubscriptionScreen = ({isPrime}: SubscriptionScreenProps) => {
	return (
		<SafeAreaView>
			<NavHeader headerName={'Subscription'} />
			<View style={Styles.container}>
				<SubscriptionCard isPrime={isPrime} />
				<View style={Styles.subPlanContainer}>
					<View style={Styles.planContainer1}>
						{isPrime && (
							<Text style={Styles.subPlanText}>
								Your Premium Plan
							</Text>
						)}

						<View style={Styles.planBox}>
							<Text style={Styles.planText}>Individual Plan</Text>
						</View>
					</View>
					<View style={Styles.planPriceTextContainer}>
						<Text style={Styles.planPriceText}>₹2500/ year</Text>
					</View>
					<View style={Styles.primeContainer}>
						<View style={Styles.primeTextContainer}>
							<CheckIconSVG />
							<Text style={Styles.primePromoText}>
								Auction for Unlimited Hospitals
							</Text>
						</View>
						<View style={Styles.primeTextContainer}>
							<CheckIconSVG />
							<Text style={Styles.primePromoText}>
								Get 24/7 assistance
							</Text>
						</View>
						<View style={Styles.primeTextContainer}>
							<CheckIconSVG />
							<Text style={Styles.primePromoText}>
								More Feature
								<View style={Styles.commingSoonContainer}>
									<Text style={Styles.commingSoonText}>
										Coming Soon
									</Text>
								</View>
							</Text>
						</View>
					</View>
					{isPrime && (
						<Text style={Styles.planRenewDateText}>
							Your Premium Plan renews on 23/04/2024
						</Text>
					)}
					{isPrime ? (
						<TouchableOpacity
							style={Styles.cancelSubscriptionButton}
						>
							<Text style={Styles.cancelSubscriptionText}>
								Cancel your Premium
							</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							activeOpacity={0.85}
							style={Styles.getPrimeButton}
						>
							<Text style={Styles.getPrimeBtnText}>
								Subscribe for Premium
							</Text>
						</TouchableOpacity>
					)}
				</View>
			</View>
		</SafeAreaView>
	);
};

export default SubscriptionScreen;
