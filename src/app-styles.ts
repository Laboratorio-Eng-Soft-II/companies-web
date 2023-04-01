import styled, { createGlobalStyle, css } from 'styled-components'
import { Colors, FontFamily, device } from './theme'

export const AppContainer = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    background-color: ${Colors.background};
`
export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${FontFamily.PRIMARY};
  }
  body {
    margin: 0;
    background-color: ${Colors.background};
    padding: 5px 10px; 

    @media ${device.mobileL} {
      padding: 10px 40px; 
    }

    @media ${device.laptop} {
      padding: 40px 120px; 
    }
  }
`

export const fieldDisabledStyle = css`
    background-color: ${Colors.gray};
    color: ${Colors.black};
`
