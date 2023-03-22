import { fieldDisabledStyle } from 'app-styles'
import styled from 'styled-components'
import { Border, Colors, Spacing } from 'theme'

interface TextAreaStyledProps {
    height?: number
}

export const TextAreaStyled = styled.textarea<TextAreaStyledProps>`
    width: 100%;
    padding: ${Spacing.Small};

    min-height: ${props => props.height ?? 100}px;

    border-radius: ${Border.Radius};
    border: ${Border.Width} solid ${Border.Color};

    :focus {
        border-color: ${Colors.primary};
        box-shadow: inset 0 0 0 ${Border.Width} ${Colors.primary};
    }

    :hover {
        box-shadow: inset 0 0 0 ${Border.Width} ${Colors.secondary};
        border-color: ${Colors.secondary};
    }

    :disabled {
        ${fieldDisabledStyle};
    }

    -webkit-appearance: none;

    transition: all 0.3s;
`
