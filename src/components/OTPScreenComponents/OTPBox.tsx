import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import AppStyles from '@/AppStyles';
import Styles from './Styles';

const OTPBox = () => {
	const [_digitOne, setDigitOne] = useState<string>();
	const [_digitTwo, setDigitTwo] = useState<string>('');
	const [_digitThree, setDigitThree] = useState<string>('');
	const [_digitFour, setDigitFour] = useState<string>('');

	const pin1Ref = React.useRef<TextInput>(null);
	const pin2Ref = React.useRef<TextInput>(null);
	const pin3Ref = React.useRef<TextInput>(null);
	const pin4Ref = React.useRef<TextInput>(null);

	const [isFocousedOne, setIsFocousedOne] = useState<boolean>(false);
	const [isFocousedTwo, setIsFocousedTwo] = useState<boolean>(false);
	const [isFocousedThree, setIsFocousedThree] = useState<boolean>(false);
	const [isFocousedFour, setIsFocousedFour] = useState<boolean>(false);

	return (
		<View style={Styles.container}>
			<View>
				<TextInput
					keyboardType="numeric"
					placeholder={isFocousedOne ? '' : '—'}
					placeholderTextColor={AppStyles.colorDark2}
					style={Styles.inputFields}
					maxLength={1}
					ref={pin1Ref}
					onFocus={() => setIsFocousedOne(true)}
					onChangeText={(text) => {
						setDigitOne(text);
						if (text.length === 1) {
							pin2Ref.current !== null && pin2Ref.current.focus();
						}
					}}
				/>
			</View>
			<View>
				<TextInput
					keyboardType="numeric"
					placeholder={isFocousedTwo ? '' : '—'}
					placeholderTextColor={AppStyles.colorDark2}
					style={Styles.inputFields}
					maxLength={1}
					ref={pin2Ref}
					onFocus={() => setIsFocousedTwo(true)}
					onChangeText={(text) => {
						setDigitTwo(text);
						if (text.length === 1) {
							pin3Ref.current !== null && pin3Ref.current.focus();
						}
						if (text.length === 0) {
							pin1Ref.current !== null && pin1Ref.current.focus();
						}
					}}
				/>
			</View>
			<View>
				<TextInput
					keyboardType="numeric"
					placeholder={isFocousedThree ? '' : '—'}
					placeholderTextColor={AppStyles.colorDark2}
					style={Styles.inputFields}
					maxLength={1}
					ref={pin3Ref}
					onFocus={() => setIsFocousedThree(true)}
					onChangeText={(text) => {
						setDigitThree(text);
						if (text.length === 1) {
							pin4Ref.current !== null && pin4Ref.current.focus();
						}
						if (text.length === 0) {
							pin2Ref.current !== null && pin2Ref.current.focus();
						}
					}}
				/>
			</View>
			<View>
				<TextInput
					keyboardType="numeric"
					placeholder={isFocousedFour ? '' : '—'}
					placeholderTextColor={AppStyles.colorDark2}
					style={Styles.inputFields}
					maxLength={1}
					ref={pin4Ref}
					onFocus={() => setIsFocousedFour(true)}
					onChangeText={(text) => {
						setDigitFour(text);
						if (text.length === 0) {
							pin3Ref.current !== null && pin3Ref.current.focus();
						}
					}}
				/>
			</View>
		</View>
	);
};

export default OTPBox;
