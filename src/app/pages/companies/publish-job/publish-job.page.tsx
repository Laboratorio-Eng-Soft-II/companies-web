import { CenterView } from '../../../../components/center-view/center-view.styles'
import { Row, Col } from '../../../../components/grid'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '../../../../components/input'
import { Button } from '../../../../components/button'
import { H1 } from '../../../../theme'
import { Separator } from '../../../../components/box/box.styles'

interface FormState {
    jobTitle: string
    description: string
    requirements: string
    salary: number
    benefits: string
}

export const PublishJobPage: React.FC = () => {
    const { control, handleSubmit } = useForm<FormState>({
        defaultValues: {
            jobTitle: '',
            description: '',
            requirements: '',
            salary: 0,
            benefits: '',
        },
    })

    const onSubmit: SubmitHandler<FormState> = data => {
        console.log(data)
    }
    return (
        <CenterView>
            <H1>Publique sua vaga</H1>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
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
                                <Input
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
                                <Input
                                    label="Requisitos"
                                    placeholder="Requisitos da vaga"
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
            </form>
        </CenterView>
    )
}
