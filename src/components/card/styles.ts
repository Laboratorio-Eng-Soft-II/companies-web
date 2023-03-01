import styled from 'styled-components'
import { Colors, Spacing } from '../../theme'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${Colors.gray};
    padding: ${Spacing.Medium};
    min-width: 150px;
    min-height: 150px;
    max-width: 150px;
    max-height: 150px;
`
