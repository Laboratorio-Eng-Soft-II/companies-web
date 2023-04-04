import { CenterView } from 'components/center-view'
import { SubmitHandler } from 'react-hook-form'
import { Hbox } from '../../../../components/box/box.styles'
import { useNavigate } from 'react-router-dom'
import { AppPath } from 'app/routes/app.path'
import { Form, Input, Button, Card, Typography } from 'antd'

interface IFormInput {
    email: string
    password: string
}

const { Title } = Typography

export const CompanyLoginPage = () => {
    const navigate = useNavigate()

    const [form] = Form.useForm()

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
        navigate(AppPath.companies.home)
    }
    return (
        <CenterView>
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
