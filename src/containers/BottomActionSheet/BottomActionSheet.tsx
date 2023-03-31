import React, { useRef, useEffect, useCallback } from "react";
import { View, Text, Pressable } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";

import Styles from "./Styles";

export type BottomActionSheetPropsType = {
	children: React.ReactNode;
	snapPoints: string[];
	isActive: boolean;
	setIsActive: (o: boolean) => void;
};

export default function BottomActionSheet({
	children,
	snapPoints,
	isActive,
	setIsActive,
}: BottomActionSheetPropsType): JSX.Element {
	const sheetRef = useRef(null);

	const handleOpenBottomSheet = useCallback((index: number) => {
		sheetRef.current?.snapToIndex(index);
	}, []);
	const handleCloseBottomSheet = useCallback(() => {
		sheetRef.current?.close();
	}, []);

	useEffect(() => {
		if (isActive) handleOpenBottomSheet(0);
		else handleCloseBottomSheet();

		return () => {};
	}, [isActive]);

	return (
		<Portal hostName="bottom-sheet">
			<Pressable
				onPress={() => setIsActive(false)}
				style={[
					Styles.overlay,
					{ display: isActive ? "flex" : "none" },
				]}
			/>
			<BottomSheet
				ref={sheetRef}
				snapPoints={snapPoints}
				enablePanDownToClose
				index={-1}
				onClose={() => setIsActive(false)}
			>
				{children}
			</BottomSheet>
		</Portal>
	);
}
