import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Row, Col } from '../../../../components/grid'
import { Input } from '../../../../components/input'

interface IFormInput {
    name: string
}

export const CompanySignUpPage = () => {
    const { handleSubmit, control } = useForm<IFormInput>({
        defaultValues: { name: '' },
    })

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Input type="submit" value="Enviar" />
                </Col>
            </Row>
        </form>
    )
}
