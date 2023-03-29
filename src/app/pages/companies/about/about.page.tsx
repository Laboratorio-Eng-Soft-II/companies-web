import { Button } from 'components/button'
import { CenterView } from 'components/center-view'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { H1, Spacing } from 'theme'
import { Hbox, Separator } from '../../../../components/box/box.styles'
import { Row, Col } from '../../../../components/grid'
import { Input } from '../../../../components/input'

const MOCK_COMPANY = {
    name: 'AGMS Softwares ltda.',
    cnpj: '12.345.678/0001-90',
    area: 'Desenvolvimento de software',
    street: 'Av. Prof. Almeida Prado',
    number: '128',
    email: 'softwares@agms.com',
    phone: '(11) 91234-5678',
}

export const AboutPage = () => {
    return (
        <CenterView>
            <Hbox>
                <Hbox.Item hAlign="flex-start">
                    <H1>Sobre sua empresa</H1>
                </Hbox.Item>
            </Hbox>

            <Row>
                <Col size={1}>
                    <Input
                        label="Nome da empresa"
                        value={MOCK_COMPANY.name}
                        disabled
                    />
                </Col>
            </Row>

            <Row>
                <Col size={1} minWidth={100}>
                    <Input label="CNPJ" value={MOCK_COMPANY.cnpj} disabled />
                </Col>
                <Separator horizontal size={Spacing.Small} />
                <Col size={1} minWidth={100}>
                    <Input
                        label="Área de atuação"
                        value={MOCK_COMPANY.area}
                        disabled
                    />
                </Col>
            </Row>

            <Row>
                <Col size={4} minWidth={100}>
                    <Input
                        label="Endereço"
                        value={MOCK_COMPANY.street}
                        disabled
                    />
                </Col>
                <Separator horizontal size={Spacing.Small} />
                <Col minWidth={10}>
                    <Input
                        label="Número"
                        value={MOCK_COMPANY.number}
                        disabled
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Input label="Email" value={MOCK_COMPANY.email} disabled />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Input
                        label="Telefone para contato"
                        value={MOCK_COMPANY.phone}
                        disabled
                    />
                </Col>
            </Row>
        </CenterView>
    )
}
