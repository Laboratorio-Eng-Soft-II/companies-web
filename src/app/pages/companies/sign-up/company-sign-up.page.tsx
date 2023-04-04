import { CenterView } from 'components/center-view'
import { SubmitHandler } from 'react-hook-form'
import { Spacing } from 'theme'
import { Hbox, Separator } from '../../../../components/box/box.styles'
import axios from 'axios'
import { BASE_URL } from 'utils'
import { useState } from 'react'
import { FlashMessage } from 'components/flash-message/flash-message'
import { PatternFormat } from 'react-number-format'
import { useNavigate } from 'react-router-dom'
import { AppPath } from 'app/routes/app.path'
import {
    Button as AntdButton,
    Card,
    Typography,
    Input,
    Form,
    InputNumber,
} from 'antd'

interface IFormInput {
    corporateName: string
    cnpj: string
    field: string
    address: string
    number: string
    phone: string
    hrContactEmail: string
    hrContactName: string
    hrContactPhone: string
    password: string
}

const { Title } = Typography

export const CompanySignUpPage = () => {
    const [showAlert, setShowAlert] = useState(false)

    const navigate = useNavigate()

    const [form] = Form.useForm()

    const onSubmit: SubmitHandler<IFormInput> = async data => {
        const {
            corporateName,
            address,
            field,
            phone,
            hrContactEmail,
            hrContactName,
            hrContactPhone,
            cnpj,
            password,
        } = data
        await axios
            .post(`${BASE_URL}companies`, {
                cnpj,
                corporateName,
                address,
                field,
                phone,
                hrContactEmail,
                hrContactName,
                hrContactPhone,
                password,
            })
            .then(response => {
                setShowAlert(true)
            })
            .catch(error => console.log(error))
    }
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
                            onClick={() => navigate(AppPath.companies.home)}
                            type="link"
                            size="small"
                        >
                            IR PARA HOME
                        </AntdButton>
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
                        <Title level={2}>Cadastro de Empresa</Title>
                    </Hbox.Item>
                </Hbox>
                <Form
                    onFinish={onSubmit}
                    style={{ width: '100%', flex: 1 }}
                    layout="vertical"
                    form={form}
                >
                    <Form.Item name="corporateName" label="Nome da empresa">
                        <Input placeholder="Digite o nome da empresa" />
                    </Form.Item>
                    <Hbox>
                        <Hbox.Item grow>
                            <Form.Item name="cnpj" label="CNPJ">
                                <PatternFormat
                                    format="##.###.###/####-##"
                                    style={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        height: '32px',
                                        padding: '8px',
                                        border: '1px solid #d9d9d9',
                                    }}
                                    placeholder="Digite o CNPJ da empresa"
                                />
                            </Form.Item>
                        </Hbox.Item>
                        <Hbox.Separator />
                        <Hbox.Item grow>
                            <Form.Item name="field" label="Área de atuação">
                                <Input placeholder="Ex: Mercado Financeiro" />
                            </Form.Item>
                        </Hbox.Item>
                    </Hbox>
                    <Separator />
                    <Hbox>
                        <Hbox.Item grow>
                            <Form.Item name="address" label="Endereço">
                                <Input placeholder="Digite o endereço da empresa" />
                            </Form.Item>
                        </Hbox.Item>
                        <Hbox.Separator />
                        <Hbox.Item>
                            <Form.Item
                                name="number"
                                label="Número"
                                style={{ flex: 1 }}
                            >
                                <InputNumber placeholder="Número" />
                            </Form.Item>
                        </Hbox.Item>
                    </Hbox>
                    <Separator />
                    <Hbox>
                        <Hbox.Item grow>
                            <Form.Item
                                name="hrContactName"
                                label="Nome do representante"
                            >
                                <Input placeholder="Digite o nome" />
                            </Form.Item>
                        </Hbox.Item>
                        <Separator horizontal size={Spacing.Small} />
                        <Hbox.Item grow>
                            <Form.Item
                                name="hrContactEmail"
                                label="Email do RH"
                            >
                                <Input placeholder="email@usp.br" />
                            </Form.Item>
                        </Hbox.Item>
                        <Separator horizontal size={Spacing.Small} />
                        <Hbox.Item grow>
                            <Form.Item name="hrContactPhone" label="Contato RH">
                                <PatternFormat
                                    placeholder="Digite o telefone"
                                    format="(##) #####-####"
                                    style={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        height: '32px',
                                        padding: '8px',
                                        border: '1px solid #d9d9d9',
                                    }}
                                />
                            </Form.Item>
                        </Hbox.Item>
                    </Hbox>
                    <Separator />
                    <Hbox>
                        <Hbox.Item grow>
                            <Form.Item name="phone" label="Telefone da empresa">
                                <PatternFormat
                                    format="(##) #####-####"
                                    style={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        height: '32px',
                                        padding: '8px',
                                        border: '1px solid #d9d9d9',
                                    }}
                                />
                            </Form.Item>
                        </Hbox.Item>
                        <Separator horizontal size={Spacing.Small} />
                        <Hbox.Item grow>
                            <Form.Item name="password" label="Senha">
                                <Input.Password placeholder="Senha para acesso à plataforma" />
                            </Form.Item>
                        </Hbox.Item>
                    </Hbox>
                    <Separator />
                    <Hbox>
                        <Hbox.Item>
                            <AntdButton type="primary" htmlType="submit">
                                Cadastrar
                            </AntdButton>
                        </Hbox.Item>
                        <Hbox.Item>
                            <AntdButton
                                type="text"
                                onClick={() =>
                                    navigate(AppPath.companies.login)
                                }
                            >
                                Ir para login
                            </AntdButton>
                        </Hbox.Item>
                    </Hbox>
                </Form>
            </Card>
        </CenterView>
    )
}
