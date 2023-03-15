import styled from 'styled-components'
import { Colors, FontFamily, FontWeight } from './theme'

export const Label = styled.p`
    font-family: ${FontFamily.PRIMARY};
    color: ${Colors.primary};
    font-weight: ${FontWeight.Bold};
    text-align: center;
`

type TextAlign = 'center' | 'left' | 'right'

interface TextProps {
    textAlign?: TextAlign
}

export const H1 = styled.h1<TextProps>`
    font-family: ${FontFamily.PRIMARY};
    text-align: ${props => props.textAlign ?? 'inherit'};
    color: ${Colors.primary};
`

export const H2 = styled.h2<TextProps>`
    font-family: ${FontFamily.PRIMARY};
    text-align: ${props => props.textAlign ?? 'inherit'};
    color: ${Colors.primary};
`

export const Body = styled.p<TextProps>`
    font-family: ${FontFamily.PRIMARY};
    font-weight: ${FontWeight.Regular};
    text-align: ${props => props.textAlign ?? 'inherit'};
    color: ${Colors.primary};
`
