import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.ui.quaternary}; 
  border-width: ${StyleSheet.hairlineWidth}px;
  margin-bottom: ${({ theme }) => theme.space[3]};
`
export const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: ${({ theme }) => theme.space[2]};
`

export const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`

export const Section = styled.View`
  flex-direction: row; 
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1; 
  flex-direction: row; 
  justify-content: flex-end; 
`;

export const Rating = styled.View`
  flex-direction: row; 
`;