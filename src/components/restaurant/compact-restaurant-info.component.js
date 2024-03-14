import React from 'react';
import styled from 'styled-components'; 
import WebView from 'react-native-webview'; 
import { Platform } from 'react-native';
import { Text } from '../../components/typography/text.component'; 

const CompactImage = styled.Image`
    border-radius: 10px; 
    width: 120px; 
    height: 100px; 
`

const CompactWebImage = styled(WebView)`
    border-radius: 10px; 
    width: 120px; 
    height: 100px; 
`

const Item = styled.View`
    padding: 10px; 
    max-width: 120px; 
    align-items: center;
`

const Label = styled.View`
    margin-top: 5px;
`

const isAndroid = Platform.OS === 'android'; 

export const CompactRestaurantInfo = ({ restaurant }) => {

    const Image = isAndroid ? CompactWebImage : CompactImage

    return(
        <Item>
            <Image source={{ uri : restaurant.photos[0] }} />
            <Label>
                <Text variant="label">{restaurant.name}</Text>
            </Label>
        </Item>
    )   
}