import react from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components'; 

const RestaurantCard = styled(Card)`
  background-color: white; 
`

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 5px;
`

const RestaurantCardTitle = styled(Card.Title)`
  padding: 16px;
`


export const RestaurantsInfoCard = ({ restaurant = {} }) => {

    const {
        name = "Some Restaurant",
        icon,
        photos = [
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    
    return (
      <RestaurantCard elevation={5}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <RestaurantCardTitle title={name} />
      </RestaurantCard>
    )
}

