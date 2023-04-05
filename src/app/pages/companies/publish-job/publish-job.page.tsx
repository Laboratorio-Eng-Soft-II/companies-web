import { CenterView } from '../../../../components/center-view/center-view.styles'
import { SubmitHandler } from 'react-hook-form'
import { H1 } from '../../../../theme'
import { useNavigate } from 'react-router-dom'
import { NumericFormat } from 'react-number-format'
import axios from 'axios'
import { useState } from 'react'
import { POSITIONS_BASE_URL } from 'utils'
import { FlashMessage } from 'components/flash-message/flash-message'
import {
    Form,
    Select,
    Button as AntdButton,
    Card,
    Input,
    Typography,
    Space,
} from 'antd'
import { AppPath } from 'app/routes/app.path'

interface FormState {
    jobTitle: string
    description: string
    requirements: string[]
    activities: string
    salary: number
    benefits: string
    cnpj: string
}

const options = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'ReactJS', value: 'reactjs' },
    { label: 'NodeJs', value: 'nodejs' },
    { label: 'Inglês', value: 'english' },
]

const { Title } = Typography

export const PublishJobPage: React.FC = () => {
    const navigation = useNavigate()

    const [salary, setSalary] = useState<number>()
    const [showAlert, setShowAlert] = useState(false)

    const storedUser = localStorage.getItem('user')
    const user = storedUser ? JSON.parse(storedUser) : {}
    const cnpj = user.nusp_cnpj

    const onSubmit: SubmitHandler<FormState> = async data => {
        const { jobTitle, description, activities, benefits, requirements } =
            data

        try {
            await axios.post(`${POSITIONS_BASE_URL}positions`, {
                cnpj,
                type: jobTitle,
                description,
                main_work: activities,
                benefits,
                salary,
                required_skills: requirements,
            })
            setShowAlert(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CenterView>
            {showAlert && (
                <FlashMessage
                    banner
                    showIcon
                    message="Vaga criada com sucesso"
                    afterClose={() => setShowAlert(false)}
                    type="success"
                    action={
                        <AntdButton
                            type="link"
                            onClick={() => navigation(AppPath.companies.home)}
                        >
                            IR PARA HOME
                        </AntdButton>
                    }
                />
            )}
            <H1>Internship 4.0 - Portal de estágios</H1>
            <Card
                bordered={false}
                style={{ overflow: 'scroll', maxHeight: '95%', width: '80%' }}
                type="inner"
            >
                <Title level={3}>Publique sua vaga</Title>
                <Form onFinish={onSubmit} layout="vertical">
                    <Form.Item name="jobTitle" label="Título da vaga">
                        <Input placeholder="Digite o título da vaga" />
                    </Form.Item>

                    <Form.Item name="description" label="Descrição">
                        <Input.TextArea placeholder="Adicione um descrição à vaga" />
                    </Form.Item>

                    <Form.Item name="requirements" label="Requisitions">
                        <Select
                            mode="multiple"
                            allowClear
                            placeholder="Selecione os requisitos"
                            options={options}
                        />
                    </Form.Item>

                    <Form.Item name="activities" label="Atividades principais">
                        <Input.TextArea placeholder="Descreva o que será desenvolvido durante o estágio" />
                    </Form.Item>

                    <Form.Item name="benefits" label="Benefícios">
                        <Input.TextArea placeholder="Benfícios oferecidos" />
                    </Form.Item>

                    <Form.Item name="salary" label="Remuneração">
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
                                height: '32px',
                                padding: '8px',
                                border: '1px solid #d9d9d9',
                            }}
                            onValueChange={value => setSalary(value.floatValue)}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Space>
                            <AntdButton
                                onClick={() => navigation('/companies/home')}
                            >
                                Voltar
                            </AntdButton>
                            <AntdButton type="primary" htmlType="submit">
                                Enviar
                            </AntdButton>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </CenterView>
    )
}
