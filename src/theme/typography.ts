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

type TextAlign = 'center' | 'left' | 'right'

interface BodyProps {
    textAlign?: TextAlign
}

export const Body = styled.p<BodyProps>`
    font-family: ${FontFamily.PRIMARY};
    font-weight: ${FontWeight.Regular};
    text-align: ${props => props.textAlign ?? 'inherit'};
`
