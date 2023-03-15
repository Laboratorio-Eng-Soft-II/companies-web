import { Col, Row } from 'components/grid'
import { Spacing } from 'theme'
import { TextareaHTMLAttributes } from 'react'
import { TextAreaStyled } from './text-area-styles'
import { Separator } from 'components/box/box.styles'
import { InputLabel } from './input-styles'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    height?: number
}

export const TextArea: React.FC<TextAreaProps> = ({
    label,
    height = 100,
    ...others
}) => {
    return (
        <Row>
            <Col>
                {!!label && <InputLabel>{label}</InputLabel>}
                <Separator size={Spacing.XSmall} />
                <TextAreaStyled height={height} {...others} />
            </Col>
        </Row>
    )
}
