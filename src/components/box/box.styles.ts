import styled from 'styled-components'
import { Spacing } from '../../theme'

interface SeparatorProps {
    size?: Spacing
    horizontal?: boolean
}

export const Separator = styled.div<SeparatorProps>`
    ${props =>
        props.horizontal
            ? `margin: 0 ${props.size ?? Spacing.Medium}`
            : `margin: ${props.size ?? Spacing.Medium} 0`};
`

export const VBox = styled.div`
    display: flex;
    flex-direction: column;
`
