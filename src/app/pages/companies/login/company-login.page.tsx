import { Button } from 'components/button'
import { CenterView } from 'components/center-view'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { H1 } from 'theme'
import { Hbox, Separator } from '../../../../components/box/box.styles'
import { Row, Col } from '../../../../components/grid'
import { Input } from '../../../../components/input'

interface IFormInput {
    email: string
    password: string
}

export const CompanyLoginPage = () => {
    const { handleSubmit, control } = useForm<IFormInput>({
        defaultValues: {
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
                    <H1>Login</H1>
                </Hbox.Item>
            </Hbox>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <Row>
                    <Col size={1}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Email"
                                    placeholder="example@example.com"
                                    type="email"
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
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Senha"
                                    placeholder="Digite sua senha"
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
