import React from 'react'; 
import { ScrollView } from 'react-native'; 
import styled from 'styled-components';
import { Spacer } from '../spacer/spacer.component';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component'; 


const FavourtiesWrapper = styled.View`
    padding: 10px; 
`

export const FavouritesBar = ({ favourites }) => {
    return(
        <FavourtiesWrapper>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >   
                {
                    favourites.map((restaurant) => {
                        const key = restaurant.name.split("").join(""); 
                        return(
                            <Spacer position="left" size="medium" key={key}>
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </Spacer>
                            
                        )
                    })
                }

            </ScrollView>
        </FavourtiesWrapper>
    )
}