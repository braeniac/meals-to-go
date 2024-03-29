import styled from 'styled-components';
import { StatusBar } from 'react-native';

export const SafeArea = styled.SafeAreaView`
    flex: 1;
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
    background-color: ${({ theme }) => theme.colors.ui.quaternary};
`
