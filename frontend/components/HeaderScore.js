import React from 'react';
import { View, StyleSheet } from 'react-native'

import { Block, FirePoints, Level } from './'

const HeaderScore = ({ points, level }) => (
    <Block row>
        <FirePoints key="fire-points" points={points} />
        <View style={styles.levelContainer}>
            <Level key="level" level={level} />
        </View>
    </Block>
)

const styles = StyleSheet.create({
    levelContainer: {
        marginLeft: 5
    }
})

export default HeaderScore;