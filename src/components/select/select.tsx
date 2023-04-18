import { Col, Row } from 'components/grid'
import { Select } from 'antd'
import type { SelectProps } from 'antd'
import { InputLabel } from 'components/input/input-styles'
import { Separator } from 'components/box/box.styles'
import { Spacing } from 'theme'

interface SelectFieldProps extends SelectProps {
    label?: string
    onChange?: (value: string) => void
}

export const SelectField: React.FC<SelectFieldProps> = ({
    label,
    onChange,
    ...others
}) => {
    return (
        <Row>
            <Col>
                <InputLabel>{label}</InputLabel>
                <Separator size={Spacing.XSmall} />
                <Select
                    onChange={onChange}
                    style={{ width: '100%' }}
                    {...others}
                />
            </Col>
        </Row>
    )
}
