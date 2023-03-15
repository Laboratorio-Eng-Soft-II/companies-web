import logoPoli from '../../../../assets/LogoEPUSP.png'
import { CenterView } from '../../../../components/center-view/center-view.styles'
import { Row, Col } from '../../../../components/grid'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { Input, TextArea } from '../../../../components/input'
import { Button } from '../../../../components/button'
import { H1, H2 } from '../../../../theme'
import { Separator } from '../../../../components/box/box.styles'

interface FormState {
    jobTitle: string
    description: string
    requirements: string
    activities: string
    salary: number
    benefits: string
}

export const PublishJobPage: React.FC = () => {
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
                        <Controller
                            name="requirements"
                            control={control}
                            render={({ field }) => (
                                <TextArea
                                    label="Requisitos"
                                    placeholder="Adicione os requisitos necessários para a vaga"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                    <Separator horizontal />
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
                        <Controller
                            name="salary"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Remuneração"
                                    placeholder="R$ 0,00"
                                    type="number"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                </Row>
                <Separator />

                <Row>
                    <Button type="submit" expanded>
                        Enviar
                    </Button>
                </Row>
                <Separator />
            </form>
        </CenterView>
    )
}
