import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import ReactNativeAnimatedLayout from 'react-native-animated-layout';


export default function App() {
	const [rerender, setRerender] = useState(0);
	const redView = <View style={{ backgroundColor: 'red', height: '100%', width: '100%', }}><Text>{"I am the red view"}</Text></View>;
	const greenView = <View style={{ backgroundColor: 'green', height: '100%', width: '100%', overflow: 'hidden'}}>
		<Text>{"I am the green view and my contents overflow. Because of the overflow prop, the over-flown content is hidden."}</Text><Text>{"0"}</Text><Text>{"1"}</Text><Text>{"2"}</Text><Text>{"3"}</Text><Text>{"4"}</Text><Text>{"5"}</Text><Text>{"6"}</Text><Text>{"7"}</Text><Text>{"8"}</Text><Text>{"9"}</Text><Text>{"10"}</Text><Text>{"11"}</Text><Text>{"12"}</Text><Text>{"13"}</Text><Text>{"14"}</Text><Text>{"15"}</Text><Text>{"16"}</Text><Text>{"17"}</Text><Text>{"18"}</Text><Text>{"19"}</Text><Text>{"20"}</Text><Text>{"21"}</Text><Text>{"22"}</Text><Text>{"23"}</Text><Text>{"24"}</Text><Text>{"25"}</Text><Text>{"26"}</Text><Text>{"27"}</Text><Text>{"28"}</Text><Text>{"29"}</Text>
		</View>;
	const blueView = <View style={{ backgroundColor: 'blue', height: '100%', width: '100%', }}><Text>{"I am the blue view"}</Text></View>;
	const layouts = [
		{
			validAfterWHRatio: 0,
			validBeforeWHRatio: 0.9,
			views: [
				{ top: 0, bottom: 0.5, left: 0, right: 1, children: redView },
				{ top: 0.75, bottom: 1, left: 0, right: 1, children: blueView },
				{ top: 0.5, bottom: 0.75, left: 0, right: 1, children: greenView },
			]
		},
		{
			validAfterWHRatio: 1 / 0.62,
			validBeforeWHRatio: 999, // infinity
			views: [
				{ top: 0, bottom: 1, left: 0, right: 0.5, children: redView },
				{ top: 0.5, bottom: 1, left: 0.5, right: 1, children: blueView },
				{ top: 0, bottom: 0.5, left: 0.5, right: 1, children: greenView },
			]
		},
		{
			defaultFlag: true,
			views: [
				{ top: 0.16, bottom: 0.84, left: 0.16, right: 0.5, children: redView },
				{ top: 0.50, bottom: 0.84, left: 0.5, right: 0.84, children: blueView },
				{ top: 0.16, bottom: 0.50, left: 0.5, right: 0.84, children: greenView },
			]
		},
	];

	useEffect(() => {
		let nextRerender = rerender + 1;
		setRerender(nextRerender);
	}, []); // when we want to re-render

	return <ReactNativeAnimatedLayout
		layouts={layouts}
		rerender={rerender}
	/>;
}
