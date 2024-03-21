import React from 'react'; 
import { ScrollView, TouchableOpacity } from 'react-native'; 
import styled from 'styled-components';

import { Spacer } from '../spacer/spacer.component';
import { Text } from '../typography/text.component'; 

import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component'; 



const FavourtiesWrapper = styled.View`
    padding: 10px; 
`

export const FavouritesBar = ({ favourites, showDetail }) => {

    if (!favourites.length) {
        return null; 
    }

    return(
        <FavourtiesWrapper>
            <Spacer position="left" size="medium">
                <Text>Favourites</Text>
            </Spacer>
            
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >   
                
                {
                    favourites.map((restaurant) => {
                        const key = restaurant.name.split("").join(""); 
                        return(
                            <Spacer position="left" size="medium" key={key}>
                                <TouchableOpacity
                                   onPress={() => showDetail("RestaurantDetail", { 
                                    restaurant
                                   })}
                                >
                                    <CompactRestaurantInfo restaurant={restaurant} />
                                </TouchableOpacity>
                            </Spacer>
                            
                        )
                    })
                }

            </ScrollView>
        </FavourtiesWrapper>
    )
}