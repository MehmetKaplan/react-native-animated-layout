import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import ReactNativeAnimatedLayout from 'react-native-animated-layout';


export default function App() {
	const [rerender, setRerender] = useState(0);
	const redView = <View style={{ backgroundColor: 'red', height: '100%', width: '100%', }}><Text>{"I am the red view"}</Text></View>;
	const greenView = <View style={{ backgroundColor: 'green', height: '100%', width: '100%', }}><Text>{"I am the green view"}</Text></View>;
	const blueView = <View style={{ backgroundColor: 'blue', height: '100%', width: '100%', }}><Text>{"I am the blue view"}</Text></View>;
	const layouts = [
		{
			validAfterWHRatio: 0,
			validBeforeWHRatio: 0.9,
			views: [
				{ top: 0, bottom: 0.5, left: 0, right: 1, children: redView },
				{ top: 0.5, bottom: 0.75, left: 0, right: 1, children: greenView },
				{ top: 0.75, bottom: 1, left: 0, right: 1, children: blueView },
			]
		},
		{
			validAfterWHRatio: 1 / 0.62,
			validBeforeWHRatio: 999, // infinity
			views: [
				{ top: 0, bottom: 1, left: 0, right: 0.5, children: redView },
				{ top: 0, bottom: 1, left: 0.5, right: 0.75, children: greenView },
				{ top: 0, bottom: 1, left: 0.75, right: 1, children: blueView },
			]
		},
		{
			defaultFlag: true,
			views: [
				{ top: 0.16, bottom: 0.84, left: 0.16, right: 0.5, children: redView },
				{ top: 0.16, bottom: 0.50, left: 0.5, right: 0.84, children: greenView },
				{ top: 0.50, bottom: 0.84, left: 0.5, right: 0.84, children: blueView },
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
