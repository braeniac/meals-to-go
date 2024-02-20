import react from 'react';
import { Image } from 'react-native';
import { SvgXml } from 'react-native-svg'; 


import star from '../../../../assets/star';
import open from '../../../../assets/open'; 
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

import {  
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
} from './restaurant-info-card.style'; 


export const RestaurantsInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily=true,
    } = restaurant;

    const RatingArray = Array.from({ length: Math.floor(rating) }, (_, index) => index + 1);

    return (
      <RestaurantCard elevation={0}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>          
            <Rating>
              {
                RatingArray.map((value) => (
                  <SvgXml key={value} width={20} height={20} xml={star} />
                ))
              }
            </Rating>
            <SectionEnd>
              {
                isClosedTemporarily &&
                <Spacer position="right" size="medium">
                  <Text variant="error">CLOSED TEMPORARILY</Text>
                </Spacer>
              }
              { 
                (isOpenNow) && 
                <SvgXml width={20} height={20} xml={open} /> 
              }
              <Spacer position="left" size="medium">
                <Image width={16} height={16} source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Text variant="caption">{address}</Text>
        </Info>
      </RestaurantCard>
    )
}

