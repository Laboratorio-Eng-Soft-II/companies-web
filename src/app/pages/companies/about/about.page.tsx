import { CenterView } from 'components/center-view'
import { H1, Spacing } from 'theme'
import { Hbox, Separator } from '../../../../components/box/box.styles'
import { Row, Col } from '../../../../components/grid'
import { Input } from '../../../../components/input'
import { useEffect, useState } from 'react'
import { COMPANIES_BASE_URL } from 'utils'
import axios from 'axios'

interface companyModel {
    corporateName: string
    cnpj: string
    field: string
    address: string
    phone: string
    hrContactEmail: string
    hrContactName: string
    hrContactPhone: string
}

export const AboutPage = () => {
    const [company, setCompany] = useState<companyModel>()

    useEffect(() => {
        const storageUser = localStorage.getItem('user')
        const user = storageUser ? JSON.parse(storageUser) : null

        axios
            .get(`${COMPANIES_BASE_URL}companies/${user.nusp_cnpj}`)
            .then(response => setCompany(response.data))
    }, [])

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
                        value={company?.corporateName}
                        disabled
                    />
                </Col>
            </Row>

            <Row>
                <Col size={1} minWidth={100}>
                    <Input label="CNPJ" value={company?.cnpj} disabled />
                </Col>
                <Separator horizontal size={Spacing.Small} />
                <Col size={1} minWidth={100}>
                    <Input
                        label="Área de atuação"
                        value={company?.field}
                        disabled
                    />
                </Col>
            </Row>

            <Row>
                <Col size={4} minWidth={100}>
                    <Input label="Endereço" value={company?.address} disabled />
                </Col>
            </Row>

            <Row>
                <Col size={1} minWidth={100}>
                    <Input
                        label="Nome do Representante"
                        value={company?.hrContactName}
                        disabled
                    />
                </Col>
                <Separator horizontal size={Spacing.Small} />
                <Col size={1} minWidth={100}>
                    <Input
                        label="Email RH"
                        value={company?.hrContactEmail}
                        disabled
                    />
                </Col>
                <Separator horizontal size={Spacing.Small} />
                <Col size={1} minWidth={100}>
                    <Input
                        label="Telefone RH"
                        value={company?.hrContactPhone}
                        disabled
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Input
                        label="Telefone para contato"
                        value={company?.phone}
                        disabled
                    />
                </Col>
            </Row>
        </CenterView>
    )
}
