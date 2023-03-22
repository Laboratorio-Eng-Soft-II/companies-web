import { fieldDisabledStyle } from 'app-styles'
import { NumericFormat } from 'react-number-format'
import styled from 'styled-components'

export const NumeriFormatStyled = styled(NumericFormat)`
    :disabled {
        ${fieldDisabledStyle};
    }
`
