/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-extra-semi */
/* eslint-disable semi */
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import Styles from "./Styles";

import HomeBanner from "@/constants/svg/HomeBanner.svg";

export default function Banner(): JSX.Element {
	return (
		<View style={Styles.container}>
			<HomeBanner width={"100%"} height={167} style={Styles.banner} />
			<View style={Styles.bannerContent}>
				<View style={Styles.bannerTextContainer}>
					<Text style={Styles.bannerText}>Treat your patient</Text>
					<Text style={Styles.bannerText}>in your own way</Text>
				</View>
				<View style={Styles.footerContainer}>
					<TouchableOpacity
						activeOpacity={0.85}
						style={Styles.button}
					>
						<Text style={Styles.buttonText}>
							Try Premium for free
						</Text>
					</TouchableOpacity>
					<View style={Styles.images}>
						<View style={Styles.imageContainer}>
							<Image
								source={require("../../constants/image/User1.jpg")}
								style={[Styles.image, { left: 0, zIndex: 10 }]}
							/>
						</View>
						<View style={Styles.imageContainer}>
							<Image
								source={require("../../constants/image/User2.jpg")}
								style={[Styles.image, { left: 15, zIndex: 8 }]}
							/>
						</View>
						<View style={Styles.imageContainer}>
							<Image
								source={require("../../constants/image/User3.jpg")}
								style={[Styles.image, { left: 30, zIndex: 6 }]}
							/>
						</View>
						<View style={Styles.imageContainer}>
							<Image
								source={require("../../constants/image/User4.png")}
								style={[Styles.image, { left: 45, zIndex: 4 }]}
							/>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}
