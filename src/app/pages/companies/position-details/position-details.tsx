import { CenterView, Row, Col, Input, TextArea } from 'components'
import { H1, H2, LinkButton } from 'theme/typography'
import logoPoli from '../../../../assets/LogoEPUSP.png'
import { useParams } from 'react-router'
import { MOCK_POSITIONS } from '../positions'
import { SelectField } from 'components/select'
import { Hbox, Separator } from 'components/box/box.styles'
import { useNavigate } from 'react-router'
import { Spacing } from 'theme'

interface RouteParams {
    id: string | undefined
}

export const PositionDetailsPage: React.FC = () => {
    const params = useParams()

    const { id } = params as unknown as RouteParams

    const position = MOCK_POSITIONS.find(position => position.id === id)

    const navigate = useNavigate()

    return (
        <CenterView>
            <img
                width="100px"
                height="100px"
                src={logoPoli}
                alt="logo da Poli"
            ></img>
            <H1 textAlign="center">Internship 4.0 - Portal de estágios</H1>
            <H2>Detalhes da Vaga</H2>
            <Hbox>
                <Hbox.Item grow>
                    <Row>
                        <Col>
                            <Input
                                disabled
                                value={position?.title}
                                label="Título da Vaga"
                            />
                        </Col>
                    </Row>
                    <Separator size={Spacing.Small} />
                    <Row>
                        <Col>
                            <TextArea
                                disabled
                                value={position?.description}
                                label="Descrição da vaga"
                            />
                        </Col>
                    </Row>
                    <Separator size={Spacing.Small} />
                    <Row>
                        <Col>
                            <SelectField
                                defaultValue={position?.requirements}
                                label="Requisitos"
                                options={position?.requirements}
                            />
                        </Col>
                    </Row>
                    <Separator size={Spacing.Small} />
                    <Row>
                        <Col>
                            <TextArea
                                disabled
                                value={position?.activities}
                                label="Atividades a serem realizadas"
                            />
                        </Col>
                    </Row>
                    <Separator size={Spacing.Small} />
                    <Row>
                        <Col>
                            <Input
                                disabled
                                value={
                                    'R$ ' +
                                    position?.salary
                                        .toFixed(2)
                                        .replace('.', ',')
                                }
                                label="Remuneração"
                            />
                        </Col>
                    </Row>
                </Hbox.Item>
            </Hbox>
            <Separator size={Spacing.Small} />
            <Hbox>
                <Hbox.Item>
                    <LinkButton onClick={() => navigate(-1)}>Voltar</LinkButton>
                </Hbox.Item>
            </Hbox>
        </CenterView>
    )
}
