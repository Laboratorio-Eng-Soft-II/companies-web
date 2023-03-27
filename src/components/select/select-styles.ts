import { Select } from 'antd'
import { fieldDisabledStyle } from 'app-styles'
import styled from 'styled-components'

export const SelectStyled = styled(Select)`
    :disabled {
        ${fieldDisabledStyle};
    }
`
