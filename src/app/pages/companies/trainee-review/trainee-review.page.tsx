import logoPoli from '../../../../assets/LogoEPUSP.png'
import { CenterView } from '../../../../components/center-view/center-view.styles'
import { Row, Col } from '../../../../components/grid'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '../../../../components/input'
import { Button } from '../../../../components/button'
import { H1, H2 } from '../../../../theme'
import { Separator } from '../../../../components/box/box.styles'

interface FormState {
    traineeName: string
    question1: number
    question2: number
    question3: number
    question4: number
    question5: number
}

export const TraineeReviewPage: React.FC = () => {
    const { control, handleSubmit } = useForm<FormState>({
        defaultValues: {
            traineeName: '',
            question1: 1,
            question2: 1,
            question3: 1,
            question4: 1,
            question5: 1,
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
            <H2>Avaliação - Estagiário</H2>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '70%' }}>
                <Row>
                    <Col>
                        <Controller
                            name="traineeName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Nome do estagiário"
                                    placeholder="Digite o nome do estagiário"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                </Row>
                <Separator />
                <Row>
                    <Col></Col>
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
