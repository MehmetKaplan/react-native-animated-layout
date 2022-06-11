import React, { useState, useEffect, } from 'react';
import { useWindowDimensions, } from 'react-native';

import SingleView from './single-view';

/*
props.layouts
[
	{
		validAfterWHRatio,
		validBeforeWHRatio,
		views: [
			{ top, right, bottom, left, children },
			{ top, right, bottom, left, children },
			{ top, right, bottom, left, children },
		]
	},
...
	{
		defaultFlag,
		views: [
			{ top, right, bottom, left, children },
			{ top, right, bottom, left, children },
			{ top, right, bottom, left, children },
		]
	},
]
*/


export default function ReactNativeAnimatedLayout(props) {
	const { height, width } = useWindowDimensions();

	const [activeLayout, setActiveLayoutts] = useState();

	useEffect(() => {
		let whRatio = width / height;
		const activeLayout_ = props.layouts.filter(layout => {
			// better to depict cases explicitly
			if (layout.defaultFlag) return true;
			if ((layout.validAfterWHRatio < whRatio) && (whRatio < layout.validBeforeWHRatio)) return true;
			return false;
		})
			.sort((x, y) => y.defaultFlag ? -1 : 1);
		if (activeLayout_.length === 0) throw new Error('no layout found');
		setActiveLayoutts(activeLayout_[0]);

	}, [props.rerender, width, height]);

	const views = (activeLayout?.views) ? activeLayout.views.map((curView, index) => <SingleView
		key={`animated-layout-${index}`}
		top={curView.top * height}
		right={curView.right * width}
		bottom={curView.bottom * height}
		left={curView.left * width}
	>
		{curView.children}
	</SingleView>)
		: <React.Fragment></React.Fragment>;
	return views;
}
