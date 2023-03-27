module.exports = {
	presets: [ "module:metro-react-native-babel-preset" ],
	plugins: [
		[ "module-resolver", {
			"root": [ "./src" ],
			"alias":{
				"@/*": "./src/*",
				// "@/AppStyles": "./src/AppStyles",
				// "@/components": "./src/components",
				// "@/screens": "./src/screens",
				// "@/utils": "./src/utils",
				// "@/navigations": "./src/navigations",
				// "@/containers": "./src/containers",
				// "@/constants": "./src/constants",
			}
		}]
	],
};
