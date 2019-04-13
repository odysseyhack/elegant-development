import React from 'react';
import { View, StyleSheet } from 'react-native';

import { theme } from '../constants'
import { Text } from '../components'

const Level = ({ level }) => (
    <View style={styles.block}>
        <Text center h3>{level}</Text>
    </View>
)

const styles = StyleSheet.create({
    block: {
        borderWidth: 4,
        width: 40,
        height: 40,
        borderColor: theme.colors.primary,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 13,
        elevation: 2,
    }
})

export default Level;