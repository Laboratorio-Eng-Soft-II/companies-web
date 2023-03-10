import { InputHTMLAttributes } from 'react'
import { Col, Row } from '../grid'
import { InputLabel, InputStyled } from './input-styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export const Input: React.FC<InputProps> = ({ label, children, ...props }) => {
    return (
        <Row>
            <Col>
                {!!label && <InputLabel>{label}</InputLabel>}
                <InputStyled {...props} />
            </Col>
        </Row>
    )
}
