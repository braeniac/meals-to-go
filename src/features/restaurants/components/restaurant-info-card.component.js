import react from 'react';
import { Image } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components'; 
import { SvgXml } from 'react-native-svg'; 

import star from '../../../../assets/star';
import open from '../../../../assets/open'; 
import { Spacer } from '../../../components/spacer/spacer.component';

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.ui.quaternary}; 
  border-width: 1px;
`
const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: ${({ theme }) => theme.space[2]};
`

const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`

const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.regular}
`

const Address = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.caption};
`

const Section = styled.View`
  flex-direction: row; 
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1; 
  flex-direction: row; 
  justify-content: flex-end; 
`;

const Rating = styled.View`
  flex-direction: row; 
`;

const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.text.error}; 
`;

const Icon = styled.Image`
`

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

    const RatingArray = Array.from(new Array(Math.floor(rating)));
    
    return (
      <RestaurantCard elevation={0}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Section>          
            <Rating>
              {
                RatingArray.map((index) => (
                  <SvgXml key={index} width={20} height={20} xml={star} />
                ))
              }
            </Rating>
            <SectionEnd>
              {
                isClosedTemporarily &&
                <Label>CLOSED TEMPORARILY</Label>
              }
              { 
                (isOpenNow) && 
                <SvgXml width={20} height={20} xml={open} /> 
              }
              <Spacer position="left" size="large">
                <Icon width={16} height={16} source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    )
}

