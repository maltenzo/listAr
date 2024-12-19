import { Text, TextProps } from './Themed';
import React from 'react';
export function MonoText(props: TextProps) {
  // eslint-disable-next-line react-native/no-inline-styles
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
