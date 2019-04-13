import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { theme } from '../constants'
import { Block, Text } from '../components'

const FirePoints = ({ points }) => (
    <Block row center>
        <Text h3>{points} </Text>
        <Icon name="ios-flame" size={26} color={theme.colors.fire} />
    </Block>
)

export default FirePoints;