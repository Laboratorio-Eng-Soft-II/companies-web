import logoPoli from '../../../../assets/LogoEPUSP.png'
import { CenterView } from '../../../../components/center-view/center-view.styles'
import { Row, Col } from '../../../../components/grid'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '../../../../components/input'
import { Button } from '../../../../components/button'
import { H1, H2, LinkButton } from '../../../../theme'
import { Hbox, Separator } from '../../../../components/box/box.styles'
import { StarRating } from 'components/star-rating/star-rating'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { InputLabel } from 'components/input/input-styles'
import { useNavigate } from 'react-router-dom'

interface FormState {
    traineeName: string
    ratings: number[]
    comment: string
}

const availableRatings = [1, 2, 3, 4, 5]

const questions = [
    'De 1 a 5, como você julga a criatividade do aluno?',
    'De 1 a 5, como você julga a proatividade do aluno?',
    'De 1 a 5, como você julga o compromisso do aluno?',
    'De 1 a 5, como você julga a bagagem de conhecimento do aluno?',
]

export const TraineeReviewPage: React.FC = () => {
    const { control, handleSubmit } = useForm<FormState>({
        defaultValues: {
            traineeName: '',
            ratings: new Array(questions.length).fill(1),
            comment: '',
        },
    })

    const onSubmit: SubmitHandler<FormState> = data => {
        data.ratings = activeRatings
        console.log(data)
    }

    const [activeRatings, setActiveRatings] = useState<number[]>(
        new Array(questions.length).fill(1),
    )

    const handleUpdateRating = (
        setActiveRatings: Dispatch<SetStateAction<number[]>>,
        rating: number,
        index: number,
    ) => {
        const updatedRatings = [...activeRatings]
        updatedRatings[index] = rating
        setActiveRatings(updatedRatings)
    }

    const navigation = useNavigate()

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

                {questions.map((question, index) => (
                    <Fragment key={`question${index}`}>
                        <Row>
                            <Col>
                                <InputLabel>{question}</InputLabel>
                                <Separator />
                                {availableRatings.map(rating => (
                                    <StarRating
                                        key={`question${index}-star${rating}`}
                                        isActive={
                                            rating <= activeRatings[index]
                                        }
                                        onClick={() =>
                                            handleUpdateRating(
                                                setActiveRatings,
                                                rating,
                                                index,
                                            )
                                        }
                                    />
                                ))}
                            </Col>
                        </Row>
                        <Separator />
                    </Fragment>
                ))}

                <Row>
                    <Col>
                        <Controller
                            name="comment"
                            control={control}
                            render={({ field }) => (
                                <Input label="Comentários extras" {...field} />
                            )}
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
