import { CenterView } from '../../../../components/center-view/center-view.styles'
import { Row, Col } from '../../../../components/grid'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '../../../../components/input'
import { Button } from '../../../../components/button'
import { Button as AntdButton } from 'antd'
import { H2, LinkButton } from '../../../../theme'
import { Hbox, Separator } from '../../../../components/box/box.styles'
import { StarRating } from 'components/star-rating/star-rating'
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { InputLabel } from 'components/input/input-styles'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANIES_BASE_URL, STUDENTS_BASE_URL } from 'utils'
import { SelectField } from 'components/select'
import { FlashMessage } from 'components/flash-message/flash-message'
import { AppPath } from 'app/routes/app.path'

interface FormState {
    ratings: number[]
    comment: string
}

interface StudentModel {
    nusp: string
    address: string
    current_quarter: number
    name: string
    phone: string
    skills: string[]
    usp_email: string
}

interface StudentOption {
    name: string
    nusp: string
}

const availableRatings = [1, 2, 3, 4, 5]

const questions = [
    'De 1 a 5, como você julga a criatividade do aluno?',
    'De 1 a 5, como você julga a proatividade do aluno?',
    'De 1 a 5, como você julga o compromisso do aluno?',
    'De 1 a 5, como você julga a bagagem de conhecimento do aluno?',
]

export const TraineeReviewPage: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false)

    const { control, handleSubmit } = useForm<FormState>({
        defaultValues: {
            ratings: new Array(questions.length).fill(1),
            comment: '',
        },
    })

    const onSubmit: SubmitHandler<FormState> = async data => {
        const storageUser = localStorage.getItem('user')
        const user = storageUser ? JSON.parse(storageUser) : null

        const { comment } = data
        data.ratings = activeRatings
        console.log(data)

        await axios
            .post(`${COMPANIES_BASE_URL}companies/${user.nusp_cnpj}/feedback`, {
                author_nusp_cnpj: user.nusp_cnpj,
                target_nusp_cnpj: selectedStudent,
                answers: data.ratings,
                comments: comment,
            })
            .then(() => setShowAlert(true))
            .catch(error => console.log(error))
    }

    const [activeRatings, setActiveRatings] = useState<number[]>(
        new Array(questions.length).fill(1),
    )

    const [students, setStudents] = useState<StudentOption[]>()
    const [selectedStudent, setSelectedStudent] = useState<string>()

    useEffect(() => {
        axios.get(`${STUDENTS_BASE_URL}students`).then(res => {
            var response: StudentOption[] = []
            res.data.map((option: StudentModel) => {
                response.push({ name: option.name, nusp: option.nusp })
                return '' // Evitando erro de map sem return
            })
            setStudents(response)
        })
    }, [])

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
            {showAlert && (
                <FlashMessage
                    banner
                    showIcon
                    type="success"
                    afterClose={() => setShowAlert(false)}
                    message="Empresa criada com sucesso!"
                    action={
                        <AntdButton
                            onClick={() => navigation(AppPath.companies.home)}
                            type="link"
                            size="small"
                        >
                            IR PARA HOME
                        </AntdButton>
                    }
                />
            )}

            <H2>Avaliação - Estagiário</H2>

            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '70%' }}>
                <Row>
                    <Col>
                        <SelectField
                            label="Nome do estagiário"
                            options={students?.map(value => {
                                return { value: value.nusp, label: value.name }
                            })}
                            onChange={(value: string) =>
                                setSelectedStudent(value)
                            }
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
                                        navigation(AppPath.companies.home)
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
