import logoPoli from '../../../../assets/LogoEPUSP.png'
import { CenterView } from '../../../../components/center-view/center-view.styles'
import { Row, Col } from '../../../../components/grid'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { Input, TextArea } from '../../../../components/input'
import { Button } from '../../../../components/button'
import { H1, H2, LinkButton } from '../../../../theme'
import { useNavigate } from 'react-router-dom'
import { Hbox, Separator } from '../../../../components/box/box.styles'
import { SelectField } from 'components/select'
import { NumericFormat } from 'react-number-format'

interface FormState {
    jobTitle: string
    description: string
    requirements: string
    activities: string
    salary: number
    benefits: string
}

const options = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'ReactJS', value: 'reactjs' },
    { label: 'NodeJs', value: 'nodejs' },
    { label: 'Inglês', value: 'english' },
]

export const PublishJobPage: React.FC = () => {
    const navigation = useNavigate()
    const { control, handleSubmit } = useForm<FormState>({
        defaultValues: {
            jobTitle: '',
            description: '',
            requirements: '',
            activities: '',
            salary: 0,
            benefits: '',
        },
    })

    const onSubmit: SubmitHandler<FormState> = data => {
        console.log(data)
    }
    return (
        <CenterView>
            <img
                width="100px"
                height="100px"
                src={logoPoli}
                alt="logo da Poli"
            ></img>
            <H1 textAlign="center">Internship 4.0 - Portal de estágios</H1>
            <H2>Publique sua vaga</H2>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '70%' }}>
                <Row>
                    <Col>
                        <Controller
                            name="jobTitle"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Título da vaga"
                                    placeholder="Digite o título da vaga"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                </Row>
                <Separator />
                <Row>
                    <Col>
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <TextArea
                                    label="Descrição"
                                    placeholder="Adicione um descrição à vaga"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                </Row>
                <Separator />
                <Row>
                    <Col>
                        <SelectField
                            label="Requisitos"
                            mode="multiple"
                            allowClear
                            placeholder="Selecione os requisitos"
                            options={options}
                        />
                    </Col>
                </Row>
                <Separator />
                <Row>
                    <Col>
                        <Controller
                            name="activities"
                            control={control}
                            render={({ field }) => (
                                <TextArea
                                    label="Atividades principais"
                                    placeholder="Descreva o que será desenvolvido durante o estágio"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                </Row>
                <Separator />
                <Row>
                    <Col>
                        <NumericFormat
                            prefix="R$"
                            placeholder="R$ 0,00"
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            thousandsGroupStyle="thousand"
                            style={{
                                width: '100%',
                                borderRadius: '8px',
                                height: '44px',
                                padding: '12px',
                            }}
                        />
                    </Col>
                </Row>
                <Separator />

                <Row>
                    <Col>
                        <Hbox hAlign="flex-end">
                            <Hbox.Item>
                                <LinkButton
                                    onClick={() =>
                                        navigation('/companies/home')
                                    }
                                >
                                    Voltar
                                </LinkButton>
                            </Hbox.Item>
                            <Hbox.Separator />
                            <Hbox.Item>
                                <Button type="submit">Enviar</Button>
                            </Hbox.Item>
                        </Hbox>
                    </Col>
                </Row>
                <Separator />
            </form>
        </CenterView>
    )
}
