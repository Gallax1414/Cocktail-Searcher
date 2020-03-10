import React from 'react';
import { TextProps, Text as ReactText, StyleSheet, Platform } from 'react-native';


const Text: React.FC<TextProps> = (props) => {
    const { children, style, ...rest } = props;

    return (
        <ReactText {...rest} style={[styles.commonText, style]}>{children}</ReactText>
    );
}

const styles = StyleSheet.create({
    commonText: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'System',
    },
});

export default Text;