import { Button } from 'components/button'
import { CenterView } from 'components/center-view'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { H1, LinkButton, Spacing } from 'theme'
import { Hbox, Separator } from '../../../../components/box/box.styles'
import { Row, Col } from '../../../../components/grid'
import { Input } from '../../../../components/input'
import axios from 'axios'
import { BASE_URL } from 'utils'
import { useState } from 'react'
import { FlashMessage } from 'components/flash-message/flash-message'
import { PatternFormat } from 'react-number-format'
import { InputLabel } from 'components/input/input-styles'
import { useNavigate } from 'react-router-dom'
import { AppPath } from 'app/routes/app.path'
import { Button as AntdButton } from 'antd'

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

export const CompanySignUpPage = () => {
    const [showAlert, setShowAlert] = useState(false)

    const navigate = useNavigate()

    const { handleSubmit, control } = useForm<IFormInput>({
        defaultValues: {
            corporateName: '',
            cnpj: '',
            field: '',
            address: '',
            number: '',
            phone: '',
            hrContactEmail: '',
            hrContactName: '',
            hrContactPhone: '',
            password: '',
        },
    })

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
            <Hbox>
                <Hbox.Item hAlign="flex-start">
                    <H1>Cadastro de Empresa</H1>
                </Hbox.Item>
            </Hbox>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <Row>
                    <Col size={1}>
                        <Controller
                            name="corporateName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Nome da empresa"
                                    placeholder="Digite o nome da empresa"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                </Row>

                <Separator />

                <Row>
                    <Col size={1} minWidth={100}>
                        <Controller
                            name="cnpj"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <InputLabel>CNPJ</InputLabel>
                                    <PatternFormat
                                        format="##.###.###/####-##"
                                        style={{
                                            width: '100%',
                                            borderRadius: '8px',
                                            height: '44px',
                                            padding: '12px',
                                        }}
                                        placeholder="Digite o CNPJ da empresa"
                                        {...field}
                                    />
                                </>
                            )}
                        />
                    </Col>
                    <Separator horizontal size={Spacing.Small} />
                    <Col size={1} minWidth={100}>
                        <Controller
                            name="field"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Área de atuação"
                                    placeholder="Ex: Mercado Financeiro"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                </Row>

                <Separator />

                <Row>
                    <Col size={4} minWidth={100}>
                        <Controller
                            name="address"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Endereço"
                                    placeholder="Digite o endereço da empresa"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                    <Separator horizontal size={Spacing.Small} />
                    <Col minWidth={10}>
                        <Controller
                            name="number"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Número"
                                    type="number"
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
                            name="hrContactName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Nome do representante"
                                    placeholder="Digite o nome"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                    <Separator horizontal size={Spacing.Small} />
                    <Col>
                        <Controller
                            name="hrContactEmail"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Email do RH"
                                    type="email"
                                    placeholder="exemplo@exemplo.com"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                    <Separator horizontal size={Spacing.Small} />
                    <Col>
                        <Controller
                            name="hrContactPhone"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <InputLabel>Telefone do RH</InputLabel>
                                    <PatternFormat
                                        placeholder="Digite o telefone"
                                        format="(##) #####-####"
                                        style={{
                                            width: '100%',
                                            borderRadius: '8px',
                                            height: '44px',
                                            padding: '12px',
                                        }}
                                        {...field}
                                    />
                                </>
                            )}
                        />
                    </Col>
                </Row>

                <Separator />

                <Row>
                    <Col minWidth={100}>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <InputLabel>Telefone da empresa</InputLabel>
                                    <PatternFormat
                                        format="(##) #####-####"
                                        style={{
                                            width: '100%',
                                            borderRadius: '8px',
                                            height: '44px',
                                            padding: '12px',
                                        }}
                                        {...field}
                                    />
                                </>
                            )}
                        />
                    </Col>
                    <Separator horizontal size={Spacing.Small} />
                    <Col minWidth={100}>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Senha"
                                    placeholder="Senha para acesso à plataforma"
                                    type="password"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                </Row>
                <Separator />
                <Hbox>
                    <Hbox.Item>
                        <Button type="submit">Cadastrar</Button>
                    </Hbox.Item>
                    <Hbox.Item>
                        <LinkButton
                            onClick={() => navigate(AppPath.companies.login)}
                        >
                            Ir para login
                        </LinkButton>
                    </Hbox.Item>
                </Hbox>
            </form>
        </CenterView>
    )
}
