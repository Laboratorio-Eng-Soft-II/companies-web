import styled from 'styled-components'
import { Border, Colors, Spacing, FontSize } from '../../theme'

const fieldHeight = 32

export const InputStyled = styled.input`
    width: 100%;
    height: ${fieldHeight}px;
    padding: ${Spacing.Small};

    border-radius: ${Border.Radius};
    border: ${Border.Width} solid ${Border.Color};

    :focus {
        border-color: ${Colors.primary};
        box-shadow: inset 0 0 0 ${Border.Width} ${Colors.primary};
    }

    :hover {
        box-shadow: inset 0 0 0 ${Border.Width} ${Colors.gray};
        border-color: ${Colors.gray};
    }

    -webkit-appearance: none;

    transition: all 0.3s;
`

export const InputLabel = styled.label`
    color: 'black';
    font-size: ${FontSize.sm};
    font-weight: bold;
`
