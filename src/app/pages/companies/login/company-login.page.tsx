import { CenterView } from 'components/center-view'
import { SubmitHandler } from 'react-hook-form'
import { Hbox } from '../../../../components/box/box.styles'
import { useNavigate } from 'react-router-dom'
import { AppPath } from 'app/routes/app.path'
import axios from 'axios'
import { Form, Input, Button, Card, Typography } from 'antd'
import { AUTH_BASE_URL } from 'utils'
import { useState } from 'react'
import { FlashMessage } from 'components/flash-message/flash-message'

interface IFormInput {
    email: string
    password: string
}

const { Title } = Typography

export const CompanyLoginPage = () => {
    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate()

    const [form] = Form.useForm()

    const onSubmit: SubmitHandler<IFormInput> = async data => {
        const { email, password } = data

        try {
            const result = await axios.post(`${AUTH_BASE_URL}get-token`, {
                email,
                password,
            })
            console.log(result.data)
            localStorage.setItem('user', JSON.stringify(result.data))
            navigate(AppPath.companies.home)
        } catch (error) {
            console.log(error)
            setShowAlert(true)
        }
    }

    return (
        <CenterView>
            {showAlert && (
                <FlashMessage
                    banner
                    showIcon
                    type="error"
                    afterClose={() => setShowAlert(false)}
                    message="Ocorreu um erro durante o login!"
                    action={
                        <Button
                            type="link"
                            size="small"
                            onClick={() => setShowAlert(false)}
                        >
                            TENTAR NOVAMENTE
                        </Button>
                    }
                />
            )}
            <Card
                bordered={false}
                style={{ overflow: 'scroll', maxHeight: '95%', width: '80%' }}
                type="inner"
            >
                <Hbox>
                    <Hbox.Item hAlign="flex-start">
                        <Title level={2}>Login</Title>
                    </Hbox.Item>
                </Hbox>
                <Form form={form} onFinish={onSubmit} layout="vertical">
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, digite seu email',
                            },
                        ]}
                    >
                        <Input placeholder="email@usp.br" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Senha"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, digite sua senha',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Digite sua senha" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary">
                            Login
                        </Button>
                        <Button
                            type="text"
                            onClick={() => navigate(AppPath.companies.signUp)}
                        >
                            Fazer cadastro
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </CenterView>
    )
}
