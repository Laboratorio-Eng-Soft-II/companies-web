import styled from 'styled-components'
import { Colors, FontFamily, FontWeight } from './theme'

export const Label = styled.p`
    font-family: ${FontFamily.PRIMARY};
    color: ${Colors.primary};
    font-weight: ${FontWeight.Bold};
    text-align: center;
`

export const H1 = styled.h1`
    font-family: ${FontFamily.PRIMARY};
`

export const Body = styled.p`
    font-family: ${FontFamily.PRIMARY};
    font-weight: ${FontWeight.Regular};
`
