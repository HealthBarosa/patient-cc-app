import React, {useState} from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';

import {ReferralOption, PrimaryButton} from '../../../components';

import BannerSVG from '../../../constants/svg/Banner.svg';
import UserIconSVG from '../../../constants/svg/UserIcon.svg';

import AppStyles from '../../../AppStyles';
import Styles from './Styles';

export default function ReferralScreen(): JSX.Element {
	const [selectedReferralOption, setSelectedReferralOption] = useState<
		'refer' | 'refer & treat'
	>();

	return (
		<View style={Styles.container}>
			<View style={Styles.imageWrapper}>
				<BannerSVG
					width={Dimensions.get('window').width}
					height={Dimensions.get('window').height * 0.45}
				/>
			</View>
			<View style={Styles.contentWrapper}>
				<View style={Styles.headerTextContainer}>
					<Text style={Styles.headerText}>
						Hey, Glad to have you here
					</Text>
					<Text style={Styles.headerText}>
						Let us know more about you
					</Text>
				</View>
				<View style={Styles.inputContainer}>
					<UserIconSVG style={Styles.inputIcon} />
					<TextInput
						placeholder="Enter your name"
						style={Styles.input}
					/>
				</View>
				<View style={Styles.referralContentWrapper}>
					<ReferralOption
						text="Want to Refer"
						isActive={selectedReferralOption === 'refer'}
						onPress={() => setSelectedReferralOption('refer')}
					/>
					<ReferralOption
						text="Want to Refer & Treat"
						isActive={selectedReferralOption === 'refer & treat'}
						onPress={() =>
							setSelectedReferralOption('refer & treat')
						}
					/>
					<Text style={Styles.referralContentText}>
						{
							'By choosing refer or treat option you can\naccess the service you want '
						}
					</Text>
				</View>
				<PrimaryButton
					text="Continue"
					backgroundColor={AppStyles.colorBrand1}
					onPress={() => {}}
				/>
			</View>
		</View>
	);
}
