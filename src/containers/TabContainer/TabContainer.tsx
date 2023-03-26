import React from "react";
import { View, FlatList } from "react-native";

import { Tab } from "@/components";

import Styles from "./Styles";

type TabType = {
	id: string | number;
	tab: string;
};

export type TabContainerPropsType = {
	tabs: TabType[];
	selectedTabIndex: number;
};

export default function TabContainer({
	tabs,
	selectedTabIndex,
}: TabContainerPropsType): JSX.Element {
	return (
		<View style={Styles.container}>
			<FlatList
				data={tabs}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Tab
						item={item}
						isSelected={selectedTabIndex === item.id}
					/>
				)}
				ItemSeparatorComponent={() => (
					<View style={{ marginHorizontal: 5 }} />
				)}
				bounces={false}
				horizontal
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
			/>
		</View>
	);
}
