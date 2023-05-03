import React from "react";
import { Dimensions, Text, View } from "react-native";
import Styles from "./Styles";
import Carousel from "react-native-snap-carousel";

const data = ["First", "Second", "Third"];

const TestComponent = ({ item, index }) => {
	return (
		<View key={index}>
			<Text>{item}</Text>
		</View>
	);
};

const OnboardingScreen = () => {
	const isCarousel = React.useRef(null);

	const SLIDER_WIDTH = Dimensions.get("window").width + 80;
	const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

	return (
		<View style={Styles.container}>
			{/* <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={TestComponent}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      /> */}
		</View>
	);
};

export default OnboardingScreen;
