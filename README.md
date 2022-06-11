
A responsive layout with `react-native-reanimated`'s `Animated.View`s.
## Installation

```
yarn add react-native-animated-layout
```

## Usage

In the below example 3 views are located in the screen depending on the layout. Width / Height ratio is used to identify the appropriate layout.

```javascript
import React, { useState, useEffect } from 'react';
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
```

## Demo

Expo snack: https://snack.expo.dev/@mehmetkaplan/react-native-animated-layout
Web demo: https://mehmetkaplan.github.io/react-native-animated-layout/
## API

| Name | Description |
|------|-------------|
|  `layouts`  | Array of json objects that represent the different layouts. Refer to the below layouts table | 
|  `rerender` | When rerendering is needed, an incremented counter to be passed. |
### layouts array individual item details

The library uses `validAfterWHRatio`, `validBeforeWHRatio` and `defaultFlag` keys to determine the valid layout for current Width / Height ratio. 

Each item in the `layouts` array should have;
- either `validAfterWHRatio` and `validBeforeWHRatio` keys together
- or `defaultFlag: true` key-value.

When `validAfterWHRatio` and `validBeforeWHRatio` exists the layout is used when Width / Height ratio is between these values.
When `validAfterWHRatio` and `validBeforeWHRatio` do not exist, item with `defaultFlag: true` is used.
**If no valid layout is found an exception is thrown.**

| Name | Description |
|------|-------------|
| `validAfterWHRatio` | The width / height lower bound, to be used together with `validBeforeWHRatio` | 
| `validBeforeWHRatio` | The width / height upper bound, to be used together with `validAfterWHRatio` | 
| `defaultFlag` | Used when `validBeforeWHRatio`, `validAfterWHRatio` values do not exist. This is the "else" condition.|
| `validAfterWHRatio` | The width / height lower bound, to be used together with `validBeforeWHRatio` | 
| `views` | The contents of the views and their coordinates as ratios. Refer to the below views table. |

#### views array individual item details

| Name | Description |
|------|-------------|
| `top` | A Number, between 0 and 1. The value represents the position of the top edge of the view from top of the current screen. | 
| `bottom` | A Number, between 0 and 1. The value represents the position of the bottom edge of the view from **top** of the current screen. |
| `left` | A Number, between 0 and 1. The value represents the position of the left edge of the view from left of the current screen. | 
| `right` | A Number, between 0 and 1. The value represents the position of the right edge of the view from **left** of the current screen. |
| `children` | The content of the view that is placed responsively. |

## License

The license is MIT and full text [here](LICENSE).

### Used Modules

* react license [here](./OtherLicenses/react.txt)
* react-native license [here](./OtherLicenses/react-native.txt)
* react-native-web license [here](./OtherLicenses/react-native-web.txt)
* react-native-reanimated license [here](./OtherLicenses/react-native-reanimated.txt)
