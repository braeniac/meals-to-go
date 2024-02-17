import React from 'react';
import { View } from 'react-native'; 
import styled from 'styled-components';

const sizeVariant = {
    small: 1, 
    medium: 2, 
    large: 3
}

const positionVariant = {
    top: 'marginTop', 
    bottom: 'marginBottom', 
    left: 'marginLeft',
    right: 'marginRight'
}


const getVariant = (theme, position, size) => {

    

    console.log(positionVariant[position])
    console.log(sizeVariant[size])
    return `${positionVariant[position]} : ${theme.space[sizeVariant[size]]}`
}
    

export const Spacer = styled.View`
    ${({ theme, position, size }) => getVariant(theme, position, size)}; 
`

Spacer.defaultProps = {
    position: 'top',
    size: 'small'
}