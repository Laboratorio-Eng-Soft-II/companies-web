import { Button } from 'components/button'
import { CenterView } from 'components/center-view'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { H1 } from 'theme'
import { Hbox, Separator } from '../../../../components/box/box.styles'
import { Row, Col } from '../../../../components/grid'
import { Input } from '../../../../components/input'
import { useNavigate } from 'react-router-dom'
import { AppPath } from 'app/routes/app.path'

interface IFormInput {
    email: string
    password: string
}

export const CompanyLoginPage = () => {
    const navigate = useNavigate()

    const { handleSubmit, control } = useForm<IFormInput>({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = data => {
        navigate(AppPath.companies.home)
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

                <Button type="submit">Login</Button>
            </form>
        </CenterView>
    )
}
