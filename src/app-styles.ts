import styled, { createGlobalStyle } from 'styled-components'
import { Colors, FontFamily } from './theme'

export const AppContainer = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    background-color: ${Colors.grayLight};
`
export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${FontFamily.PRIMARY};
  }
  body {
    margin: 0;
    padding: 40px 120px; 
    background-color: ${Colors.grayLight};
  }
`
