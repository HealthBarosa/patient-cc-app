import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import GoogleIconSVG from '../../../constants/svg/GoogleIcon.svg';
import Styles from './Styles';

interface GoogleSignupBtnProps
	extends React.ComponentProps<typeof TouchableOpacity> {}

const SignupWithGoogleBtn = ({...buttonProps}: GoogleSignupBtnProps) => {
	return (
		<TouchableOpacity {...buttonProps} style={Styles.buttonLayout}>
			<GoogleIconSVG />
			<Text style={Styles.buttonText}>Login with Google</Text>
		</TouchableOpacity>
	);
};

export default SignupWithGoogleBtn;
