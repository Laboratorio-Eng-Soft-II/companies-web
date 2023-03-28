import { Button } from 'components/button'
import { CenterView } from 'components/center-view'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { H1, Spacing } from 'theme'
import { Hbox, Separator } from '../../../../components/box/box.styles'
import { Row, Col } from '../../../../components/grid'
import { Input } from '../../../../components/input'

interface IFormInput {
    name: string
    cnpj: string
    area: string
    street: string
    number: string
    phone: string
    email: string
    password: string
}

export const CompanySignUpPage = () => {
    const { handleSubmit, control } = useForm<IFormInput>({
        defaultValues: {
            name: '',
            cnpj: '',
            area: '',
            street: '',
            number: '',
            phone: '',
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
    }
    return (
        <CenterView>
            <Hbox>
                <Hbox.Item hAlign="flex-start">
                    <H1>Cadastro de Empresa</H1>
                </Hbox.Item>
            </Hbox>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <Row>
                    <Col size={1}>
                        <Controller
                            name="name"
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
                                <Input
                                    label="CNPJ"
                                    placeholder="Digite o CNPJ da empresa"
                                    {...field}
                                />
                            )}
                        />
                    </Col>
                    <Separator horizontal size={Spacing.Small} />
                    <Col size={1} minWidth={100}>
                        <Controller
                            name="area"
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
                            name="street"
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
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Email"
                                    type="email"
                                    placeholder="exemplo@exemplo.com"
                                    {...field}
                                />
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
                                <Input
                                    label="Telefone para contato"
                                    {...field}
                                />
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
                <Button type="submit">Enviar</Button>
            </form>
        </CenterView>
    )
}
