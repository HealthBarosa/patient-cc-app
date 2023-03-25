/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View, StyleProp, ViewStyle} from 'react-native';
import {
	ChartSuccessIconSVG,
	DocumentIconSVG,
	DollarIconSVG,
	GlobIconSVG,
	HeartIconSVG,
	NextPageIconSVG,
	StickyNoteIconSVG,
	BankSVG,
	ReferSVG,
} from '../../../constants/svg/common';
import Styles from './Styles';

interface MoreOptionsProps {
	children?: React.ReactNode;
}

interface MoreOptionsTabsProps
	extends React.ComponentProps<typeof TouchableOpacity> {
	optionName: string;
	/**
	 * The name of the icon to be displayed
	 * @type {string} `Glob`, `Heart`, `Dollar`, `Document`, `Chart`, `StickyNote`
	 */
	iconName: string;
	tabStyle: StyleProp<ViewStyle>;
}

/**
 * A component that renders a list of options
 * @example
 * <MoreOptions>
 *      <MoreOptions.OptionTabs iconName={'Glob'} optionName={'Previous Bills'} />
 *      <MoreOptions.OptionTabs iconName={'Heart'} optionName={'Auto-pay'} />
 *      <MoreOptions.OptionTabs iconName={'Dollar'} optionName={'Payment Settings'} />
 *      <MoreOptions.OptionTabs iconName={'Dollar'} optionName={'FAQ/ Support'} />
 * </MoreOptions>
 */
const MoreOptions = ({children}: MoreOptionsProps) => {
	return <View style={Styles.container}>{children}</View>;
};

const handleChoseIcon = (iconName: string) => {
	switch (iconName) {
		case 'Glob':
			return <GlobIconSVG />;
		case 'Heart':
			return <HeartIconSVG />;
		case 'Bank':
			return <BankSVG />;
		case 'Refer':
			return <ReferSVG />;
		case 'Dollar':
			return <DollarIconSVG />;
		case 'Document':
			return <DocumentIconSVG />;
		case 'Chart':
			return <ChartSuccessIconSVG />;
		case 'StickyNote':
			return <StickyNoteIconSVG />;
		default:
			return <GlobIconSVG />;
	}
};

const OptionTabs = ({
	optionName,
	iconName,
	tabStyle,
	...moreOption
}: MoreOptionsTabsProps) => {
	return (
		<TouchableOpacity {...moreOption} style={[Styles.optionTabsContainer, tabStyle]}>
			<View style={Styles.optionFirstContainer}>
				<View style={Styles.logoContainer}>
					{handleChoseIcon(iconName)}
				</View>

				<Text style={Styles.optionText}>{optionName}</Text>
			</View>
			<View style={{marginRight: 24.9}}>
				<NextPageIconSVG />
			</View>
		</TouchableOpacity>
	);
};
/**
 * Add more options to the MoreOptions component
 * @param {string} optionName - The name of the option
 * @param {string} iconName - The name of the icon, this have the following options: `Glob`, `Heart`, `Dollar`and `Document`
 * @returns
 */
MoreOptions.OptionTabs = OptionTabs;

export default MoreOptions;
