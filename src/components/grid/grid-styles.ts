import styled from 'styled-components'

export const Grid = styled.div``

export const Row = styled.div`
    display: flex;
`

interface ColProps {
    size?: number
}

export const Col = styled.div<ColProps>`
    flex: ${props => props.size};
`
