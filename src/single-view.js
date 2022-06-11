import React from 'react';
import { StyleSheet, } from 'react-native';
import Animated, { useAnimatedStyle, } from 'react-native-reanimated';

export default function SingleView(props) {
	const animatedStyles = useAnimatedStyle(() => {
		return {
			height: props.bottom - props.top,
			width: props.right - props.left,
			top: props.top,
			left: props.left,
		}
	}, [props.top, props.right, props.bottom, props.left, props.rerender,]);

	return (
		<Animated.View style={[styles.constantStyles, animatedStyles]}>
			{props.children}
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	constantStyles: {
		position: 'absolute',
	},
});