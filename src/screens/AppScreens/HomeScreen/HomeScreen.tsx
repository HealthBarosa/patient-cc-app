import React, { useState, useMemo } from "react";
import {
	View,
	Text,
	ScrollView,
	StatusBar,
	TouchableOpacity,
	Pressable,
	ImageSourcePropType,
	Share,
} from "react-native";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import Clipboard from "@react-native-clipboard/clipboard";
import { useNavigation } from "@react-navigation/native";

import CopyGreyIcon from "@/constants/svg/icons/CopyGreyIcon.svg";
import AddIcon from "@/constants/svg/icons/AddIcon.svg";
import SetupSVG from "@/constants/svg/SetupSVG.svg";

import { Banner, PrimaryButton } from "@/components";
import {
	AppReferContainer,
	TieupCarousel,
	HowItWorkCarousel,
	BottomActionSheet,
} from "@/containers";

import Styles from "./Styles";
import AppStyles from "@/AppStyles";
import { NavigationTree } from "@/utils";

const cures: {
	id: number;
	image: ImageSourcePropType;
	name: string;
	price: string;
	location: string;
}[] = [
	{
		id: 1,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 2,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 3,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 4,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
	{
		id: 5,
		image: require("@/constants/image/Hospital1.png"),
		name: "Apollo Hospital",
		price: "1200",
		location: "Hyderabad, Secunderabad",
	},
];
const HowItWorks = [
	{ id: 1, image: require("../../../constants/image/How1.png") },
	{ id: 2, image: require("../../../constants/image/How1.png") },
	{ id: 3, image: require("../../../constants/image/How1.png") },
];

export default function HomeScreen(): JSX.Element {
	const navigation = useNavigation();
	const [code, setCode] = useState<string>("docvhg");
	const [isCodeCopied, setIsCodeCopied] = useState<boolean>(false);
	const snapPoints = useMemo(() => ["45%"], []);
	const [isBottomSheetActive, setIsBottomSheetActive] =
		useState<boolean>(false);
	const [method, setMethod] = useState<"refer" | "treat">("refer");

	function openBottomSheet(): void {
		setIsBottomSheetActive(true);
	}
	function onPressContinue(): void {
		setIsBottomSheetActive(false);
		if (method === "refer") {
			navigation.navigate(NavigationTree.app.ReferCaseScreen as never);
		} else {
			navigation.navigate(
				NavigationTree.app.LiveReferCaseScreen as never
			);
		}
	}
	function onPressRefer(): void {
		setMethod("refer");
	}
	function onPressTreat(): void {
		setMethod("treat");
	}
	function onPressCopy(): void {
		Clipboard.setString(code);
		setIsCodeCopied(true);
	}
	async function onPressShare(): Promise<void> {
		try {
			const result = await Share.share({
				title: "Invite people to get discount",
				message: code,
			});
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// shared with activity type of result.activityType
				} else {
					// shared
				}
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error: unknown) {
			console.log(error);
		}
	}
	function onPressSetupnow(): void {
		navigation.navigate(NavigationTree.app.ProfileScreen as never);
	}

	return (
		<SafeAreaView style={Styles.container}>
			<StatusBar
				barStyle={"dark-content"}
				translucent
				backgroundColor={"transparent"}
			/>
			<ScrollView
				nestedScrollEnabled
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={16}
				contentContainerStyle={Styles.scrollContainer}
			>
				<Text style={Styles.headerText}>Patient. CC</Text>
				<Text style={[Styles.headerText, { marginBottom: 10 }]}>
					Welcome,{" "}
					<Text style={{ color: AppStyles.colorBrand1 }}>
						User Name
					</Text>
				</Text>
				<View style={Styles.completeSetupBox}>
					<SetupSVG />
					<View style={Styles.completeSetupBody}>
						<Text style={Styles.completeSetupText}>
							Complete to setup your account
						</Text>
						<Text style={Styles.completeSetupTime}>1 min ago</Text>
						<View style={Styles.completeSetupFooter}>
							<Text style={Styles.completeSetupBodyStep}>
								2/3 steps left
							</Text>
							<TouchableOpacity
								activeOpacity={0.85}
								onPress={onPressSetupnow}
								style={Styles.completeSetupButton}
							>
								<Text style={Styles.completeSetupButtonText}>
									Set-Up Now
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={Styles.bannerContainer}>
					<Banner />
				</View>
				{/*<View style={Styles.referContainer}>
					<AppReferContainer
						referOptions={["Refer Patient", "Treat Patient"]}
					/>
				</View>*/}
				<View style={Styles.tieupCarouselContainer}>
					<TieupCarousel data={cures as any} />
				</View>
				<View style={Styles.howItWorkContainer}>
					<HowItWorkCarousel data={HowItWorks as any} />
				</View>
				<View style={Styles.invitationContainer}>
					<Text style={Styles.invitationContainerHeader}>
						Invitation Code
					</Text>
					<View style={Styles.codeContainer}>
						<View style={Styles.codeTextContainer}>
							<CopyGreyIcon />
							<Text style={Styles.codeText}>{code}</Text>
						</View>
						<TouchableOpacity
							activeOpacity={0.85}
							onPress={onPressCopy}
							style={Styles.copyContainer}
						>
							<Text style={Styles.copyText}>
								{isCodeCopied ? "Copied" : "Copy"}
							</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						activeOpacity={0.85}
						onPress={onPressShare}
						style={Styles.inviteButton}
					>
						<Text style={Styles.inviteButtonText}>Invite</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			<Pressable onPress={openBottomSheet} style={Styles.floatingButton}>
				<AddIcon />
				<Text style={Styles.floatingButtonText}>Treat or Refer</Text>
			</Pressable>
			<BottomActionSheet
				snapPoints={snapPoints}
				isActive={isBottomSheetActive}
				setIsActive={setIsBottomSheetActive}
			>
				<BottomSheetView style={Styles.bottomSheetContainer}>
					<Text style={Styles.bottomSheetHeader}>Create or Join</Text>
					<Text style={Styles.bottomSheetText}>
						select one method to create refer case or join to refer
						case for patient
					</Text>
					<TouchableOpacity
						style={Styles.caseButton}
						activeOpacity={0.85}
						onPress={onPressRefer}
					>
						<Text style={Styles.bottomSheetButtonText}>
							Want to refer a case?
						</Text>
						<View
							style={Styles.bottomSheetButtonindicatorContainer}
						>
							{method === "refer" && (
								<View
									style={Styles.bottomSheetButtonindicator}
								/>
							)}
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={Styles.caseButton}
						activeOpacity={0.85}
						onPress={onPressTreat}
					>
						<Text style={Styles.bottomSheetButtonText}>
							Want to treat a case?
						</Text>
						<View
							style={Styles.bottomSheetButtonindicatorContainer}
						>
							{method === "treat" && (
								<View
									style={Styles.bottomSheetButtonindicator}
								/>
							)}
						</View>
					</TouchableOpacity>
					<PrimaryButton
						activeOpacity={0.85}
						onPress={onPressContinue}
						backgroundColor={AppStyles.colorBrand1}
					>
						Continue
					</PrimaryButton>
				</BottomSheetView>
			</BottomActionSheet>
		</SafeAreaView>
	);
}
