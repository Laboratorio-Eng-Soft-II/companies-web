import styled, { createGlobalStyle } from 'styled-components'
import { Colors } from './theme'

export const AppContainer = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    background-color: ${Colors.grayLight};
`
export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
`
