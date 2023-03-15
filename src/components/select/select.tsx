import { Col, Row } from 'components/grid'
import Select, { GroupBase, Props } from 'react-select'

export function SelectField<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
>(props: Props<Option, IsMulti, Group>) {
    return (
        <Row>
            <Col>
                <Select {...props} />
            </Col>
        </Row>
    )
}
