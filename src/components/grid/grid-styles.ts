import styled from 'styled-components'

export const Grid = styled.div``

type AlignOptions =
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'inherit'
    | 'space-between'
    | 'space-around'
interface RowProps {
    hAlign?: AlignOptions
    vAlign?: AlignOptions
}

export const Row = styled.div<RowProps>`
    display: flex;
    flex: 1;
    width: 100%;

    justify-content: ${props => props.hAlign ?? 'inherit'};
    align-items: ${props => props.vAlign ?? 'inherit'};
`

interface ColProps {
    size?: number
}

export const Col = styled.div<ColProps>`
    flex: ${props => props.size ?? 1};
`
